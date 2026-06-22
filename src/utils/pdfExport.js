import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';

export const downloadPDF = async (elementId, filename = 'resume') => {
  const element = document.getElementById(elementId);
  if (!element) throw new Error('Resume preview element not found');

  // Wait for all fonts to be fully loaded so that character metrics are correct
  if (document.fonts) {
    await document.fonts.ready;
  }

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    allowTaint: false,
    backgroundColor: '#ffffff',
    logging: false,
    onclone: (clonedDoc) => {
      const head = clonedDoc.head || clonedDoc.getElementsByTagName('head')[0];
      if (head) {
        // 1. Try to inline all CSS rules directly to avoid asynchronous loading and relative path resolution issues
        const style = clonedDoc.createElement('style');
        let cssText = '';
        
        Array.from(document.styleSheets).forEach((sheet) => {
          try {
            if (sheet.cssRules) {
              Array.from(sheet.cssRules).forEach((rule) => {
                // Skip font-face (5) and import (3) rules to prevent async reloading overlaps
                if (rule.type === 3 || rule.type === 5 || rule.cssText.startsWith('@import') || rule.cssText.startsWith('@font-face')) {
                  return;
                }
                cssText += rule.cssText + '\n';
              });
            }
          } catch (e) {
            // CSS rules might be inaccessible for cross-origin sheets (rare here, but good to handle)
            console.warn('Could not read style rules from sheet:', e);
          }
        });
        
        if (cssText) {
          style.appendChild(clonedDoc.createTextNode(cssText));
          head.appendChild(style);
        }

        // 2. Also copy link tags with absolute URLs and style tags as a fallback or auxiliary styles
        Array.from(document.querySelectorAll('link[rel="stylesheet"]')).forEach((link) => {
          const newLink = clonedDoc.importNode(link, true);
          if (newLink.href) {
            // Force absolute URL resolution so about:blank resolves it to the correct host
            newLink.href = new URL(newLink.href, window.location.href).href;
          }
          head.appendChild(newLink);
        });
        
        Array.from(document.querySelectorAll('style')).forEach((styleEl) => {
          const newStyle = clonedDoc.importNode(styleEl, true);
          head.appendChild(newStyle);
        });
      }

      // Copy font faces to the cloned iframe document context to prevent font fallbacks and overlap
      if (document.fonts && clonedDoc.fonts) {
        document.fonts.forEach((font) => {
          clonedDoc.fonts.add(font);
        });
      }
    },
  });

  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  
  const imgWidth = canvas.width;
  const imgHeight = canvas.height;
  const ratio = pdfWidth / imgWidth;
  let imgScaledWidth = pdfWidth;
  let imgScaledHeight = imgHeight * ratio;

  // Smart single-page fit: if it overflows a single page by up to 30%,
  // scale it down to fit on a single A4 page instead of generating a second page with empty space.
  const overflowThreshold = 1.3;
  const shouldForceSinglePage = imgScaledHeight <= pdfHeight * overflowThreshold;

  if (shouldForceSinglePage) {
    const canvasRatio = imgWidth / imgHeight;
    imgScaledHeight = pdfHeight;
    imgScaledWidth = pdfHeight * canvasRatio;
    const xOffset = (pdfWidth - imgScaledWidth) / 2;
    pdf.addImage(imgData, 'PNG', xOffset, 0, imgScaledWidth, imgScaledHeight);
  } else {
    // Multi-page layout for genuinely longer resumes
    let position = 0;
    pdf.addImage(imgData, 'PNG', 0, position, imgScaledWidth, imgScaledHeight);

    let heightLeft = imgScaledHeight - pdfHeight;
    while (heightLeft > 0) {
      position -= pdfHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgScaledWidth, imgScaledHeight);
      heightLeft -= pdfHeight;
    }
  }

  pdf.save(`${filename.replace(/\s+/g, '_')}.pdf`);
};

export const printResume = () => {
  window.print();
};

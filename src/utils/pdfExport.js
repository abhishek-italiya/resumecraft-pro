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
      // Copy all style tags and link tags to clonedDoc head to ensure Tailwind and custom styles are applied
      const head = clonedDoc.head || clonedDoc.getElementsByTagName('head')[0];
      if (head) {
        // Copy stylesheet link elements
        Array.from(document.querySelectorAll('link[rel="stylesheet"]')).forEach((link) => {
          const newLink = clonedDoc.importNode(link, true);
          head.appendChild(newLink);
        });
        
        // Copy inline style elements (which contain dynamically injected Tailwind CSS in Vite dev)
        Array.from(document.querySelectorAll('style')).forEach((style) => {
          const newStyle = clonedDoc.importNode(style, true);
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
  const imgScaledWidth = pdfWidth;
  const imgScaledHeight = imgHeight * ratio;

  let position = 0;
  pdf.addImage(imgData, 'PNG', 0, position, imgScaledWidth, imgScaledHeight);

  let heightLeft = imgScaledHeight - pdfHeight;
  while (heightLeft > 0) {
    position -= pdfHeight;
    pdf.addPage();
    pdf.addImage(imgData, 'PNG', 0, position, imgScaledWidth, imgScaledHeight);
    heightLeft -= pdfHeight;
  }

  pdf.save(`${filename.replace(/\s+/g, '_')}.pdf`);
};

export const printResume = () => {
  window.print();
};

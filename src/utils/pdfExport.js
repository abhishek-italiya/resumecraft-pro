import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';

export const downloadPDF = async (elementId, filename = 'resume') => {
  const element = document.getElementById(elementId);
  if (!element) throw new Error('Resume preview element not found');

  // Create an off-screen container for rendering A4 at full scale
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.left = '-9999px';
  container.style.top = '-9999px';
  container.style.width = '794px';
  container.style.margin = '0';
  container.style.padding = '0';

  // Clone the resume preview element
  const clone = element.cloneNode(true);
  clone.style.width = '794px';
  clone.style.transform = 'none';
  clone.style.margin = '0';
  clone.style.padding = '0';
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';

  container.appendChild(clone);
  document.body.appendChild(container);

  try {
    // Wait for all images inside the clone to load completely
    const images = Array.from(clone.querySelectorAll('img'));
    await Promise.all(
      images.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      })
    );

    // Wait for fonts to be ready
    if (document.fonts) {
      await document.fonts.ready;
    }

    const templateRoot = clone.firstElementChild || clone;
    const PAGE_HEIGHT = 1123; // A4 standard height at 96 DPI

    // Identify block elements we want to keep together (avoid breaking inside them)
    const avoidBreakSelectors = '[data-page-break="avoid"]';

    const elementsToKeepTogether = Array.from(templateRoot.querySelectorAll(avoidBreakSelectors));

    // Dynamic page-break logic: Insert spacers to push elements to the next page
    for (let i = 0; i < elementsToKeepTogether.length; i++) {
      const el = elementsToKeepTogether[i];
      const containerRect = templateRoot.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();

      const top = elRect.top - containerRect.top;
      const height = elRect.height;

      // Skip elements that are hidden or larger than a single page
      if (height <= 0 || height >= PAGE_HEIGHT) {
        continue;
      }

      const startPage = Math.floor(top / PAGE_HEIGHT);
      const endPage = Math.floor((top + height) / PAGE_HEIGHT);

      if (startPage !== endPage) {
        // Element spans across a page boundary. Insert a spacer to push it to the next page.
        const spacerHeight = PAGE_HEIGHT - (top % PAGE_HEIGHT);

        const spacer = document.createElement('div');
        spacer.style.height = `${spacerHeight}px`;
        spacer.style.width = '100%';
        spacer.style.clear = 'both';
        spacer.style.backgroundColor = 'transparent';
        spacer.className = 'pdf-page-break-spacer';

        el.parentNode.insertBefore(spacer, el);
      }
    }

    // Render the entire clone to a canvas using the requested high quality settings
    const canvas = await html2canvas(clone, {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
    });

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Determine the total pages based on the layout height
    const totalHeight = templateRoot.offsetHeight;
    const numPages = Math.ceil(totalHeight / PAGE_HEIGHT);

    const pageCanvasWidth = 794 * 3;
    const pageCanvasHeight = 1123 * 3;

    for (let page = 0; page < numPages; page++) {
      if (page > 0) {
        pdf.addPage();
      }

      // Crop canvas for the current page
      const pageCanvas = document.createElement('canvas');
      pageCanvas.width = pageCanvasWidth;
      pageCanvas.height = pageCanvasHeight;
      const ctx = pageCanvas.getContext('2d');

      ctx.drawImage(
        canvas,
        0, page * pageCanvasHeight, pageCanvasWidth, pageCanvasHeight, // Source slice
        0, 0, pageCanvasWidth, pageCanvasHeight // Destination bounds
      );

      const pageImgData = pageCanvas.toDataURL('image/jpeg', 0.95);
      pdf.addImage(pageImgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
    }

    pdf.save(`${filename.replace(/\s+/g, '_')}.pdf`);
  } finally {
    // Always clean up the off-screen clone container
    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
  }
};

export const printResume = () => {
  window.print();
};

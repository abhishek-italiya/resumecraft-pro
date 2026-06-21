import { useEffect, useRef, useState } from 'react';
import CorporateTemplate from '../templates/CorporateTemplate';
import CreativeTemplate from '../templates/CreativeTemplate';
import MinimalTemplate from '../templates/MinimalTemplate';
import ExecutiveTemplate from '../templates/ExecutiveTemplate';
import TechSidebarTemplate from '../templates/TechSidebarTemplate';
import BoldHeaderTemplate from '../templates/BoldHeaderTemplate';
import ModernCompactTemplate from '../templates/ModernCompactTemplate';
import ElegantAccentTemplate from '../templates/ElegantAccentTemplate';
import { usePreviewScale } from '../../hooks/usePreviewScale';

const templates = {
  corporate: CorporateTemplate,
  creative: CreativeTemplate,
  minimal: MinimalTemplate,
  executive: ExecutiveTemplate,
  tech: TechSidebarTemplate,
  bold: BoldHeaderTemplate,
  compact: ModernCompactTemplate,
  accent: ElegantAccentTemplate,
};

const ResumePreview = ({ data, id = 'resume-preview-print' }) => {
  const Template = templates[data.template] || CorporateTemplate;

  return (
    <div id={id} className="shadow-2xl rounded-lg overflow-hidden bg-white">
      <Template data={data} />
    </div>
  );
};

export const ScaledResumePreview = ({ data, id = 'resume-preview-print' }) => {
  const { containerRef, scale, a4Width } = usePreviewScale();
  const innerRef = useRef(null);
  const [scaledHeight, setScaledHeight] = useState(undefined);
  const Template = templates[data.template] || CorporateTemplate;

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const update = () => setScaledHeight(el.offsetHeight * scale);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [scale, data]);

  return (
    <div ref={containerRef} className="w-full max-w-full">
      <div
        className="mx-auto overflow-hidden"
        style={{
          width: `${a4Width * scale}px`,
          height: scaledHeight ? `${scaledHeight}px` : undefined,
        }}
      >
        <div
          ref={innerRef}
          id={id}
          className="shadow-2xl rounded-lg overflow-hidden bg-white"
          style={{
            width: `${a4Width}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          <Template data={data} />
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;

export default function BrandLockup({ className = '', role = 'Software engineer' }) {
  return (
    <span className={`brand-lockup ${className}`.trim()}>
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-mark__shadow" />
        <span className="brand-mark__depth" />
        <span className="brand-mark__rim" />
        <span className="brand-mark__face">
          <span className="brand-mark__sheen" />
          <span className="brand-mark__monogram">YK</span>
        </span>
      </span>

      <span className="brand-copy">
        <span className="brand-copy__name">Yamen Alkuify</span>
        <span className="brand-copy__role">{role}</span>
      </span>
    </span>
  );
}

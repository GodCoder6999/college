/**
 * Inline SVG assets used by the layout.
 *
 * Every other glyph comes from Font Awesome 6.4.0, which is loaded
 * globally in `src/app/layout.tsx` — use `<i className="fas fa-bell" />` for those.
 * Only these two inline SVGs are hand-rolled.
 */

/** `.progress-wrap .progress-circle` — scroll-progress ring. */
export function ProgressRingIcon({
  className,
  pathStyle,
}: {
  className?: string;
  pathStyle?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
      aria-hidden="true"
    >
      <path
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        style={pathStyle}
      />
    </svg>
  );
}

/** `.curve-cls.bottom` — white concave curve at the bottom of the gallery section. */
export function BottomCurveIcon({
  className,
  fill = "#fff",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      className={className}
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 500 250"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill={fill}
        d="M250,246.5c-97.85,0-186.344-40.044-250-104.633V250h500V141.867C436.344,206.456,347.85,246.5,250,246.5z"
      />
    </svg>
  );
}

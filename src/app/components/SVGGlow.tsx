export const SVGGlow = (props: props) => (
  <defs>
    <filter
      id={props.id}
      filterUnits="userSpaceOnUse"
      x="-50%"
      y="-50%"
      width="200%"
      height="200%"
    >
      <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur5" />
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur10" />
      <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur20" />
      <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur30" />
      <feGaussianBlur in="SourceGraphic" stdDeviation="50" result="blur50" />
      <feMerge result="merged">
        <feMergeNode in="blur10" />
        <feMergeNode in="blur20" />
        <feMergeNode in="blur30" />
        <feMergeNode in="blur50" />
      </feMerge>
      <feColorMatrix
        result="blur"
        in="merged"
        type="matrix"
        values="   1 0 0 0 0
               0 0.06 0 0 0
               0 0 0.44 0 0
               0 0 0 1 0"
      />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="blur5" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
);

interface props {
  id: string;
}

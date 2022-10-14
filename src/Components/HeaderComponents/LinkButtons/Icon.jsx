export default function Icon({
  path1,
  color1,
  path2 = "",
  color2 = "",
  viewBox,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox={viewBox}
    >
      <path d={path1} fill={color1} />
      <path d={path2} fill={color2} />
    </svg>
  );
}

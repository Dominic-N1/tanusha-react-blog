import Icon from "./Icon";

export default function BlogLinkButton({ url, title, className }) {
  return (
    <a title={title} href={url} className={className}>
      <Icon
        viewBox="0 0 640 512"
        // color1="#9b00e9"
        path1="M637.9 499c2.1 2.205 2.67 5.475 1.441 8.354C638.1 510.3 635.4 512 632.3 512c-36.25 0-67.1-9.98-91.49-21.98C513.3 503.1 481.7 512 448 512c-90.01 0-165.3-56.86-186.1-133.5C368.3 357.2 448 274.6 448 176c0-5.387-.4668-10.67-.9336-15.96C447.4 160 447.7 160 448 160c106 0 192 78.8 192 176c0 40.63-15.17 77.95-40.41 107.7C615.9 475.3 637.6 498.7 637.9 499z"
        path2="M208 0C93.13 0 0 78.8 0 176c0 39.57 15.62 75.96 41.67 105.4c-16.39 32.76-39.23 57.32-39.59 57.68c-2.1 2.205-2.67 5.475-1.441 8.354C1.9 350.3 4.602 352 7.66 352c38.35 0 70.76-11.12 95.74-24.04C134.2 343.1 169.8 352 208 352c114.9 0 208-78.8 208-176C416 78.8 322.9 0 208 0z"
      />
    </a>
  );
}
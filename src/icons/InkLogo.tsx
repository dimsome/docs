interface InkLogoProps {
  className?: string;
}

export const InkLogo: React.FC<InkLogoProps> = ({
  className = "text-magic-purple",
}) => {
  return (
    <svg
      className={className}
      width="44"
      height="18"
      viewBox="110 0 44 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M115.861 0.38208C114.329 0.38208 113.087 1.62427 113.087 3.1566V14.372C113.087 15.9043 114.329 17.1465 115.861 17.1465H141.226C142.758 17.1465 144.001 15.9043 144.001 14.372V3.1566C144.001 1.62427 142.758 0.38208 141.226 0.38208H115.861ZM117.404 3.76096V13.6889H119.094V3.76096H117.404ZM121.62 3.76096V13.6889H123.282V6.38023C123.451 6.6478 123.623 6.91184 123.796 7.17588C123.968 7.43992 124.141 7.70396 124.31 7.97152L127.957 13.6889H129.788V3.76096H128.112V11.0696C127.855 10.6557 127.58 10.233 127.308 9.8155C127.238 9.70736 127.168 9.59958 127.098 9.49239L123.437 3.76096H121.62ZM132.3 3.76096V13.6889H133.989V10.6612L135.553 8.99951L138.693 13.6889H140.707L136.693 7.76028L140.439 3.76096H138.327L133.989 8.5348V3.76096H132.3Z"
        fill="currentColor"
      />
    </svg>
  );
};

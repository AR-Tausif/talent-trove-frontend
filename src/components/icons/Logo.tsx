import Image, { StaticImageData } from 'next/image';

type TProps = {
  src: StaticImageData;
  alt: string;
};

const Logo = ({ src, alt }: TProps) => {
  return <Image src={src} alt={alt} width="64" height="64" />;
};
export default Logo;

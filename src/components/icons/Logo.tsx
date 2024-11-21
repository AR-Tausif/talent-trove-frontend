import Image from 'next/image';
import LogoImage from '../../../public/logo.png';
import Link from 'next/link';
const Logo = () => {
  return (
    <Link href="/">
      <Image src={LogoImage} alt="website logo" width="36" height="36" />
    </Link>
  );
};
export default Logo;

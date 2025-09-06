import Image from "next/image";
import Logo from "@/public/logo.png";
import LogoWhite from "@/public/logo-white.png";

type ThemeLogoProps = {
  width?: number;
};

const ThemeLogo = ({ width }: ThemeLogoProps) => {
  return (
    <>
      <Image
        src={Logo}
        alt="Logo Anelos"
        className="block dark:hidden"
        width={width}
      />
      <Image
        src={LogoWhite}
        alt="Logo Anelos"
        className="hidden dark:block"
        width={width}
      />
    </>
  );
};

export default ThemeLogo;

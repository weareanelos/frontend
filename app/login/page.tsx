import Image from "next/image";
import Banner from "@/public/banner.png";
import { LoginForm } from "@/components/login-form";
import ThemeLogo from "@/components/themeLogo/themeLogo";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <ThemeLogo width={100} />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src={Banner}
          alt="Image"
          fill
          className="Banner Anelos"
          priority
        />
      </div>
    </div>
  );
}

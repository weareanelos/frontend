import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import { SidebarTrigger } from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import UserImage from "@/public/avatar.png";
import ThemeLogo from "./themeLogo/themeLogo";
import { IconBrandDiscord } from "@tabler/icons-react";
import { ThemeButton } from "./themeButton/themeButton";
import Link from "next/link";

const data = {
  user: {
    name: "Anelos Pika das Galaxias",
    email: "anelos@anelos.com",
    avatar: UserImage,
  },
};

export function SiteHeader() {
  return (
    <header className="flex h-[72px] shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-[72px]">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        {/* <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        /> */}
        <Link href="/s/dashboard">
          <ThemeLogo width={100} />
        </Link>
        <div className="flex-1" />
        <div className="ml-auto flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://discord.com/invite/8NWR3NfHzx?fbclid=PAZXh0bgNhZW0CMTEAAadqmmJcLQecHJV3pcmbwuS1ddKAfhlBxKBv1SDjWQ8LKewJ6MOLybBUaFVzmA_aem_9grRlGYlIrWoLUMZw8PiuA"
                rel="noopener noreferrer"
                target="_blank"
                className="dark:text-foreground"
              >
                <IconBrandDiscord stroke={2} />
              </a>
            </Button>
            <ThemeButton />
          </div>
          <NavUser user={data.user} />
        </div>
      </div>
    </header>
  );
}

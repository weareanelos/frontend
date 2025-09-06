"use client";

import { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Banner from "@/public/profileBanner.png";
import Image from "next/image";
import UserImage from "@/public/avatar.png";
import { Separator } from "@/components/ui/separator";
import "./profile.css";
import {
  IconMailFilled,
  IconMapPinFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import { LayoutContext } from "@/hooks/useProfileLayoutData";

const user = {
  name: "Anelos Pika das Galaxias",
  job: "Desenvolvedor Fullstack",
  email: "anelos@anelos.com",
  address: "Rua dos Anelos, 123",
  phone: "(45) 9 99987-8450",
  country: "Brasil",
  avatar: UserImage,
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const activeOption = (option: HTMLLIElement) => {
    const otherOptions = document.querySelectorAll(".option");

    otherOptions.forEach((opt) => {
      if (opt !== option) {
        opt.classList.remove("active");
      }
    });

    option.classList.add("active");
  };

  return (
    <section className="px-2 lg:px-6">
      <Card className="relative p-[4px] pb-0 md:p-4 md:pb-0">
        <Image
          src={Banner}
          alt="Banner do usuário"
          className="object-cover w-full h-[120px] md:h-[150px] lg:h-[250px] rounded-lg"
        />
        <article className="flex flex-col items-center mt-[-13%] lg:items-start lg:flex-row lg:px-6 gap-4 md:gap-6 md:mt-[-8%] lg:mt-0">
          <Avatar className="relative h-[60px] w-[60] md:w-[80px] md:h-[80px] lg:h-[100px] lg:w-[100px] lg:mt-[-4.3%] rounded-full">
            <AvatarImage src={user.avatar.src} alt={user.name} />
            <AvatarFallback className="rounded-lg">AN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-3">
            <h4 className="text-2xl text-center lg:text-start font-semibold">
              {user.name}
            </h4>
            <div className="flex flex-col md:flex-row items-center lg:items-start gap-6 ml-[-4px]">
              <div className="flex items-center gap-1">
                <IconUserFilled
                  size={20}
                  className="text-[#717579] dark:text-[#c8c8c8]"
                />
                <p className="text-[#717579] dark:text-[#c8c8c8] font-medium">
                  {user.job}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <IconMapPinFilled
                  size={20}
                  className="text-[#717579] dark:text-[#c8c8c8]"
                />
                <p className="text-[#717579] dark:text-[#c8c8c8]">
                  {user.address}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <IconMailFilled
                  size={20}
                  className="text-[#717579] dark:text-[#c8c8c8]"
                />
                <p className="text-[#717579] dark:text-[#c8c8c8]">
                  {user.email}
                </p>
              </div>
            </div>
          </div>
        </article>
        <Separator className="mt-4" />
        <ul
          className="flex mx-9 gap-6 text-[#717579] dark:text-[#c8c8c8] font-medium 
          overflow-x-auto scrollbar-  whitespace-nowrap"
        >
          <li
            className="option hover:border-b-2 border-[#036147] pb-3 active cursor-pointer"
            onClick={(e) => activeOption(e.target as HTMLLIElement)}
          >
            Visão Geral
          </li>
          <li
            className="option hover:border-b-2 border-[#036147] pb-3 cursor-pointer"
            onClick={(e) => activeOption(e.target as HTMLLIElement)}
          >
            Configurações
          </li>
          <li
            className="option hover:border-b-2 border-[#036147] pb-3 cursor-pointer"
            onClick={(e) => activeOption(e.target as HTMLLIElement)}
          >
            Assinaturas
          </li>
        </ul>
      </Card>
      <div className="my-6">
        <LayoutContext.Provider value={{ user }}>
          {children}
        </LayoutContext.Provider>
      </div>
    </section>
  );
}

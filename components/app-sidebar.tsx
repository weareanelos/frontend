"use client";

import * as React from "react";
import UserImage from "@/public/icon.svg";
import {
  // IconAppWindow,
  IconCamera,
  IconClipboard,
  // IconDashboard,
  IconFileAi,
  IconFileDescription,
  // IconFolder,
  IconHelp,
  // IconListDetails,
  // IconSearch,
  // IconSettings,
  // IconUsers,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import ThemeLogo from "./themeLogo/themeLogo";

const data = {
  user: {
    name: "Anelos",
    email: "anelos@anelos.com",
    avatar: UserImage,
  },
  navMain: [
    // {
    //   title: "Dashboard",
    //   url: "#",
    //   icon: IconDashboard,
    // },
    {
      title: "Meus Currículos",
      url: "#",
      icon: IconClipboard,
    },
    // {
    //   title: "Meus Portfólios",
    //   url: "#",
    //   icon: IconAppWindow,
    // },
    // {
    //   title: "Templates",
    //   url: "#",
    //   icon: IconFolder,
    // },
    // {
    //   title: "Comunidade",
    //   url: "#",
    //   icon: IconUsers,
    // },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    // {
    //   title: "Configurações",
    //   url: "#",
    //   icon: IconSettings,
    // },
    {
      title: "Ajuda",
      url: "#",
      icon: IconHelp,
    },
    // {
    //   title: "Pesquisar",
    //   url: "#",
    //   icon: IconSearch,
    // },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5 mb-1.5"
            >
              <a href="#">
                <ThemeLogo width={90} />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

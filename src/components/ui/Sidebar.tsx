"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "../../../constants/index";
import { usePathname } from "next/navigation";
import { cn } from "../../../lib/utils";
const Sidebar = ({ user }: SiderbarProps) => {
  const pathName = usePathname();
  console.log("pathName", pathName);
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 flex cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            className="size-[24px] max-xl:size-[12px]"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive = pathName === item.route;
          return (
            <Link
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
              key={item.label}
              href={item.route}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  fill
                  alt={item.label}
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;

"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { sidebarLinks } from "../../../constants/index";
import { usePathname } from "next/navigation";
import { cn } from "../../../lib/utils";
import Link from "next/link";

const MobileSideBar = ({ user }: MobileNavProps) => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={34}
            height={34}
            alt="hamburger Icon"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex cursor-pointer items-center gap-1 px-4"
            >
              <Image src="/icons/logo.svg" width={34} height={34} />
              <h1 className="sidebar-logo text-26 font-bold text-black-1">
                Horizon
              </h1>
            </Link>
            <div className="mobilenav-sheet">
              <SheetClose asChild>
                <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                  {sidebarLinks.map((item) => {
                    const isActive = pathName.startsWith(`${item.route}`);
                    return (
                      <SheetClose asChild key={item.label}>
                        <Link
                          className={cn("mobilenav-sheet_close w-full", {
                            "bg-bank-gradient": isActive,
                          })}
                          key={item.label}
                          href={item.route}
                        >
                          <Image
                            src={item.imgURL}
                            width={20}
                            height={20}
                            alt={item.label}
                            className={cn({
                              "brightness-[3] invert-0": isActive,
                            })}
                          />

                          <p
                            className={cn(
                              "text-16 font-semibold text-black-2",
                              {
                                "text-white": isActive,
                              }
                            )}
                          >
                            {item.label}
                          </p>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
              </SheetClose>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileSideBar;

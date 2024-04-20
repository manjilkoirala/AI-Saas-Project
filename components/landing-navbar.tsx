"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MobileSidebar } from "./mobile-sidebar";
import { SheetTrigger } from "./ui/sheet";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  const pathname = usePathname();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          VersaAI
        </h1>
      </Link>
      <div className="hidden md:flex gap-x-8">
        {navItems.map((item, index) => {
          const isActive =
            item.href === "/"
              ? pathname === item.href
              : pathname.startsWith(item.href);
          return (
            <>
              <Link key={index} href={item.href}>
                <p
                  className={cn(
                    `text-lg font-bold text-white hover:text-[#BB51DC] ${
                      isActive ? "font-bold text-[#E44AA5]" : null
                    }`,
                    font.className
                  )}
                >
                  {item.title}
                </p>
              </Link>
            </>
          );
        })}
      </div>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            {isSignedIn ? "Dashboard" : "Get Started"}
          </Button>
        </Link>
        <div className="text-white">
          <MobileSidebar>
            <div className=" flex-col space-y-8 py-4 flex bg-[#111827] text-white h-full w-full pt-10 px-6">
            <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          VersaAI
        </h1>
      </Link>
              {navItems.map((item, index) => {
                const isActive =
                  item.href === "/"
                    ? pathname === item.href
                    : pathname.startsWith(item.href);
                return (
                  <>
                    <Link key={index} href={item.href}>
                    <SheetTrigger>
                    <p
                        className={cn(
                          `text-lg font-bold text-white hover:text-[#BB51DC] ${
                            isActive ? "font-bold text-[#E44AA5]" : null
                          }`,
                          font.className
                        )}
                      >
                        {item.title}
                      </p>
                      </SheetTrigger>
                    </Link>
                  </>
                );
              })}
              <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full w-full text-black text-lg">
            {isSignedIn ? "Dashboard" : "Get Started"}
          </Button>
        </Link>
            </div>
          </MobileSidebar>
        </div>
      </div>
    </nav>
  );
};

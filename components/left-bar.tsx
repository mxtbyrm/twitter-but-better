"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaBookmark,
  FaHouse,
  FaMoon,
  FaSun,
  FaUser,
  FaUsers,
} from "react-icons/fa6";
import { FaBell, FaEllipsisH, FaSearch } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Inter_Tight } from "next/font/google";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const inter_tight = Inter_Tight({ subsets: ["latin"] });

const routes = [
  {
    name: "Home",
    route: "/",
    icon: <FaHouse className={"w-6 h-6 mr-4"} />,
  },
  {
    name: "Discover",
    route: "discover",
    icon: <FaSearch className={"w-6 h-6 mr-4"} />,
  },
  {
    name: "Notifications",
    route: "/notifications",
    icon: <FaBell className={"w-6 h-6 mr-4"} />,
  },
  {
    name: "Messages",
    route: "/messages",
    icon: <IoMail className={"w-6 h-6 mr-4"} />,
  },
  {
    name: "Bookmarks",
    route: "/bookmarks",
    icon: <FaBookmark className={"w-6 h-6 mr-4"} />,
  },
  {
    name: "Profile",
    route: "/profile",
    icon: <FaUser className={"w-6 h-6 mr-4"} />,
  },
  {
    name: "Community",
    route: "/community",
    icon: <FaUsers className={"w-6 h-6 mr-4"} />,
  },
  {
    name: "More",
    route: "/more",
    icon: <FaEllipsisH className={"w-6 h-6 mr-4"} />,
  },
];
function LeftBar() {
  const pathName = usePathname();
  const { setTheme, theme } = useTheme();
  const [isLight, setIsLight] = useState(null);
  const [animate] = useAutoAnimate();

  useEffect(() => {
    setIsLight(theme === "light" ? true : false);
  }, [theme]);

  return (
    <div
      ref={animate}
      className={
        "flex flex-col md:min-w-[400px] w-fit h-full items-end justify-start gap-4 p-4"
      }
    >
      <div
        className={"flex flex-row w-full gap-4 p-2 items-center justify-start"}
      >
        <svg
          id="logo-86"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className={"fill-primary w-fit h-fit"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="ccustom"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.69181 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z"
          ></path>
          <path
            className="ccustom"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 5.16562e-07C10 1.31322 9.74135 2.61358 9.2388 3.82683C8.73625 5.04009 7.99966 6.14248 7.07107 7.07107C6.14249 7.99966 5.0401 8.73625 3.82684 9.2388C2.61358 9.74134 1.31322 10 5.4439e-06 10L5.00679e-06 20C2.62644 20 5.22716 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 -3.81469e-06L10 5.16562e-07Z"
          ></path>
        </svg>
        <h1
          className={cn(
            "text-3xl text-primary font-extrabold",
            inter_tight.className,
          )}
        >
          Pulse
        </h1>
      </div>
      <div
        className={
          "bg-card flex-col flex w-full gap-4 grow-0 h-fit border border-border  p-4 rounded-sm"
        }
      >
        <div className={"flex flex-col gap-2 items-center justify-start"}>
          {routes.map((route, idx) => (
            <Button
              key={idx}
              asChild
              variant={"ghost"}
              className={cn(
                "w-full text-left dark:hover:bg-secondary antialiased hover:bg-secondary hover:text-primary p-4 py-3 h-fit text-xl text-muted-foreground font-medium justify-start",
                pathName == route.route &&
                  "dark:bg-secondary dark:hover:bg-secondary bg-secondary text-primary hover:bg-secondary font-bold hover:text-primary",
              )}
              size={"lg"}
            >
              <Link href={route.route}>
                {route.icon}
                {route.name}
              </Link>
            </Button>
          ))}
        </div>
        <Separator />
        <Button
          variant={"secondary"}
          className={cn(
            "w-full text-left flex flex-row items-center hover:text-primary p-4 py-3 h-fit text-xl text-muted-foreground font-medium justify-start",
          )}
          onClick={() => {
            if (isLight) {
              setTheme("dark");
              setIsLight(false);
            } else {
              setTheme("light");
              setIsLight(true);
            }
          }}
          size={"lg"}
        >
          {isLight ? (
            <div className={"flex flex-row items-center justify-start"}>
              <FaMoon className={"w-6 h-6 mr-4"} />
              Dark mode
            </div>
          ) : (
            <div className={"flex flex-row items-center justify-start"}>
              <FaSun className={"w-6 h-6 mr-4"} />
              Light mode
            </div>
          )}
        </Button>
        <Button size={"lg"} className={"text-lg font-bold  w-full"}>
          Create post
        </Button>
      </div>
      <div
        className={
          "flex flex-row justify-between items-center p-4 border border-border bg-card w-full rounded-sm "
        }
      >
        <div
          className={"w-full flex flex-row gap-2 items-center justify-between"}
        >
          <div
            className={"w-fit flex flex-row gap-4 items-center justify-center"}
          >
            <Avatar className={"w-[50px] h-[50px]"}>
              <Image
                src={"/av1.jpeg"}
                alt={"avatar"}
                width={50}
                height={50}
                className={"object-cover object-top"}
              />
            </Avatar>
            <div className={"flex flex-col items-center justify-center"}>
              <Button
                variant={"link"}
                className={"p-0 sm:text-[1rem] text-base font-bold w-fit h-fit"}
                asChild
              >
                <Link href={`/johndoe`}>{"John Doe"}</Link>
              </Button>
              <p className={"text-sm text-muted-foreground"}>@johndoe</p>
            </div>
          </div>
          <Button
            variant={"ghost"}
            className={
              "aspect-square text-primary hover:text-primary hover:bg-secondary rounded-full p-2"
            }
          >
            <FaEllipsisH className={"w-6 h-6"} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;

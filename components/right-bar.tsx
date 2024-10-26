"use client";

import React from "react";
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
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";
import { Separator } from "./ui/separator";
const tags = [
  {
    category: "Technology",
    tag: "WebDevelopment",
    posts: 25,
  },
  {
    category: "Health",
    tag: "Fitness",
    posts: 18,
  },
  {
    category: "Travel",
    tag: "Adventure",
    posts: 12,
  },
  {
    category: "Food",
    tag: "Recipes",
    posts: 30,
  },
  {
    category: "Education",
    tag: "E-Learning",
    posts: 8,
  },
];

function RightBar() {
  return (
    <div
      className={
        "flex flex-col md:min-w-[400px] w-fit h-full items-start justify-start gap-4 p-4 "
      }
    >
      <div className={"w-full  border border-border p-0 rounded-sm"}>
        <Input
          placeholder={"Search"}
          icon={<FaSearch className={"w-full fill-muted-foreground h-full"} />}
          className={"bg-card w-full hover:bg-card/90 py-4"}
        />
      </div>
      <div className={"flex-col flex w-full gap-2 grow-0 h-fit rounded-sm"}>
        <h2 className={"text-2xl ml-2 text-primary font-extrabold "}>
          Popular Tags
        </h2>
        <div
          className={
            "flex bg-card p-4 border border-border rounded-sm  flex-col gap-2"
          }
        >
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className={cn("flex flex-col items-center gap-4 justify-center")}
            >
              <div
                className={
                  "w-full text-left cursor-pointer rounded-sm transition-colors hover:bg-secondary/60 hover:text-primary p-4 py-3 h-fit text-xl text-muted-foreground font-medium flex flex-col items-start justify-start"
                }
              >
                <span className={"font-bold text-xs text-muted-foreground"}>
                  {tag.category}
                </span>
                <span
                  className={"text-base  font-bold text-foreground"}
                >{`#${tag.tag}`}</span>
                <span className={"font-bold text-xs text-muted-foreground"}>
                  {`${tag.posts} post`}
                </span>
              </div>
              {idx !== tags.length - 1 && (
                <div className={"flex shrink w-full mb-2"}>
                  <Separator className={"w-full"} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightBar;

"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";
import {
  FaHeart,
  FaRegComment,
  FaRegHeart,
  FaRepeat,
  FaArrowUpFromBracket,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa6";
import { IoIosStats } from "react-icons/io";
import { cn } from "@/lib/utils";

const LikeButton = ({
  liked,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps & { liked: boolean }) => {
  return (
    <motion.button
      whileTap={{
        scale: 0.9,
      }}
      {...props}
      className={cn(
        "group rounded-full sm:text-sm text-xs  font-bold text-muted-foreground items-center justify-center flex gap-2 hover:bg-rose-600/10 px-2 py-1 hover:text-rose-600 transition-colors w-fit h-fit focus-visible:outline-none ring-0",
        liked && "text-rose-600",
      )}
    >
      {liked ? (
        <FaHeart className={"w-4 h-4 fill-rose-600"} />
      ) : (
        <FaRegHeart
          className={
            "fill-muted-foreground w-4 h-4 transition-colors group-hover:fill-rose-600"
          }
        />
      )}
      19 B
    </motion.button>
  );
};

type CommentProps = MotionProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CommentButton = (props: CommentProps) => {
  return (
    <motion.button
      whileTap={{
        scale: 0.9,
      }}
      {...props}
      className={
        "group rounded-full sm:text-sm text-xs font-bold text-muted-foreground items-center justify-center flex gap-2 hover:bg-primary/10 px-2 py-1 hover:text-primary transition-colors w-fit h-fit focus-visible:outline-none ring-0"
      }
    >
      <FaRegComment
        className={
          "fill-muted-foreground w-4 h-4 transition-colors group-hover:fill-primary"
        }
      />
      126
    </motion.button>
  );
};

const ReShareButton = (props: CommentProps) => {
  return (
    <motion.button
      whileTap={{
        scale: 0.9,
      }}
      {...props}
      className={
        "group rounded-full sm:text-sm text-xs font-bold text-muted-foreground items-center justify-center flex gap-2 hover:bg-emerald-600/10 px-2 py-1 hover:text-emerald-600 transition-colors w-fit h-fit focus-visible:outline-none ring-0"
      }
    >
      <FaRepeat
        className={
          "fill-muted-foreground w-4 h-4 transition-colors group-hover:fill-emerald-600"
        }
      />
      394
    </motion.button>
  );
};

const StatsButton = (props: CommentProps) => {
  return (
    <motion.button
      whileTap={{
        scale: 0.9,
      }}
      {...props}
      className={
        "group rounded-full sm:text-sm text-xs font-bold text-muted-foreground items-center justify-center flex gap-2 hover:bg-primary/10 px-2 py-1 hover:text-primary transition-colors w-fit h-fit focus-visible:outline-none ring-0"
      }
    >
      <IoIosStats
        className={
          "fill-muted-foreground w-5 h-5 transition-colors group-hover:fill-primary"
        }
      />
      1 Mn
    </motion.button>
  );
};

const ShareButton = (props: CommentProps) => {
  return (
    <motion.button
      whileTap={{
        scale: 0.9,
      }}
      {...props}
      className={
        "group rounded-full sm:text-sm text-xs font-bold text-muted-foreground items-center justify-center flex gap-2 hover:bg-primary/10 px-2 py-1 hover:text-primary transition-colors w-fit h-fit focus-visible:outline-none ring-0"
      }
    >
      <FaArrowUpFromBracket
        className={
          "fill-muted-foreground w-4 h-4 transition-colors group-hover:fill-primary"
        }
      />
    </motion.button>
  );
};

const BookmarkButton = ({
  marked,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps & { marked: boolean }) => {
  return (
    <motion.button
      whileTap={{
        scale: 0.9,
      }}
      {...props}
      className={cn(
        "group rounded-full sm:text-sm text-xs  font-bold text-muted-foreground items-center justify-center flex gap-2 hover:bg-primary/10 px-2 py-1 hover:text-primary transition-colors w-fit h-fit focus-visible:outline-none ring-0",
        marked && "text-rose-600",
      )}
    >
      {marked ? (
        <FaBookmark className={"w-4 h-4 fill-primary"} />
      ) : (
        <FaRegBookmark
          className={
            "fill-muted-foreground w-4 h-4 transition-colors group-hover:fill-primary"
          }
        />
      )}
    </motion.button>
  );
};

export {
  LikeButton,
  CommentButton,
  ReShareButton,
  StatsButton,
  ShareButton,
  BookmarkButton,
};

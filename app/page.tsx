import AccountsDialog from "@/components/accounts-dialog";
import Feed from "@/components/feed";
import CreatePost from "@/components/create-post";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import LeftBar from "@/components/left-bar";

type PostType = {
  id: number;
  avatar: string;
  user: string;
  username: string;
  date: string;
  content: string;
  image?: string;
  video?: string;
  reply?: boolean;
};

const placeholderPosts: PostType[] = [
  {
    id: 1,
    avatar: "/av1.jpeg",
    user: "John Doe",
    username: "johndoe",
    date: "2024-09-14",
    content:
      "Just enjoying a nice cup of coffee this morning! ☕ #morningvibes",
    image: "/Latte.webp",
  },
  {
    id: 2,
    avatar: "/av2.jpg",
    user: "Jane Smith",
    username: "janesmith",
    date: "2024-09-13",
    content: "Excited to share my new project with everyone! 🚀",
    video: "https://via.placeholder.com/600x400.mp4",
  },
  {
    id: 3,
    avatar: "/av3.jpeg",
    user: "Alice Johnson",
    username: "alicej",
    date: "2024-09-12",
    content: "Had an amazing time hiking in the mountains today! 🏞️ #adventure",
    image: "/mountain.jpg",
  },
  {
    id: 4,
    avatar: "/7309681.jpg",
    user: "Mark Spencer",
    username: "markspencer",
    date: "2024-09-11",
    content:
      "The new tech conference was a blast! So many innovative ideas. 💡 #Tech2024",
  },
  {
    id: 5,
    avatar: "/av1.jpeg",
    user: "John Doe",
    username: "johndoe",
    date: "2024-09-14",
    content:
      "Just enjoying a nice cup of coffee this morning! ☕ #morningvibes",
    image: "/Latte.webp",
  },
  {
    id: 6,
    avatar: "/av2.jpg",
    user: "Jane Smith",
    username: "janesmith",
    date: "2024-09-13",
    content: "Excited to share my new project with everyone! 🚀",
    video: "https://via.placeholder.com/600x400.mp4",
  },
  {
    id: 7,
    avatar: "/av3.jpeg",
    user: "Alice Johnson",
    username: "alicej",
    date: "2024-09-12",
    content: "Had an amazing time hiking in the mountains today! 🏞️ #adventure",
    image: "/mountain.jpg",
  },
  {
    id: 8,
    avatar: "/7309681.jpg",
    user: "Mark Spencer",
    username: "markspencer",
    date: "2024-09-11",
    content:
      "The new tech conference was a blast! So many innovative ideas. 💡 #Tech2024",
  },
];
const placeholderPosts2: PostType[] = [
  {
    id: 1,
    avatar: "/av1.jpeg",
    user: "John Doe",
    username: "johndoe",
    date: "2024-09-14",
    content:
      "Just enjoying a nice cup of coffee this morning! ☕ #morningvibes",
    image: "/Latte.webp",
  },
  {
    id: 2,
    avatar: "/av2.jpg",
    user: "Jane Smith",
    username: "janesmith",
    date: "2024-09-13",
    content: "Excited to share my new project with everyone! 🚀",
    video: "https://via.placeholder.com/600x400.mp4",
  },
  {
    id: 3,
    avatar: "/av3.jpeg",
    user: "Alice Johnson",
    username: "alicej",
    date: "2024-09-12",
    content: "Had an amazing time hiking in the mountains today! 🏞️ #adventure",
    image: "/mountain.jpg",
  },
  {
    id: 4,
    avatar: "/7309681.jpg",
    user: "Mark Spencer",
    username: "markspencer",
    date: "2024-09-11",
    content:
      "The new tech conference was a blast! So many innovative ideas. 💡 #Tech2024",
  },
];

export default function Home() {
  return (
    <main className={"flex flex-col w-full gap-4 pb-8 justify-center"}>
      {/*<AccountsDialog />*/}
      <div className="w-full flex flex-col gap-4 pt-4 items-center justify-evenly">
        <Tabs defaultValue="for-you">
          <TabsList className=" sticky top-0 p-2  border border-border rounded-sm w-full mb-4 bg-card  backdrop-blur-sm backdrop-saturate-100 backdrop-brightness-80 h-auto z-20">
            <TabsTrigger
              className="w-full data-[state=active]:text-primary data-[state=active]:bg-secondary data-[state=active]:rounded-sm rounded-sm p-2  text-base font-bold h-auto"
              value="for-you"
            >
              For you
            </TabsTrigger>
            <TabsTrigger
              className="w-full data-[state=active]:text-primary data-[state=active]:bg-secondary rounded-sm data-[state=active]:rounded-sm p-2 text-base font-bold h-auto"
              value="following"
            >
              Following
            </TabsTrigger>
          </TabsList>
          <TabsContent value="for-you">
            <div className={"flex flex-col items-center gap-4 justify-center"}>
              <CreatePost />
              <Feed posts={placeholderPosts} />
            </div>
          </TabsContent>
          <TabsContent value="following">
            <div className={"flex flex-col items-center gap-4 justify-center"}>
              <CreatePost />
              <Feed posts={placeholderPosts2} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div />
    </main>
  );
}

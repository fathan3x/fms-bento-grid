import "@fontsource-variable/dm-sans";

import { cn } from "cn";

import createPost from "./assets/illustration-create-post.webp";
import fiveStars from "./assets/illustration-five-stars.webp";
import schedulePosts from "./assets/illustration-schedule-posts.webp";
import aiContent from "./assets/illustration-ai-content.webp";
import multiplePlatforms from "./assets/illustration-multiple-platforms.webp";
import consistentSchedule from "./assets/illustration-consistent-schedule.webp";
import audienceGrowth from "./assets/illustration-audience-growth.webp";
import growFollowers from "./assets/illustration-grow-followers.webp";

export function App() {
  const style = {
    "bg-yellow-100": "bg-[hsl(31,66%,93%)]",
    "bg-yellow-500": "bg-[hsl(39,100%,71%)]",
    "bg-purple-100": "bg-[hsl(254,88%,90%)]",
    "bg-purple-500": "bg-[hsl(256,67%,59%)]",
    "text-purple-500": "text-[hsl(256,67%,59%)]",
    "text-yellow-500": "text-[hsl(39,100%,71%)]",
    "main-paragraph": "font-medium tracking-[-0.09em]",
  };
  return (
    <main className="flex items-center justify-center p-8 font-['DM_Sans_Variable']">
      <section className="max-w-5xl lg:h-200 grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-6 gap-8">
        {/* 1 */}
        <article
          className={cn(
            style["bg-purple-500"],
            "lg:col-span-2 lg:row-span-2 lg:col-start-2 lg:row-start-1 p-8 rounded-lg text-white flex flex-col items-center justify-center space-y-6",
          )}
        >
          <p className="font-medium text-5xl text-center">
            Social Media{" "}
            <span className={cn(style["text-yellow-500"])}>10x</span>{" "}
            <span className="italic">Faster </span>
            with AI.
          </p>
          <div className="space-y-1">
            <img src={fiveStars} className="w-40" />
            <p className="text-sm font-light">Over 4,000 5-star reviews</p>
          </div>
        </article>

        {/* 2 */}
        <article className="lg:row-span-2 lg:col-start-2 lg:row-start-3 p-8 bg-white rounded-lg flex flex-col gap-4 lg:gap-0 overflow-hidden">
          <div className="lg:w-70">
            <img src={multiplePlatforms} className="w-full h-full" />
          </div>
          <p
            className={cn(
              style["main-paragraph"],
              "text-3xl leading-[0.9] mt-auto",
            )}
          >
            Manage multiple accounts and platforms.
          </p>
        </article>

        {/* 3 */}
        <article
          className={cn(
            style["bg-yellow-500"],
            "lg:row-span-2 lg:col-start-3 lg:row-start-3 pt-8 px-8 rounded-lg lg:overflow-hidden space-y-6",
          )}
        >
          <p
            className={cn(
              style["main-paragraph"],
              "text-3xl leading-[0.9] mt-auto",
            )}
          >
            Maintain a consistent posting schedule
          </p>
          <div className="w-50 lg:w-40">
            <img src={consistentSchedule} className="w-full h-full" />
          </div>
        </article>

        {/* 4 */}
        <article
          className={cn(
            style["bg-purple-100"],
            "lg:row-span-4 lg:col-start-4 lg:row-start-1 p-8 rounded-lg relative lg:overflow-hidden flex flex-col gap-6",
          )}
        >
          <p
            className={cn(
              style["main-paragraph"],
              "text-3xl leading-[0.9] text-center lg:text-left",
            )}
          >
            Schedule to social media.
          </p>
          <div className="lg:w-80">
            <img src={schedulePosts} className="w-full h-full" />
          </div>
          <p className="tracking-tight leading-[0.9] mt-auto text-lg lg:text-base text-center lg:text-left">
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </article>

        {/* 5 */}
        <article
          className={cn(
            style["bg-purple-500"],
            "lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-5 p-8 rounded-lg text-white flex flex-col lg:flex-row items-center gap-6",
          )}
        >
          <div className="w-50 shrink-0">
            <img src={growFollowers} className="w-full h-full" />
          </div>
          <p
            className={cn(
              style["main-paragraph"],
              "text-4xl leading-[0.9] text-center lg:text-left",
            )}
          >
            Grow followers with non-stop content.
          </p>
        </article>

        {/* 6 */}
        <article className="lg:row-span-2 lg:col-start-2 lg:row-start-5 p-8 bg-white rounded-lg flex flex-col gap-6">
          <div className="space-y-4">
            <p className="font-medium text-5xl">&gt;56% </p>
            <p
              className={cn(
                style["main-paragraph"],
                "text-lg lg:text-base leading-[0.9] mt-auto",
              )}
            >
              faster audience growth
            </p>
          </div>
          <div className="w-40 lg:mt-auto">
            <img src={audienceGrowth} className="w-full h-full" />
          </div>
        </article>

        {/* 7 */}
        <article
          className={cn(
            style["bg-yellow-100"],
            "lg:row-span-3 lg:col-start-1 lg:row-start-1 p-8 rounded-lg flex flex-col lg:items-center lg:justify-center gap-6",
          )}
        >
          <p className={cn(style["main-paragraph"], "text-4xl leading-[0.9]")}>
            Create and schedule content{" "}
            <span className={cn(style["text-purple-500"], "italic")}>
              quicker.
            </span>
          </p>
          <div className="w-50 lg:w-auto">
            <img src={createPost} className="w-full h-full" />
          </div>
        </article>

        {/* 8 */}
        <article
          className={cn(
            style["bg-yellow-500"],
            "lg:row-span-3 lg:col-start-1 lg:row-start-4 p-8 rounded-lg overflow-hidden flex flex-col gap-6",
          )}
        >
          <p className={cn(style["main-paragraph"], "text-4xl leading-[0.9]")}>
            Write your content using AI.
          </p>
          <div className="w-45 mt-auto">
            <img src={aiContent} className="w-full h-full" />
          </div>
        </article>
      </section>
    </main>
  );
}

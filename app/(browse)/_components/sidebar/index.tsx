import { getRecommended } from "@/app/api/recommend.service";
import { Recommended } from "./recommended";
import { Toggle, ToggleSkeleton } from "./toggle";
import { Wrapper } from "./wrapper";
import { getFollowedUsers } from "@/app/api/follow.service";
import { Following } from "./following";
import { FollowingSkeleton, RecommendedSkeleton } from "./skeletons";

export const Sidebar = async () => {
  const recommended = await getRecommended();
  const following = await getFollowedUsers();

  // The main nav bar shows users following and recommened lists
  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Following data={following} />
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
};

// Rendering sidebar skeleton
export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
      <ToggleSkeleton />
      <FollowingSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
};

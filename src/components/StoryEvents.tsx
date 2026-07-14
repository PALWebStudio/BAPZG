import VideoStory from "./VideoStory";
import Events from "./Events";

export default function StoryEvents() {
  return (
    <section className="mx-auto grid max-w-[var(--container-width)] gap-6 px-6 py-10 max-[1000px]:grid-cols-1 min-[1001px]:grid-cols-[1fr_0.85fr]">
      <VideoStory />
      <Events />
    </section>
  );
}

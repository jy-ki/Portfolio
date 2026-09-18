import { HeroEffect } from "@/components/HeroEffect";

export default function Home() {
  return (
    <HeroEffect>
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/60">
        Portfolio
      </p>
      <h1 className="text-4xl font-semibold text-white sm:text-5xl">
        Hello, I&apos;m building something here.
      </h1>
      <p className="mt-6 max-w-xl text-base text-white/70 sm:text-lg">
        This hero background blends an animated gradient wave with a glass
        panel that gently tilts toward your cursor.
      </p>
    </HeroEffect>
  );
}

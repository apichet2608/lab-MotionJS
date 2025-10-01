import MotionSequenceButton from "@/components/motion/Basic/MotionSequenceButton";
import DownloadBox from "@/components/motion/Basic/DownloadBox";
import MotionDemo from "@/components/motion/Basic/MotionDemo";
import EaseDemo from "@/components/motion/Basic/EaseDemo";
import ButtonDemo from "@/components/motion/Event/ButtonDemo";
import DynamicNumber from "@/components/motion/Event/DynamicNumber";
import NumberCounter from "@/components/motion/Event/NumberCounter";
import SliderWithBubble from "@/components/motion/Event/SliderWithBubble";
import SliderWithBubbleV2 from "@/components/motion/Event/SliderWithBubbleV2";

export default function Home() {
  return (
    <main className="grid gap-6 p-4">
      <SliderWithBubble />
      <SliderWithBubbleV2 />
      <DynamicNumber />
      <NumberCounter />
      <ButtonDemo />
      <MotionSequenceButton
        steps={[
          { keyframes: { x: [0, 50, 0] }, options: { duration: 1 } },
          { keyframes: { y: [0, 50, 0] }, options: { duration: 1 } },
          { keyframes: { rotate: 360 }, options: { duration: 1 } },
          { keyframes: { scale: 1.5 }, options: { duration: 1 } },
          { keyframes: { scale: 1 }, options: { duration: 1 } },
        ]}
        loop={false}
      >
        Click Me
      </MotionSequenceButton>
      <MotionDemo />
      <EaseDemo />
      <DownloadBox />
    </main>
  );
}

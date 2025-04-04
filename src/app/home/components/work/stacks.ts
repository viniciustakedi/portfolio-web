import GolangPNG from "@/assets/images/work/stacks/golang.png";
import TypescriptPNG from "@/assets/images/work/stacks/typescript.png";
import ReactPNG from "@/assets/images/work/stacks/react.png";
import NodeJsPNG from "@/assets/images/work/stacks/nodejs.png";

import type { StaticImageData } from "next/image";

export type StackKey = "golang" | "typescript" | "react" | "nodejs";

export const StacksPng: Record<StackKey, StaticImageData> = {
  golang: GolangPNG,
  typescript: TypescriptPNG,
  react: ReactPNG,
  nodejs: NodeJsPNG,
};

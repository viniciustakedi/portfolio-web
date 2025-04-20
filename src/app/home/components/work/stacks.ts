import GolangPNG from "@/assets/images/work/stacks/golang.png";
import RabbitMQPNG from "@/assets/images/work/stacks/rabbitmq.png";
import RedisPNG from "@/assets/images/work/stacks/redis.png";
import GitPNG from "@/assets/images/work/stacks/git.png";
import TypescriptPNG from "@/assets/images/work/stacks/typescript.png";
import ReactPNG from "@/assets/images/work/stacks/react.png";
import NodeJsPNG from "@/assets/images/work/stacks/nodejs.png";

import type { StaticImageData } from "next/image";

export type StackKey =
  | "Golang"
  | "Typescript"
  | "React"
  | "NodeJS"
  | "RabbitMQ"
  | "Git"
  | "Redis";

export const StacksPng: Record<StackKey, StaticImageData> = {
  Golang: GolangPNG,
  Typescript: TypescriptPNG,
  React: ReactPNG,
  NodeJS: NodeJsPNG,
  RabbitMQ: RabbitMQPNG,
  Git: GitPNG,
  Redis: RedisPNG,
};

import {
  AWSIcon,
  BitBucketIcon,
  CSSIcon,
  CsharpIcon,
  ExpressIcon,
  GitHubIcon,
  GitIcon,
  HTMLIcon,
  JiraIcon,
  LinuxIcon,
  MySqlIcon,
  NestJsIcon,
  NextJsIcon,
  NodeJsIcon,
  NpmIcon,
  PostgreSqlIcon,
  ReactIcon,
  RedisIcon,
  SassIcon,
  SqlServerIcon,
  TrelloIcon,
  TypescriptIcon,
  YarnIcon,
  MongoDbIcon,
} from "@/assets/images";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function MarqueeTecnologies() {
  const [ref, inView] = useInView();

  return (
    <motion.div
      className="mt-5 mb-5 flex justify-center items-center w-full h-40 px-2 bg-dark-blue"
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <Marquee gradient={true} gradientColor={[29, 45, 68]}>
        <div>
          <Image className="marquee-tech-images" src={YarnIcon} alt="yarn-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images" src={TypescriptIcon} alt="typescript-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images" src={TrelloIcon} alt="trello-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images" src={SassIcon} alt="sass-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images" src={RedisIcon} alt="redis-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images" src={ReactIcon} alt="react-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images" src={NpmIcon} alt="npm-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images" src={BitBucketIcon} alt="bitbucket-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images" src={AWSIcon} alt="aws-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images" src={CsharpIcon} alt="csharp-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images" src={CSSIcon} alt="css-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images" src={ExpressIcon} alt="express-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images" src={GitHubIcon} alt="github-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images" src={MongoDbIcon} alt="mongodb-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images" src={GitIcon} alt="git-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images" src={HTMLIcon} alt="html-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images" src={LinuxIcon} alt="linux-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images" src={MySqlIcon} alt="mysql-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images" src={NextJsIcon} alt="nextjs-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images" src={JiraIcon} alt="jira-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images w-" src={SqlServerIcon} alt="sqlserver-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images" src={NestJsIcon} alt="nestjs-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images" src={NodeJsIcon} alt="nodejs-icon" />
        </div>
        <div>
          <Image className="marquee-tech-images" src={PostgreSqlIcon} alt="postgresql-icon" />
        </div>
      </Marquee>
    </motion.div>
  );
}
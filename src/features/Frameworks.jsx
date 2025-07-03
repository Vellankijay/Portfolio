import { OrbitingCircles } from "./OrbitingCircles";
import {
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiR,
  SiReact,
  SiNuxtdotjs,
  SiQuasar,
  SiSwift,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";


export function Frameworks() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={90} speed={2}>
        <Icons.java color="goldenrod" />
        <Icons.python color="deepskyblue" />
        <Icons.cpp color="#00599C" />
        <Icons.html color="#E34F26" />
        <Icons.css color="#1572B6" />
        <Icons.javascript color="#F7DF1E" />
        <Icons.postgresql color="#336791" />
        <Icons.mongodb color="#47A248" />
      </OrbitingCircles>
      <OrbitingCircles iconSize={40} radius={100} reverse speed={2}>
        <Icons.react color="#61DAFB" />
        <Icons.nuxtjs color="#00DC82" />
        <Icons.quasar color="#0F75BC" />
        <Icons.swift color="#FA7343" />
        <Icons.typescript color="#3178C6" />
        <Icons.r color="#276DC3" />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  // github: (props) => <SiGit {...props}/>,
  java: (props) => <FaJava {...props} />,
  python: (props) => <SiPython {...props} />,
  cpp: (props) => <SiCplusplus {...props} />,
  html: (props) => <SiHtml5 {...props} />,
  css: (props) => <SiCss3 {...props} />,
  javascript: (props) => <SiJavascript {...props} />,
  postgresql: (props) => <SiPostgresql {...props} />,
  mongodb: (props) => <SiMongodb {...props} />,     // representing NoSQL
  r: (props) => <SiR {...props} />,
  react: (props) => <SiReact {...props} />,
  nuxtjs: (props) => <SiNuxtdotjs {...props} />,
  quasar: (props) => <SiQuasar {...props} />,
  swift: (props) => <SiSwift {...props} />,
  typescript: (props) => <SiTypescript {...props} />,
};

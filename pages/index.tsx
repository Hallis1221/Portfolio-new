import type { NextPage } from "next";
import { useState } from "react";
import MacOSWindow from "../components/window/component";

const Home: NextPage = () => {
  const [size, setSize] = useState(100);
  
  return <div className="h-screen flex justify-center items-center p-10">
    <MacOSWindow size={size}>
      <div className="h-full w-full flex justify-center" style={{
        marginTop: `${size >= 25 ? 15 * (size / 100) : 15 * (size / 50) }%`,
      }}>
    <text className="font-extrabold text-9xl" style={{
      lineHeight: "1",
      fontSize: `${8 * (size / 100)}rem`,
    }}>Hey, I am Halvor</text>
      </div>
    </MacOSWindow>
  </div>
};

export default Home;

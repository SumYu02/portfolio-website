import React from "react";
import Image from "next/image";
import { assets, toolsData } from "@/assets/assets";
import { infoList } from "@/assets/assets";
import { Progress, Flex } from "@mantine/core";
import { FaReact } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] sm:pt-10 scroll-mt-20">
      <h4 className="text-center text-lg mb-2">Introduction</h4>
      <h2 className="text-4xl text-center font-bold ">About Me</h2>

      <div className="flex flex-col md:flex-row gap-10 sm:gap-20 my-10 sm:my-20 justify-center items-center">
        <div className="flex-1 max-w-2xl">
          <Flex justify="center" align="center" mt={10} w="100%" gap={10}>
            <FaReact className="w-12 h-12" />
            <Progress radius="md" size="sm" color="pink" value={65} w="50%" />
          </Flex>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto">
            <div className="flex flex-row gap-2 justify-center items-center">
              <FaReact className="w-12 h-12" />
              <Progress
                radius="md"
                size="sm"
                color="pink"
                value={50}
                w="100%"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;

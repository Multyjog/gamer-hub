import { IPlatform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface IProps {
  platforms: IPlatform[];
}

const PlatformIconList = ({ platforms }: IProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    androind: FaAndroid,
  };
  return (
    <>
      {/* <HStack marginY={1}> */}
      <HStack marginY={"10px"}>
        {platforms.map((platform) => (
          <Icon as={iconMap[platform.slug]} color="gray.500" />
        ))}{" "}
      </HStack>
    </>
  );
};

export default PlatformIconList;

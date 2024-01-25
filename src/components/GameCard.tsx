import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { IGame } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface IProps {
  game: IGame;
}

const GameCard = ({ game }: IProps) => {
  return (
    <>
      <Card borderRadius="10px" overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;

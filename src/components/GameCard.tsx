import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { IGame } from "../hooks/useGames";

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
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;

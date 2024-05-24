import { SimpleGrid, Text } from "@chakra-ui/react";
import IGame from "../entities/IGame";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitonItem";

interface Props {
  game: IGame;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem
        term="Platforms"
        children={game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      ></DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map((pub) => (
          <Text key={pub.id}>{pub.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};
export default GameAttributes;

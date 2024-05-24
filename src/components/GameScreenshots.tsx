import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  if (error) throw error;
  if (isLoading) return null;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }}>
      {data?.results.map((screenshot) => (
        <Box margin={5}>
          <Image key={screenshot.id} src={screenshot.image} />
        </Box>
      ))}
    </SimpleGrid>
  );
};
export default GameScreenshots;

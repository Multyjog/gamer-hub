import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
};
export default GameDetails;

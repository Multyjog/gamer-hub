import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const sortOptions = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const setSelectedSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);

  const currentSortOrder = sortOptions.find(
    (order) => order.value === selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOptions.map((option) => (
          <MenuItem
            onClick={() => setSelectedSortOrder(option.value)}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default SortSelector;

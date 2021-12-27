import { Box, List } from "grommet";
import React from "react";

export interface SearchDropdownProps {
  search?: string;
  onFocus: any;
  onBlur: any;
  onSelect?: (event: any) => void;
  views?: { label: string; path: string }[];
}

export const SearchDropdown: React.FC<SearchDropdownProps> = (props) => {
  return (
    <Box
      flex
      direction="row"
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      height="200px"
    >
      <Box width="80px" height="200px"></Box>
      <Box flex overflow="scroll">
        <List
          onClickItem={({ item }) => props.onSelect(item)}
          primaryKey={"label"}
          data={props.views.filter(
            (a) =>
              props.search &&
              a.label.toLowerCase().indexOf(props.search.toLowerCase()) > -1
          )}
        />
      </Box>
    </Box>
  );
};

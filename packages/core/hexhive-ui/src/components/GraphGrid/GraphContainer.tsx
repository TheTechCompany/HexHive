import React, { forwardRef } from "react";
import { Box, Text, Button } from "grommet";
import { Close } from "grommet-icons";

export interface GraphContainerProps {
  dataKey: string;
  label: string;
  total: string;
  onRemove: () => void;
}

export const GraphContainer: React.FC<GraphContainerProps> = (props) => {
  return (
    <Box
      flex
      elevation="small"
      background={"neutral-1"}
      round="small"
      overflow="hidden"
    >
      <Box
        direction="row"
        pad={"xsmall"}
        justify="between"
        background="accent-2"
      >
        <Box>
          <Text>{props.label}</Text>
          <Text size="small">{props.total && `total: ${props.total}`}</Text>
        </Box>
        <Button
          onClick={props.onRemove}
          icon={<Close size="small" />}
          plain
          style={{ padding: 6, borderRadius: 3 }}
          hoverIndicator
        />
      </Box>
      <Box flex> {props.children}</Box>
    </Box>
  );
};

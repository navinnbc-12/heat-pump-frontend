import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const Grid = styled(Box, {
  shouldForwardProp: (prop) =>
    ["columnCount", "columnGap", "rowGap", "rowHeight"].indexOf(prop) < 0,
})(({ columnCount = 3, columnGap = "20px", rowGap = "10px", rowHeight }) => ({
  display: "grid",
  gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
  columnGap,
  rowGap,
  gridAutoRows: rowHeight ? rowHeight : "auto",
}));

export default Grid;

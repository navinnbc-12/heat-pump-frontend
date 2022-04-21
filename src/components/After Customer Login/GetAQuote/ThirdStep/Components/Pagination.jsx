import { styled } from "@mui/material/styles";
import { Pagination } from "@mui/material";

const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& ul": {
    justifyContent: "center",
    "& .MuiButtonBase-root": {
      width: 48,
      height: 48,
      borderRadius: "130px",
    },
    "& .Mui-selected": {
      backgroundColor: "#140a35",
      color: "#fff",
    },
  },
}));

export default StyledPagination;

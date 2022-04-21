import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";

const StyledCheckIcon = styled(CheckIcon)({
  width: "18px",
  height: "18px",
  color: "#fff",
});

const StyledCheckbox = styled(Checkbox)(({ theme }) => {
  return {
    "&.Mui-checked": {
      backgroundImage: theme.palette.gradients.diagonal,
      borderColor: "transparent !important",
    },
    "&.MuiCheckbox-root": {
      width: "30px",
      height: "28px",
      borderRadius: "8px",
      border: `1px solid ${theme.palette.checkbox.border}`,
      backgroundColor: theme.palette.checkbox.background,
      color: "transparent",
    },
  };
});

StyledCheckbox.defaultProps = {
  checkedIcon: <StyledCheckIcon />,
};

export default StyledCheckbox;

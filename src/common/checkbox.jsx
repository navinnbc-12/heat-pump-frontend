import { styled } from "@mui/material/styles";
import { Checkbox } from "@mui/material";
import { Check as CheckIcon } from "@mui/icons-material";
import { useController } from "react-hook-form";

const StyledCheckIcon = styled(CheckIcon)({
  width: "18px",
  height: "18px",
  color: "#ff976e",
});

const StyledCheckbox = styled(Checkbox)(({ theme }) => {
  return {
    "&.Mui-checked": {
      // backgroundColor: "Yellow",
      border: "1px solid #b3b3b3",
    },
    "&.MuiCheckbox-root": {
      width: "20px",
      height: "20px",
      borderRadius: "5px",
      border: "1px solid #b3b3b3",
      backgroundColor: "#f4f4f4",
      color: "transparent",
    },
  };
});

StyledCheckbox.defaultProps = {
  checkedIcon: <StyledCheckIcon />,
};

export const FormCheckbox = ({
  name: inputName,
  control,
  defaultValue,
  ...props
}) => {
  const {
    field: { onChange, onBlur, name, value, ref },
  } = useController({
    name: inputName,
    control,
    defaultValue: defaultValue || "",
  });

  return (
    <StyledCheckbox
      {...{ onChange, onBlur, name }}
      checked={value}
      {...props}
      inputRef={ref}
    />
  );
};

export default StyledCheckbox;

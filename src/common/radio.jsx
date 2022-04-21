import { styled } from "@mui/material/styles";
import { Radio } from "@mui/material";
import { Check as CheckIcon } from "@mui/icons-material";
import { useController } from "react-hook-form";

// const StyledCheckIcon = styled(Radio)({
//   width: "18px",
//   height: "18px",
//   color: "#ff976e",
// });

const StyledRadio = styled(Radio)(({ theme }) => {
  return {
    "&.Mui-checked": {
      width: "18px",
      height: "18px",
      color: "#ff976e",
      border: "1px solid transparent",
    },
    "&.MuiRadio-root": {
      width: "20px",
      height: "20px",
      //   border: "1px solid #b3b3b3",
      //   backgroundColor: "#f4f4f4",
      //   color: "#b3b3b3",
    },
  };
});

// StyledRadio.defaultProps = {
//   checkedIcon: <StyledCheckIcon />,
// };

export const FormRadio = ({
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
    <StyledRadio
      {...{ onChange, onBlur, name }}
      checked={value}
      {...props}
      inputRef={ref}
    />
  );
};

export default StyledRadio;

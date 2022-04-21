import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { useController } from "react-hook-form";

const StyledTextField = styled(TextField)(({ theme, value }) => ({
  "& .Mui-disabled": {
    color: "#0008 !important",
    WebkitTextFillColor: "#0008 !important",
  },
  justifyContent: "center",
  // applied to label of all variants
  "& label": {
    color: "#aaa",
    lineHeight: 1.3,
    fontSize: "18px",
    fontWeight: "300",
    fontFamily: "Outfit",
    "&.Mui-focused": {
      color: "#f0292d",
      background: "#fff",
    },
  },
  // applied to label of outlined variant
  "& .MuiInputLabel-outlined": {
    backgroundColor: value ? "white" : "#white",
    padding: theme.spacing(0, 1),
  },
  // applied to InputBase (FormControl) of all variants
  "& .MuiInputBase-root": {
    height: "62px",
    borderRadius: "10px",
    border: "1px solid #cdcdcd",
    backgroundColor: "white",
    "&.Mui-focused": {
      backgroundColor: "#fff",
      border: "1px solid #cdcdcd",
      // backgroundImage: `linear-gradient(${theme.palette.background.main}, ${theme.palette.background.main}), ${theme.palette.gradients.horizontalLinear}`,
      // backgroundOrigin: "border-box",
      // backgroundClip: "padding-box, border-box",
    },
    "& .MuiOutlinedInput-input": {
      padding: "13px 16px",
      color: "black",
      fontWeight: "bold",
    },
  },
  // applied to InputBase (FormControl) of filled variant
  "& .MuiFilledInput-root": {
    backgroundColor: "white",
    "&::after ,::before": { display: "none" },
    "& .MuiFilledInput-input": {
      "&:focus": { backgroundColor: "transparent" },
    },
  },
  // applied to InputBase (FormControl) of outlined variant
  "& .MuiOutlinedInput-root": {
    backgroundColor: value ? "white" : "white",
    "& fieldset": { border: "none" },
  },
}));

export const menuSX = {
  mt: "10px",
  "& .MuiMenu-paper": {
    // border: (theme) => `1px solid ${theme.palette.ternary.main}`,
    borderRadius: "10px",
    boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.08)",
  },
  "& ul": {
    py: "10px",
    "& .MuiMenuItem-root": {
      p: "16px 20px",
      background: "#fff",
      color: "black",
      fontWeight: "bold",
      "&:hover": {
        color: "#f0292d",
      },
      "&.Mui-selected": {
        bgcolor: "#f2f1f6",
      },
    },
  },
};

StyledTextField.defaultProps = {
  // InputProps: { disableUnderline: true },
  SelectProps: {
    MenuProps: {
      sx: menuSX,
    },
  },
};

// Used with react-hook-form
export const Input = ({ name: inputName, control, defaultValue, ...props }) => {
  const {
    field: { onChange, onBlur, onFocus, name, value, ref, IconComponent },
  } = useController({
    name: inputName,
    control,

    defaultValue: defaultValue || "",
  });

  return (
    <StyledTextField
      {...{ onChange, onFocus, onBlur, name, value, IconComponent }}
      {...props}
      inputRef={ref}
    />
  );
};

export default StyledTextField;

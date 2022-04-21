import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Card = styled(Box)(({ theme }) => ({
  width: "80%",
  margin: "72.5px 0 50px 42px",
  padding: "60px 26px 20px 20px",
  borderRadius: "50px",
  border: "solid 1px  #d3d3d3",
  backgroundColor: "#fff",
  //   border: "1px solid  #f2f3f2 ",
  //   borderRadius: " 1.95vw",
  //   padding: "3.8vh 1.33vw !important",
  //   marginTop: "4vh",
  //   marginLeft: " 3vw",
}));

export const CardRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "15px 0",
});

export const CardCol4 = styled(Box)({
  width: "25%",
});

export const HeadingText = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontSize: "28px",
  fontWeight: "bold",
  lineHeight: "normal",
  letterSpacing: "0.2px",
  color: "#000",
}));

export const SubHeadingText = styled(Typography)(({ theme }) => ({
  margin: "6px 0px 10px 0",
  fontSize: "14px",
  fontWeight: "bold",
  lineHeight: "normal",
  color: "#0008",
}));

export const Title = styled(Typography)({
  width: "94px",
  height: "16px",
  margin: "2px 0px 1px 0",
  opacity: 0.5,
  fontFamily: "Manrope",
  fontSize: "12px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.33,
  letterSpacing: "normal",
  color: "#000",
});

export const Description = styled(Typography)({
  //   width: "108px",
  height: "19px",
  margin: "0 0 0 5px",
  fontFamily: "Manrope",
  fontSize: "14px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  color: "#000",
});

export const AccordionContainer = styled(Box)({
  width: "100%",
  padding: "10px 0px",
  margin: "0",
});

export const ModalContainer = styled(Box)({
  width: "80%",
  height: "90%",
  margin: "2.5% 10%",
  borderRadius: "20px",
  border: "solid 1px #f2f1f6",
  backgroundColor: "#fff",
  padding: "0 15px 5px",
  overflow: "scroll",
});

export const DayText = styled(Typography)({
  width: "29px",
  height: "20px",
  fontFamily: "Manrope",
  fontSize: "14px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.43,
  letterSpacing: "normal",
  color: "black",
  textAlign: "center",
  marginBottom: "10px",
});

export const DashboardCard = styled(Box)(({ theme }) => ({
  width: "205px",
  height: "219px",

  padding: "20px",
  borderRadius: "20px",
  backgroundColor: "#f2f1f6",
}));

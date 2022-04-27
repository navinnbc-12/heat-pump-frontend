import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
  LinearProgress,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { Box } from "@mui/system";

const StyledTableCell = styled(TableCell, {
  shouldForwardProp: (prop) => (prop === "cellWidth" ? false : true),
})(({ cellWidth }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "black",

    width: cellWidth ? cellWidth : undefined,
    fontWeight: "bolder",
    fontFamily: "Outfit",
    lineHeight: "normal",
  },
  [`&.${tableCellClasses.root}`]: { border: 0 },
}));

const CustomContainer = styled(Box)(({ theme }) => ({
  border: `1px solid #f2f1f6`,
  borderRadius: "20px",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  cursor: "pointer",
  borderTop: "1px solid #f2f2f2",
  height: 70,
  "&:hover": {
    backgroundColor: "#f2f1f6",
  },
  // "&:nth-of-type(odd)": {
  //   backgroundColor: "#f2f1f6",
  // },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const TableHeading = ({
  title,
  children,
  titleComponent = "h3",
  titleSx = { fontSize: "20px", fontWeight: "bold", flexGrow: "1" },
}) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      px: 2,
      py: 1.5,
      borderBottom: (theme) => `1px solid #f2f1f6`,
    }}
  >
    <Typography component={titleComponent} sx={titleSx}>
      {title}
    </Typography>
    <Box sx={{ display: "flex", gap: 1 }}>{children}</Box>
  </Box>
);

const CustomTable = ({
  heading,
  headers,
  rows,
  pagination,
  isLoading,
  isFetching,
  headerCellWidth,
  containerProps,
}) => {
  return (
    <>
      <CustomContainer {...containerProps}>
        {heading}
        <TableContainer component={"div"}>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map((header, index) => (
                  <StyledTableCell
                    sx={{ textAlign: "center" }}
                    key={index}
                    component="th"
                    cellWidth={headerCellWidth}
                  >
                    {header}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody
            // sx={{
            //   border: `1px solid #f2f1f6`,
            //   borderRadius: "20px",
            //   borderCollapse: "collapse",
            // }}
            >
              {isLoading ? (
                <>
                  <StyledTableRow>
                    <StyledTableCell colSpan={headers.length} rowSpan={3}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CircularProgress />
                      </Box>
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow />
                  <StyledTableRow />
                </>
              ) : (
                rows.map((row, index) => (
                  <StyledTableRow
                    key={row.id || index}
                    onClick={() => {
                      row.onClick();
                    }}
                  >
                    {row.items.map((item, index) => (
                      <StyledTableCell
                        sx={{
                          textAlign: "center",
                          color: "black",
                          fontWeight: "bolder",
                          fontFamily: "Outfit",
                        }}
                        key={index}
                      >
                        {item}
                      </StyledTableCell>
                    ))}
                  </StyledTableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {isFetching ? <LinearProgress /> : <Box sx={{ height: "4px" }} />}
        <Box sx={{ m: 1 }}>{pagination}</Box>
      </CustomContainer>
    </>
  );
};
export default CustomTable;

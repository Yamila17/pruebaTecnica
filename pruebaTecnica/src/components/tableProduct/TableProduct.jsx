import * as React from "react";
import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import "./tableProduct.css";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Grid from '@mui/material/Grid';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgb(139, 205, 163)",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#e0e0e0",
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "&:not(:last-child)": {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const RoundedTableContainer = styled(TableContainer)({
  borderRadius: "10px",
  overflow: "hidden",
});

const TableProduct = ({ products = [] }) => {
  const [open, setOpen] = React.useState(false);
  return (

    <RoundedTableContainer>

    <Grid container alignItems="center" spacing={1}>
      <Grid item>
        <IconButton
          style={{ backgroundColor: "#8BDFA3" }}
          aria-label="expand row"
          size="small"
          onClick={() => setOpen(!open)}
        >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </Grid>
      <Grid item>
        <Typography variant="h6" component="div">
          MÁS INFORMACION DEL PRODUCTO
        </Typography>
      </Grid>
    </Grid>

    <Collapse in={open} timeout="auto" unmountOnExit>
      <Box sx={{ margin: 1, overflowX: 'auto' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>NUMERO DE PRODUCTOS</StyledTableCell>
              <StyledTableCell align="left">MARCA COMERCIAL</StyledTableCell>
              <StyledTableCell align="left">PRINCIPIO ACTIVO</StyledTableCell>
              <StyledTableCell align="left">CONCENTRACIÓN</StyledTableCell>
              <StyledTableCell align="left">
                FORMA DE DOSIFICACIÓN
              </StyledTableCell>
              <StyledTableCell align="left">VÍA</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <StyledTableRow key={product.productNumber}>
                <StyledTableCell component="th" scope="row">
                  {product.productNumber || "NO DATA AVAILABLE"}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {product.brandName || "NO DATA AVAILABLE"}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {product.activeIngredients.name || "NO DATA AVAILABLE"}
                </StyledTableCell>
                <TableCell align="left">
                  {product.activeIngredients.strength || "NO DATA AVAILABLE"}
                </TableCell>
                <StyledTableCell align="left">
                  {product.dosageForm || "NO DATA AVAILABLE"}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {product.route || "NO DATA AVAILABLE"}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Collapse>
  </RoundedTableContainer>
  );
};

export default TableProduct;

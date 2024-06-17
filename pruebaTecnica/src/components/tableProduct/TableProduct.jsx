import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import "./tableProduct.css";

const TableProduct = ({ products = [] }) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NUMERO DE PRODUCTOS</TableCell>
            <TableCell align="right">MARCA COMERCIAL</TableCell>
            <TableCell align="right">PRINCIPIO ACTIVO</TableCell>
            <TableCell align="right">CONCENTRACIÓN</TableCell>
            <TableCell align="right">FORMA DE DOSIFICACIÓN</TableCell>
            <TableCell align="right">VÍA</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.productNumber}>
              <TableCell component="th" scope="row">
                {product.productNumber || "NO DATA AVAILABLE"}
              </TableCell>
              <TableCell align="right">
                {product.brandName || "NO DATA AVAILABLE"}
                </TableCell>
              <TableCell align="right">
                {product.activeIngredients.name || "NO DATA AVAILABLE"}
              </TableCell>
              <TableCell align="right">
                {product.activeIngredients.strength || "NO DATA AVAILABLE"}
              </TableCell>
              <TableCell align="right">
                {product.dosageForm || "NO DATA AVAILABLE"}
                </TableCell>
              <TableCell align="right">
                {product.route || "NO DATA AVAILABLE"}
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableProduct;

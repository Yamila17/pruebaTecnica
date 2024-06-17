import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import "./tableSubmissions.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'rgb(139, 205, 163)',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#e0e0e0',

  },
  
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:not(:last-child)': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const RoundedTableContainer = styled(TableContainer)({
  borderRadius: "10px", 
  overflow: "hidden", 
});

const TableSubmissions = ({ submissions = [] }) => {
  return (
    <RoundedTableContainer>
      <Table sx={{ minWidth: 650}} aria-label="simple table" >
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>TIPO</StyledTableCell>
            <StyledTableCell align="left">NUMERO</StyledTableCell>
            <StyledTableCell align="left">ESTADO</StyledTableCell>
            <StyledTableCell align="left">CLASS CODE</StyledTableCell>
            <StyledTableCell align="left">CLASS CODE DESCRIPTION</StyledTableCell>
            <StyledTableCell align="left">PRIORIDAD</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {submissions.map((submission) => (
            <StyledTableRow>
              <StyledTableCell  component="th" scope="row">
                {submission.submissionType}
              </StyledTableCell>
              <StyledTableCell align="left">
                {submission.submissionNumber || "NO DATA AVAILABLE"}
              </StyledTableCell>
              <StyledTableCell align="left">
                {submission.submissionStatus || "NO DATA AVAILABLE"}
              </StyledTableCell>
              <StyledTableCell align="left">
                {submission.submissionClassCode || "NO DATA AVAILABLE"}
              </StyledTableCell>
              <StyledTableCell align="left">
                {submission.submissionClassCodeDescription || "NO DATA AVAILABLE"}
              </StyledTableCell>
              <StyledTableCell align="left">
                {submission.reviewPriority || "NO DATA AVAILABLE"}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </RoundedTableContainer>
  );
};

export default TableSubmissions;

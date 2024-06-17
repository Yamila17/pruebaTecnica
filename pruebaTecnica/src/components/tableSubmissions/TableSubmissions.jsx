import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./tableSubmissions.css";

const TableSubmissions = ({ submissions = [] }) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>TIPO</TableCell>
            <TableCell align="left">NUMERP</TableCell>
            <TableCell align="left">ESTADO</TableCell>
            <TableCell align="left">CLASS CODE</TableCell>
            <TableCell align="left">CLASS CODE DESCRIPTION</TableCell>
            <TableCell align="left">PRIORIDAD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {submissions.map((submission) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {submission.submissionType}
              </TableCell>
              <TableCell align="left">
                {submission.submissionNumber || "NO DATA AVAILABLE"}
              </TableCell>
              <TableCell align="left">
                {submission.submissionStatus || "NO DATA AVAILABLE"}
              </TableCell>
              <TableCell align="left">
                {submission.submissionClassCode || "NO DATA AVAILABLE"}
              </TableCell>
              <TableCell align="left">
                {submission.submissionClassCodeDescription || "NO DATA AVAILABLE"}
              </TableCell>
              <TableCell align="left">
                {submission.reviewPriority || "NO DATA AVAILABLE"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableSubmissions;

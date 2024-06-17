import * as React from "react";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"
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
         INFORMACIÓN SOBRE ENVÍOS/PRESENTACIONES
        </Typography>
      </Grid>
    </Grid>

    <Collapse in={open} timeout="auto" unmountOnExit>
    <Box sx={{ margin: 1, overflowX: 'auto' }}>
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
      </Box>
      </Collapse>
    </RoundedTableContainer>
  );
};

export default TableSubmissions;

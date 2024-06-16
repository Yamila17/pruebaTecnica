import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './tableSubmissions.css';

// function Row(submission) {
//   const { submission } = submission;
//   const [open, setOpen] = React.useState(false);

//   return (
//     <React.Fragment>
//       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           NOMBRE CELDA
//         </TableCell>
//         <TableCell align="right">dato 1</TableCell>
//         <TableCell align="right">DATO 2</TableCell>
//         <TableCell align="right">DATO 3</TableCell>
//         <TableCell align="right">dato 4</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 History
//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>TIPO </TableCell>
//                     <TableCell>NUMERO</TableCell>
//                     <TableCell align="right">ESTADO</TableCell>
//                     <TableCell align="right">CLASS_CODE</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {submission.map((historyRow) => (
//                     <TableRow key={historyRow.date}>
//                       <TableCell component="th" scope="row">
//                         {historyRow.date}
//                       </TableCell>
//                       <TableCell>{historyRow.customerId}</TableCell>
//                       <TableCell align="right">{historyRow.amount}</TableCell>
//                       <TableCell align="right">
//                         {Math.round(historyRow.amount * row.price * 100) / 100}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// SubmissionsList.propTypes = {
//   submissions: PropTypes.arrayOf(PropTypes.shape({
//     submissionType: PropTypes.string.isRequired,
//     submissionNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     submissionStatus: PropTypes.string.isRequired,
//     submissionStatusDate: PropTypes.string.isRequired,
//     reviewPriority: PropTypes.string,
//     submissionClassCode: PropTypes.string.isRequired,
//     submissionClassCodeDescription: PropTypes.string,
//     applicationDocs: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//       date: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired,
//     })),
//   })).isRequired,
// };



 const TableSubmissions = ({submissions = [] }) => {
   return (
      <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>TIPO</TableCell>
          <TableCell align="right">NUMERP</TableCell>
          <TableCell align="right">ESTADO</TableCell>
          <TableCell align="right">class_code</TableCell>
          <TableCell align="right">PRIORIDAD</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {submissions.map((submission) => (
          <TableRow>
            <TableCell component="th" scope="row">
              {submission.submissionType}
            </TableCell>
            <TableCell align="right">{submission.submissionNumber}</TableCell>
            <TableCell align="right">{submission.submissionStatus}</TableCell>
            <TableCell align="right">{submission.submissionClassCode}</TableCell>
            <TableCell align="right">{submission.reviewPriority}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
   );
 };

export default TableSubmissions;

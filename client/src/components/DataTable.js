import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import UserService from "../services/user.service";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
    const [content, setContent] = useState([]);
    const [noContent, setNoContent] = useState("NO LOAN FOUND");

    useEffect(() => {
        UserService.getUserBoard().then(
          (response) => {
            if(response.data.length !== 0){
                setContent(response.data);
            }else{
                setContent([{CId: 'NO LOAN FOUND'}])
            }
          },
          (error) => {
            const _content =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
    
            setContent(_content);
          }
        );
      }, []);
    

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Customer ID</StyledTableCell>
            <StyledTableCell align="right">Loan ID</StyledTableCell>
            <StyledTableCell align="right">Date of Disbursment</StyledTableCell>
            <StyledTableCell align="right">Outstanding Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {content.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.CId}
              </StyledTableCell>
              <StyledTableCell align="right">{row.LoanID}</StyledTableCell>
              <StyledTableCell align="right">{row.DoDsbsnt}</StyledTableCell>
              <StyledTableCell align="right">{row.OutsAmount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
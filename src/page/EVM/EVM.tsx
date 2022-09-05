import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import {
  Router,
  Link,
  goBack,
  goTo,
  popToTop
} from "react-chrome-extension-router";

import HashSearch from "./txHelper/HashSearch";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
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

function createData(
  Name: string,
  Description: string,
  Component:  React.ComponentType<any>
) {
  return { Name, Description, Component };
}

const rows = [
  createData('Hash search', "it is multichain hash search (block account ,etc..) .",HashSearch),
  createData('Decode Tx', "Use for decode Tx hex by function signature .",HashSearch),
  createData('Event watch', "it is Event log watch start block until end .",HashSearch),
  createData('Bordcast row tx', "Send row tx .",HashSearch),
  createData('NFT Select mint', "It tricker nft id for mint .",HashSearch),
];

export default function EVM() {
  const [rowFilter, setRowFilter] = React.useState<any[]>([]);
  React.useEffect(() => {
    setRowFilter(rows)
  }, [])
  const OnSearchTools = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRowFilter(
      rows.filter((row) => row.Name.includes(e.target.value))
    )
  }
  return (
    <TableContainer component={Paper}>

      <Table sx={{ minWidth: 350 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* <StyledTableCell>Tools</StyledTableCell> */}
            <StyledTableCell>
              <TextField
                // style={{height:"20px"}} 
                id="outlined-search"
                label="Search field"
                type="search"
                onChange={OnSearchTools}
              />
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowFilter.map((row) => (
            <StyledTableRow key={row.Name}>
              <StyledTableCell component="th" scope="row">
                <Link className="custom-link" component={row.Component} props={{ message: "I came from component one!" }}>
                  {row.Name}
                </Link>
              </StyledTableCell>
              <StyledTableCell >{row.Description}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        paddingTop:'70px',
    },
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1478963, '08/09/2019', 'PEACE1A', 'NEW', 'Waiting for Review'),
  createData(2147896, '08/09/2019', 'PEACE1A', 'UPDATE', 'Accepted'),
  createData(3214789, '08/09/2019', 'PEACE1A', 'FIX', 'Published'),
  createData(4789632, '08/09/2019', 'PEACE1A', 'FIX', 'Accepted'),
  createData(7896321, '08/09/2019', 'PEACE1A', 'UPDATE', 'Published'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Paper Name</TableCell>
            <TableCell align="right">Submission Type</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

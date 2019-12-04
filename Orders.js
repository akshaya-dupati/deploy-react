import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import InsertLinkIcon from '@material-ui/icons/InsertLink';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(1, 'Launcher DB test In Configurable Stats DB -1', 'Merchant Mapping Validator', '14 Oct, 2019', <span style={{color : "#00b359" , fontWeight : "bold"}}>SUCCESS</span>, <InsertLinkIcon/>),
  createData(2, 'Launcher DB test In Configurable Stats DB -1', 'Merchant Mapping Validator', '14 Oct, 2019', <span style={{color : "#00b359", fontWeight : "bold"}}>SUCCESS</span>, <InsertLinkIcon/>),
  createData(3, 'Launcher DB test In Configurable Stats DB -1', 'Merchant Mapping Validator', '14 Oct, 2019',  <span style={{color : "#00b359", fontWeight : "bold"}}>SUCCESS</span>,<InsertLinkIcon/>),
  createData(4, 'Launcher DB test In Configurable Stats DB -1', 'Merchant Mapping Validator', '14 Oct, 2019', <span style={{color : "#00b359", fontWeight : "bold"}}>SUCCESS</span>, <InsertLinkIcon/>),
  createData(5, 'Launcher DB test In Configurable Stats DB -1', 'Merchant Mapping Validator', '14 Oct, 2019',  <span style={{color : "#00b359", fontWeight : "bold"}}>SUCCESS</span>,<InsertLinkIcon/>),
];

function Orders() {
  
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  const styles = {
    marginLeft: "300px",
  };
  const date = new Date();
  return (
    <React.Fragment>
     <div>
      <span style = {{fontSize : "25px"}}>Home </span> , Last sync on {date.getDate() + ' Nov, '+ date.getFullYear()}
    </div>
     <FormControl component="fieldset">
      <FormGroup aria-label="position" row style={styles}>
        <FormControlLabel
         style={styles}
          value="end"
          control={<Switch color="primary" />}
          label="Show Success"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Switch color="primary" />}
          label="Show offline users"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Job Name</TableCell>
            <TableCell>Sparkle ML App</TableCell>
            <TableCell>Submitted Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Yarn</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default Orders;
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import image from './group.png';
import screenshot from './screenshot.png';
import {Link} from 'react-router-dom'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" display="inline">
      This product is backed and powered with the intiligient of maya.ai and Crayon Data Pte Ltd
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'inherit',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(15, 30),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 5, 2),
    backgroundColor: "#1091b5",
    textTransform : "none",
    width : "120px"
  },
  typo: {
      fontWeight : 850,
      letterSpacing : -6
  },
  labelRoot: {
    fontSize: "16px",
    color : "#262626",
    fontWeight : "bold"
  },
  dot: {
    height: 14,
    width: 14,
    backgroundColor: "black",
    borderRadius: "50%",
    display: "inline-block"
  }
}));

function Login() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={2} md={4} className={classes.image} />
      <Grid item xs={12} sm={10} md={8} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h2" className={classes.typo}>
            dummy<span className={classes.dot}></span>
          </Typography><br/><br/>
          <Typography component="h3" variant="subtitle1" style={{textAlign : "center"}}>
            Sign into your<br/> <Typography style={{fontWeight : "bold"}}>Territory Management Console(TMC)</Typography>
          </Typography>
          <form className={classes.form} noValidate>
          <TextField
          id="filled-full-width"
          label="LOGIN"
          style={{ margin: 8 }}
          placeholder="user name"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
            classes: {
                root: classes.labelRoot,
                focused: classes.labelFocused
              } 
          }}
          variant="outlined"
        />
            <TextField
            id="filled-full-width"
            label="PASSWORD"
            style={{ margin: 8 }}
            placeholder="credentials"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
              classes: {
                root: classes.labelRoot,
                focused: classes.labelFocused
              }     
            }}
            variant="outlined"
          />
          <Grid container>
            <FormControlLabel style={{marginLeft : "2px"}}
              control={<Checkbox value="remember" color="primary" />}
              label="Keep me signed in"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"  
              className={classes.submit}
            >
              <Link to="/dashboard" style={{textDecoration : "none" , color : "white"}}>Sign in</Link>
            </Button></Grid>

            <Box mt={5} style={{marginTop : "150px"}}>
              <img src={screenshot} alt="Copyright"/><Copyright/>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Login;
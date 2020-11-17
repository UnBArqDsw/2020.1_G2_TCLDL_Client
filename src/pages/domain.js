// Imports
import React from "react";
//import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import styled from "styled-components";
//import { useTranslation } from "react-i18next";
import AppBar from "../components/AppBar";

// Styled components

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  title: {
    color: red,
  },
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

function Domain() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid container item xs={12} spacing={3}>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar>W</Avatar>
              </Grid>
              <Grid item xs>
                <Typography>{message}</Typography>
              </Grid>
            </Grid>
          </Paper>

          <FormRow />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    // All components inside a container
    <div>
      <AppBar />
      <Container>
        <div>
          <h1>Domain</h1>
        </div>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar>W</Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography>{message}</Typography>
                  </Grid>
                </Grid>
              </Paper>

              <FormRow />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Domain;

// Imports
import React from "react";
import { Container } from "@material-ui/core";
import AppBar from "../components/AppBar";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  image: {
    width: 128,
    height: 128,
  },
}));


export default function DomainContainer() {
  const classes = useStyles();

  return (

      <Container >
        <div>
          <h1 style={{ fontFamily: 'Roboto', marginLeft: "200px"}}>Domain</h1>
        </div>
        <div>
          <p style={{ fontFamily: 'Roboto', marginLeft: "200px",  marginTop: "50px"}}>06 domains available</p>
        </div>
        <div className={classes.root} style={{marginLeft: "200px"}} >
        <hr  size="1px" width="73%" align="left"  noshade style={{marginBottom: "50px"}}></hr>
          <Grid container spacing={8}>
            <Grid container item xs={3}>
              <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid
                    item
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography style={{ fontFamily: "Roboto Mono" }}>
                      Machine Translation
                    </Typography>
                    <ButtonBase className={classes.image}>
                      <img src="/machine.png" alt="logo" />
                    </ButtonBase>
                    <Typography style={{ fontFamily: "Roboto Mono" }}>2 Benchmarks</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid container item xs={3}>
              <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid
                    item
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography style={{ fontFamily: "Roboto Mono" }}>
                      Image Classification
                    </Typography>
                    <ButtonBase className={classes.image}>
                      <img src="/classification.png" alt="logo" />
                    </ButtonBase>
                    <Typography style={{ fontFamily: "Roboto Mono" }}>
                      2 Benchmarks
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid container item xs={3}>
              <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid
                    item
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography style={{ fontFamily: "Roboto Mono" }}>
                      Qustion Answering
                    </Typography>
                    <ButtonBase className={classes.image}>
                      <img src="/question.png" alt="logo" />
                    </ButtonBase>
                    <Typography style={{ fontFamily: "Roboto Mono" }}>
                      2 Benchmarks
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
        <div className={classes.root} style={{ marginLeft: "200px", marginBottom: "100px" }}>
          <Grid container spacing={8}>
            <Grid container item xs={3} style={{ marginLeft: "150px"}}>
              <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid
                    item
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography style={{ fontFamily: "Roboto Mono", marginLeft: "45px" }}>
                      Named Entity Recognition
                    </Typography>
                    <ButtonBase className={classes.image}>
                      <img src="/named.png" alt="logo" />
                    </ButtonBase>
                    <Typography style={{ fontFamily: "Roboto Mono" }}>
                      2 Benchmarks
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid container item xs={3}>
              <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid
                    item
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography style={{ fontFamily: "Roboto Mono" }}>
                      Object Detection
                    </Typography>
                    <ButtonBase className={classes.image}>
                      <img src="/object.png" alt="logo" />
                    </ButtonBase>
                    <Typography style={{ fontFamily: "Roboto Mono" }}>
                      2 Benchmarks
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
  );
}

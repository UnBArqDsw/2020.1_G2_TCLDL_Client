import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
    text: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      marginBottom: "200px",
    },
  },
}));

export default function AboutContainer() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={1}>
        <Grid container item xs={3}>
          <div>
            <h1
              style={{
                marginLeft: "200px",
                marginTop: "50px",
                width: "262px",
                height: "185px",
              }}
            >
              The Computional
              <br />
              Limits of <br />
              Deep Learning
            </h1>
          </div>
        </Grid>

        <h1 style={{
          marginTop: "50px",
          marginLeft: "600px",
        }}>About Us</h1>

        <Grid container item xs={10} style={{marginLeft: "500px", marginTop: "-90px"}}>
          <div className={classes.root}>
            <ButtonGroup
              variant="text"
              color="black"
              aria-label="text primary button group"
              size="large"
              borderRight="unset"
            >
              <Button>Our Paper</Button>
              <Button>Our Mission</Button>
              <Button>Contributing</Button>
              <Button>including policy</Button>
            </ButtonGroup>
          </div>
        </Grid>
      </Grid>
      <div>
        <h3
          style={{
            marginLeft: "200px",
          }}
        >
          OUR PAPER
        </h3>
        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            marginRight: "200px",
            marginLeft: "250px",
            marginBottom: "30px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod t
        </div>
        <h3
          style={{
            marginLeft: "200px",
          }}
        >
          OUR MISSION{" "}
        </h3>
        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            marginRight: "200px",
            marginLeft: "250px",
            marginBottom: "30px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
          ultrices tincidunt arcu non sodales neque sodales ut. Odio ut enim
          blandit volutpat. Suspendisse faucibus interdum posuere lorem ipsum.
          Risus commodo viverra maecenas accumsan lacus vel. Facilisi morbi
          tempus iaculis urna id volutpat. Interdum velit euismod in
          pellentesque massa placerat. A arcu cursus vitae congue mauris. Nisl
          tincidunt eget nullam non nisi est sit amet.
        </div>
        <h3
          style={{
            marginLeft: "200px",
          }}
        >
          CONTRIBUTING
        </h3>
        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            marginRight: "200px",
            marginLeft: "250px",
            marginBottom: "30px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
          ultrices tincidunt arcu non sodales neque sodales ut. Odio ut enim
          blandit volutpat. Suspendisse faucibus interdum posuere lorem ipsum.
          Risus commodo viverra maecenas accumsan lacus vel. Facilisi morbi
          tempus iaculis urna id volutpat. Interdum velit euismod in
          pellentesque massa placerat. A arcu cursus vitae congue mauris. Nisl
          tincidunt eget nullam non nisi est sit amet.
        </div>
        <h3
          style={{
            marginLeft: "200px",
          }}
        >
          INCLUDING POLICY
        </h3>
        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            marginRight: "200px",
            marginLeft: "250px",
            marginBottom: "100px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
          ultrices tincidunt arcu non sodales neque sodales ut. Odio ut enim
          blandit volutpat. Suspendisse faucibus interdum posuere lorem ipsum.
          Risus commodo viverra maecenas accumsan lacus vel. Facilisi morbi
          tempus iaculis urna id volutpat. Interdum velit euismod in
          pellentesque massa placerat. A arcu cursus vitae congue mauris. Nisl
          tincidunt eget nullam non nisi est sit amet.
        </div>
      </div>
    </Container>
  );
}

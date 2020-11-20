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

        <h1
          style={{
            marginTop: "50px",
            marginLeft: "600px",
          }}
        >
          About Us
        </h1>

        <Grid
          container
          item
          xs={10}
          style={{ marginLeft: "500px", marginTop: "-90px" }}
        >
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
          TCLD is a platform for viewing paper data that addresses the
          computational limits of deep learning. Our inspiration for creating
          this site was the paper The Computational Limits of Deep Learning ,
          where one of the group merbers Gabriel F. Manso, is one of the authors
          of the paper. The platform was created in conjunction with students
          and professors from YONSEI University, who validated our product, and
          helped us to improve it. This platform is open source and is open to
          contributions from new employees. Paper Link is:{" "}
          <a href="https://arxiv.org/abs/2007.05558">
            The Computational Limits of Deep Learning
          </a>
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
          Our mission is to make it easier to view paper data that deal with
          Deep Learning, and concentrate that knowledge in a platform. In
          addition, we also want to engage researchers in the field to put their
          papers on our platform and also become contributors and reviewers of
          papers to be submitted by other contributors.
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
          There are several ways to be a collaborator on our project, you can
          contribute as a developer by solving implementation issues, in this
          case just follow the contribution guide that is in our documentation.{" "}
          <a href="https://unbarqdsw.github.io/2020.1_G2_TCLDL/contributing/">
            Contribution guide link
          </a>
          You can also contribute by submitting new papers for our plataform,
          for this you just need create an account on our platform and submit
          the paper. Besides that you can still become an administrator, in
          which case you will review the data of submitted papers and approve
          them or in our platform.
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
          We believe that respect for diversity is one of the main pillars for
          our platform to grow, and evolve, thus anyone is welcome to become a
          contributor. We want to be an inclusive and diverse platform where
          women, trans people and people with special needs feel welcomed, so no
          form of discrimination or prejudice will be tolerated.
        </div>
      </div>
    </Container>
  );
}

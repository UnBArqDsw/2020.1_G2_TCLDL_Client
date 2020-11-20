import React from 'react';
import Link from 'next/link'

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
  container: {
    margin: '0px 20px',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  image: {
    width: 128,
    height: 128,
  },
}));

const Item = ({ name, image, benchmarks, link }) => {
  const classes = useStyles();
  return (
    <Link href={link}>
        <Grid container className={classes.container} item xs={3}>
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
                  {name}
                </Typography>
                <div>
                <ButtonBase className={classes.image}>
                  <img src={image} alt="logo" />
                </ButtonBase>
                <Typography style={{ fontFamily: "Roboto Mono" }}>
                  {benchmarks}
                </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
    </Link>
  );
}

export default Item;

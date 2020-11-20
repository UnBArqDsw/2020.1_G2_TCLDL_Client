// Imports
import React from "react";
import { Container } from "@material-ui/core";
import Link from 'next/link'

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import Item from './item'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
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
    <div>
      <div>
        <h1 style={{ marginLeft: "200px", marginTop: "50px"}}>Domain</h1>
      </div>
      <div>
        <p
          style={{
            marginLeft: "200px"
          }}
        >
          06 domains available
        </p>
      </div>
      <hr
        size="1px"
        width="73%"
        align="center"
        noshade
        style={{ marginBottom: "50px" }}
      ></hr>
      <div className={classes.root} style={{ margin: "20px" }}>
          <Item link={{ pathname: '/domains/domain', query: { domain: 5 }}} name="Machine Translation" image="/machine.png" benchmarks="2 Benchmarks" />
          <Item link={{ pathname: '/domains/domain', query: { domain: 1 }}} name="Image Classification" image="/classification.png" benchmarks="2 Benchmarks" />
          <Item link={{ pathname: '/domains/domain', query: { domain: 3 }}} name="Qustion Answering" image="/question.png" benchmarks="2 Benchmarks" />
      </div>
      <div
        className={classes.root}
        style={{ margin: 20 }}
        >
          <Item link={{ pathname: '/domains/domain', query: { domain: 4 }}} name="Named Entity Recognition" image="/named.png" benchmarks="2 Benchmarks" />
          <Item link={{ pathname: '/domains/domain', query: { domain: 2 }}} name="Object Detection" image="/object.png" benchmarks="2 Benchmarks" />
      </div>
    </div>
  );
}

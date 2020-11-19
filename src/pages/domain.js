// Imports
import { Container } from "@material-ui/core";
import React from "react";
import AppBar from "../components/AppBar";
import DomainContainer from "../components/DomainContainer";
import styles from '../styles/Home.module.css';

export default function Domain() {
  return (
    <div>
      <AppBar />
      <Container>
        <DomainContainer />
      </Container>
    </div>
  );
}

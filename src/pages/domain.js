// Imports
import React from "react";
import { Container } from "@material-ui/core";
import AppBar from "../components/AppBar";
import DomainContainer from "../components/DomainContainer";
import styles from '../styles/Home.module.css';

export default function Domain() {
  return (
    <div>
      <AppBar />
      <div className={styles.container}>
        <DomainContainer />
      </div>
    </div>
  );
}

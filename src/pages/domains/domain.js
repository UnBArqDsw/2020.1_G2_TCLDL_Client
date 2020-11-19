import React, { useState, useEffect } from 'react'
import { withRouter } from 'next/router'
import Button from '@material-ui/core/Button';

import styles from '../../styles/Domain.module.css';
import useStyles from '../../styles/Domain.module';
import Accordion from '../../components/Domain/Accordion'

import {
  imagenet,
  mscoco,
  squad1_1,
  conll2003,
  wmt2014_enfr,
  wmt2014_enge
} from '../../components/data'

const Domain = ({ router }) => {
  const [domain, setDomain] = useState(0)
  const [name, setName] = useState('')
  const [list, setList] = useState([])

  const [buttons, setButtons] = useState([{
    label: 'Imagenet',
    onPress: () => {}
  }])
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    console.log('router', router.query)
    if (router && router.query && router.query.domain) {
      setDomain(router.query.domain)
    }
  }, [])

  useEffect(() => {
    switch (domain) {
      case "1":
        setList([
          {
            label: 'Imagenet',
            data: imagenet,
            chartLabel: 'TOP 1'
          }
        ])
        setName('IMAGE CLASSIFICATION')
        break;
      case "2":
        setList([
          {
            label: 'MSCOCO',
            data: mscoco,
            chartLabel: 'BOX AP'
          }
        ])
        setName('OBJECT DETECTION')
        break;
      case "3":
        setList([
          {
            label: 'SQUAD 1.1',
            data: squad1_1,
            chartLabel: 'F1 score'
          }
        ])
        setName('QUESTION ANSWERING')
        break;
      case "4":
        setList([
          {
            label: 'Conll 2003',
            data: conll2003,
            chartLabel: 'F1 score'
          }
        ])
        setName('NAMED ENTITY')
        break;
      case "5":
        setList([
          {
            label: 'WMT 2014 en-fr',
            data: wmt2014_enfr,
            chartLabel: 'BLEU'
          },
          {
            label: 'WMT 2014 en-ge',
            data: wmt2014_enge,
            chartLabel: 'BLEU'
          }
        ])
        setName('MACHINE TRANSLATION')
        break;
      default:
        break;
    }
  }, [domain])

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const stylesJS = useStyles();
  return (
    <div>
      <div className={styles.container}>

        <main className={styles.main}>
          <div className={styles.charts}>
            <div>
              <div>
                <h1>{name}</h1>
                <p>Home > {name}</p>
              </div>
            </div>
            <p>Dataset</p>
            <Accordion list={list} />
          </div>
          <div className={styles.logo}>
            <div>
              <h1 className={styles.titleDevelopers}>DEVELOPED BY</h1>
              <div className={styles.sameLine}>
                <img src="/unbLogo.jpg" className={styles.smallIcon} alt="unb_logo" />
                <img src="/mitLogo.jpg" className={styles.mitLogo} alt="mit_logo" />
                <img src="/yonseiLogo.jpg" className={styles.smallIcon} alt="yonsei_logo" />
              </div>
            </div>
            <img src="/ibmLogo.jpg" className={styles.ibmLogo} alt="ibm_logo" />
            <div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

export default withRouter(Domain)

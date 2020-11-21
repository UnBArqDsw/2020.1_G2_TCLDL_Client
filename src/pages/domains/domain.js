import React, { useState, useEffect } from 'react'
import { withRouter } from 'next/router'
import Button from '@material-ui/core/Button';

import styles from '../../styles/Domain.module.css';
import useStyles from '../../styles/Domain.module';
import Accordion from '../../components/Domain/Accordion'
import Link from 'next/link'

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
  const [description, setDescription] = useState('')
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
        setDescription('Image classification is the primary domain, in which deep neural networks play the most important role of medical image analysis.')
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
        setDescription('Object detection is a computer technology related to computer vision and image processing that deals with detecting instances of semantic objects of a certain class')
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
        setDescription('Question answering (QA) is a computer science discipline within the fields of information retrieval and natural language processing (NLP), which is concerned with building systems that automatically answer questions posed by humans in a natural language.')
        break;
      case "4":
        setList([
          {
            label: 'Conll 2003',
            data: conll2003,
            chartLabel: 'F1 score'
          }
        ])
        setName('NAMED ENTITY RECOGNITION')
        setDescription('Named-entity recognition is a subtask of information extraction that seeks to locate and classify named entities mentioned in unstructured text into pre-defined categories')
        break;
      case "5":
        setList([
          {
            label: 'WMT 2014 EN-FR',
            data: wmt2014_enfr,
            chartLabel: 'BLEU'
          },
          {
            label: 'WMT 2014 EN-GE',
            data: wmt2014_enge,
            chartLabel: 'BLEU'
          }
        ])
        setName('MACHINE TRANSLATION')
        setDescription('Machine translation is the task of translating a sentence in a source language to a different target language.')
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
            <div className={styles.domainTitle}>
              <div>
                <h1>{name}</h1>
                <p>
                <Link href="/domains">
                  <Button className={stylesJS.aboutIcon}>Domains</Button>
                </Link> 
                  > {name}</p>
              </div>
            </div>
            <p>{description}</p>
            <p className={styles.datasetLabel}>Dataset</p>
            <Accordion list={list} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default withRouter(Domain)

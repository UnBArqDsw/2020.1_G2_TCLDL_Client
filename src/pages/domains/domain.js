import React, { useState } from 'react'

import Button from '@material-ui/core/Button';

import styles from '../../styles/Domain.module.css';
import useStyles from '../../styles/Domain.module';
import Tabs from '../../components/Tabs'
import Chart from '../../components/Chart'
import Accordion from '../../components/Domain/Accordion'

import {
  imagenet,
  mscoco,
  squad1_1,
  conll2003,
  wmt2014_enfr,
  wmt2014_enge
} from '../../components/data'

export default function Home() {
  const [data, setData] = useState(imagenet)
  const [label, setLabel] = useState("TOP 1")
  const [buttons, setButtons] = useState([{
    label: 'Imagenet',
    onPress: () => {}
  }])
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const AccordionItems = [
    {
      label: 'Imagenet',
      data: imagenet,
      chartLabel: 'TOP 1'
    },
    {
      label: 'MSCOCO',
      data: mscoco,
      chartLabel: 'BOX AP'
    },
    {
      label: 'SQUAD 1.1',
      data: squad1_1,
      chartLabel: 'F1 score'
    },
    {
      label: 'Conll 2003',
      data: conll2003,
      chartLabel: 'F1 score'
    },
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
  ]

  const tabs = [
    {
      label: 'Image Classification',
      onSelect: () => {
        setData(imagenet)
        setLabel("TOP 1")
        setButtons([{
          label: 'Imagenet',
          onPress: () => {}
        }])
      }
    },
    {
      label: 'Object Detection',
      onSelect: () => {
        setData(mscoco)
        setLabel("BOX AP")
        setButtons([{
          label: 'MSCOCO',
          onPress: () => {}
        }])
      }
    },
    {
      label: 'Question Answering',
      onSelect: () => {
        setData(squad1_1)
        setLabel("F1 score")
        setButtons([{
          label: 'SQUAD 1.1',
          onPress: () => {}
        }])
      }
    },
    {
      label: 'Named Entity Recognition',
      onSelect: () => {
        setData(conll2003)
        setLabel("F1 score")
        setButtons([{
          label: 'Conll 2003',
          onPress: () => {}
        }])
      }
    },
    {
      label: 'Machine Translation',
      onSelect: () => {
        setData(wmt2014_enfr)
        setLabel("BLEU")
        setButtons([
          {
            label: 'WMT 2014 en-fr',
            onPress: () => {
              setData(wmt2014_enfr)
              setLabel("BLEU")
            }
          }, {
            label: 'WMT 2014 en-ge',
            onPress: () => {
              setData(wmt2014_enge)
              setLabel("BLEU")
            }
          },
      ])
      }
    },
  ]


  const stylesJS = useStyles();
  return (
    <div>
      <div className={styles.container}>

        <main className={styles.main}>

          <div className={styles.charts}>
            <Accordion list={AccordionItems} />
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

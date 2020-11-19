import React, { useState } from 'react'

import Head from 'next/head';
import Button from '@material-ui/core/Button';
import styles from '../styles/Home.module.css';
import useStyles from '../styles/Home.module';
import AppBar from '../components/AppBar'
import Tabs from '../components/Tabs'
import Domain from '../components/Home/Domain'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Chart from '../components/Chart'
import {
  imagenet,
  mscoco,
  squad1_1,
  conll2003,
  wmt2014_enfr,
  wmt2014_enge
} from '../components/data'

export default function Home() {
  const [data, setData] = useState(imagenet)
  const [label, setLabel] = useState("TOP 1")
  const [buttons, setButtons] = useState([{
    label: 'Imagenet',
    onPress: () => {}
  }])

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
          label: 'MS COCO',
          onPress: () => {}
        }])
      }
    },
    {
      label: 'Question Answering',
      onSelect: () => {
        setData(squad1_1)
        setLabel("F1 SCORE")
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
        setLabel("F1 SCORE")
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
            <img src="/tcldlLogo.jpg" className={styles.tcldlLogo} alt="tcldl_logo" />
            <div className={styles.menuTabs}>
              <Tabs tabs={tabs} />
            </div>
            <div>
              {buttons.map((value, index) => (
                <Button onClick={value.onPress} key ={index} className={stylesJS.button} variant="contained">{value.label}</Button>
              ))}
            </div>
            <Chart data={data} label={label} />
          </div>
          <div className={styles.domains}>
            
            <h1 className={styles.title}>
              DOMAINS
            </h1>
            <div className={styles.domainsList}>
              <Domain className={styles.domainsBoard} name="IMAGE CLASSIFICATION" description="13 Papers | 1 Benchmark" />
              <Domain className={styles.domainsBoard} name="OBJECT DETECTION" description="33 Papers | 1 Benchmark" />
              <Domain className={styles.domainsBoard} name="QUESTION ANSWERING" description="16 Papers | 1 Benchmark" />
              <Domain className={styles.domainsBoard} name="NAMED ENTITY RECOGNITION" description="13 Papers | 1 Benchmark" />
              <Domain className={styles.domainsBoard} name="MACHINE TRANSLATION" description="26 Papers | 2 Benchmarks" />
            </div>

          </div>

          <div className={styles.logo}>
            <div>
              <h1 className={styles.titleDevelopers}> DEVELOPED BY</h1>
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

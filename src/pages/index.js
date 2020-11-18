import React, { useState } from 'react'

import Head from 'next/head';
import Button from '@material-ui/core/Button';
import styles from '../styles/Home.module.css';
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
    label: 'Imaginet',
    onPress: () => {}
  }])

  const options = {
    series: [{
      data: [1, 2, 3]
    }, {
      data: [4, 5, 6]
    }]
  }

  const tabs = [
    {
      label: 'Image Classification',
      onSelect: () => {
        setData(imagenet)
        setLabel("TOP 1")
        setButtons([{
          label: 'Imaginet',
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
          label: 'SQUAD1',
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

  return (
    <div>
      <AppBar />

      <div className={styles.container}>

        <main className={styles.main}>

          <img src="/tcldlLogo.jpg" className={styles.tcldlLogo} alt="tcldl_logo" />
          <Tabs tabs={tabs} />
          <button onClick={() => {
            setData(imagenet)
            setLabel("TOP 1")
          }}>
            Imagenet
          </button>
          <button onClick={() => {
            setData(mscoco)
            setLabel("BOX AP")
          }}>
            MS COCO
          </button>
          <button onClick={() => {
            setData(squad1_1)
            setLabel("F1 score")
          }}>
            SQUAD 1.1
          </button>
          <button onClick={() => {
            setData(conll2003)
            setLabel("F1 score")
          }}>
            CoNLL 2003
          </button>
          <button onClick={() => {
            setData(wmt2014_enfr)
            setLabel("BLEU")
          }}>
            WMT 2014 (EN-FR)
          </button>
          <button onClick={() => {
            setData(wmt2014_enge)
            setLabel("BLEU")
          }}>
            WMT 2014 (EN-GE)
          </button>
          <Chart data={data} label={label} />
          <div className={styles.domains}>
            
            <h1 className={styles.title}>
              Domains
            </h1>
          <div className={styles.domainsList}>
            <Domain name="Image Classification" description="2123 Papers | 1 Benchmark" />
            <Domain name="Object Detection" description="2123 Papers | 1 Benchmark" />
            <Domain name="Named Entity Recognition" description="2123 Papers | 2 Benchmarks" />
          </div>
          <div className={styles.domainsList}>
            <Domain name="Machine Translation" description="2123 Papers | 1 Benchmarks" />
            <Domain name="Question Answering" description="2123 Papers | 1 Benchmarks" />
          </div>

            
          </div>

          <div className={styles.logo}>
            <div>
              <h2> Developed by</h2>
            </div>
            <img src="/ibmLogo.jpg" className={styles.ibmLogo} alt="ibm_logo" />
            <div>
              <div className={styles.ibmLogoDiv}>
              </div>
              <div className={styles.sameLine}>
                <img src="/unbLogo.jpg" className={styles.smalIcon} alt="unb_logo" />
                <img src="/mitLogo.jpg" className={styles.mitLogo} alt="mit_logo" />
                <img src="/yonseiLogo.jpg" className={styles.smalIcon} alt="yonsei_logo" />
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import AppBar from '../components/AppBar'
import Domain from '../components/Home/Domain'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Chart from '../components/Chart'

export default function Home() {
  const options = {
    series: [{
      data: [1, 2, 3]
    }, {
      data: [4, 5, 6]
    }]
  }

  return (
    <div>
      <AppBar />

      <div className={styles.container}>

        <main className={styles.main}>

          <img src="/tcldlLogo.jpg" className={styles.tcldlLogo} alt="tcldl_logo" />
          
          <Chart />
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

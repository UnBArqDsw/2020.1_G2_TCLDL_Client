import React from 'react';
import AppBar from '../components/AppBar'
import { Container } from '@material-ui/core';
import useStyles from '../styles/components/SubmitPaper.module';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function SubmitPaper() {
  const styles = useStyles();
  const [domain, setDomain] = React.useState('');
  const [dataset, setDataset] = React.useState('');
  const [accuracyType, setAccuracyType] = React.useState('');
  const [cpuModel, setCpuModel] = React.useState('');
  const [gpuModel, setGpuModel] = React.useState('');
  const [tpuModel, setTpuModel] = React.useState('');

  const handleDomainChange = (event) => {
    setDomain(event.target.value);
  };

  const handleDatasetChange = (event) => {
    setDataset(event.target.value);
  };

  const handleAccuracyTypeChange = (event) => {
    setDataset(event.target.value);
  };

  const handleCpuModelChange = (event) => {
    setCpuModel(event.target.value);
  };
  
  const handleGpuModelChange = (event) => {
    setGpuModel(event.target.value);
  };

  const handleTpuModelChange = (event) => {
    setTpuModel(event.target.value);
  };


  const toggle = (name, func, value) => (
    <FormControl className={styles.selectField}>
      <InputLabel>{name}</InputLabel>
      <Select
        value={value}
        onChange={func}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  )

  return (
    <div>
      <AppBar />
      <Container>
        <div className={styles.boxTitle}>
            <h1>
              Submit paper
            </h1>
        </div>

        <Paper elevation={3} className={styles.root}>
          <div>
            <h2>Paper information</h2>
            <div className={styles.sameLine}>
              <div>
                  <TextField className={styles.flex} id="outlined-basic" label="Paper Name" />
                <div className={styles.sameLine}>
                  <TextField className={styles.flex_author} id="outlined-basic" label="Author(s)"  />
                  <TextField className={styles.flex_date} InputLabelProps={{ shrink: true }} id="outlined-basic" label="Release Date" type="date"/>
                </div>
                <div className={styles.sameLine}>
                  <TextField className={styles.flex_links} id="outlined-basic" label="Paper Link" />
                  <TextField className={styles.flex_links} id="outlined-basic" label="Code Link" />
                </div>
                <div>
                  {toggle('Domain', handleDomainChange, domain)}
                  {toggle('Dataset', handleDatasetChange, dataset)}
                  <TextField className={styles.field} id="outlined-basic" label="Model Name"  />
                </div>
              </div>
              <div className={styles.boxOnRight}>

                
              </div>
            </div>
          </div>
      
          <div className={styles.section}>
            <h2>Accuracy information</h2>
            <div>
              <div>
                {toggle('Accuracy Type', handleAccuracyTypeChange, accuracyType)}
                <TextField className={styles.field} id="outlined-basic" label="Accuracy"  />
              </div>
            </div>
          </div>
          
          <div className={styles.section}>
            <h2>Hardware information</h2>
            <div className={styles.sameLine}>
              <div>
                <h4 className={styles.field}>CPU</h4>
                <div>
                  <div>
                    {toggle('CPU model', handleCpuModelChange, cpuModel)}
                    <TextField className={styles.field} id="outlined-basic" label="# of CPU (s)"  />
                  </div>
                  <TextField className={styles.field} id="outlined-basic" label="CPU's Gflops (32fp)"  />
                </div>
              </div>

              <div className={styles.boxOnRight}>
                <h4 className={styles.field}>GPU</h4>
                <div>
                  <div>
                    {toggle('GPU model', handleGpuModelChange, gpuModel)}
                    <TextField className={styles.field} id="outlined-basic" label="# of GPU (s)"  />
                  </div>
                  <TextField className={styles.field} id="outlined-basic" label="GPU's Gflops (32fp)"  />
                </div>
              </div>
            </div>

            <div>
            <h4 className={styles.subsection}>TPU</h4>
              <div>
                <div>
                  {toggle('TPU model', handleTpuModelChange, tpuModel)}
                  <TextField className={styles.field} id="outlined-basic" label="# of TPU (s)"  />
                </div>
                <TextField className={styles.field} id="outlined-basic" label="TPU's Gflops (32fp)"  />
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Model's information</h2>
            <div>
              <div>
                <TextField className={styles.field} id="outlined-basic" label="Training Time (s)"  />
                <TextField className={styles.field} id="outlined-basic" label="Training Data Size"  />
              </div>
              <TextField className={styles.field} id="outlined-basic" label="# of Epochs"  />
            </div>  
          </div>
          
        </Paper>
        <div className={styles.buttons}>
          <Button className={styles.button} variant="contained">SUBMIT PAPER</Button>
          <Button className={styles.cancelButton}>Cancel</Button>
        </div>
      </Container>
    </div>
  );
}

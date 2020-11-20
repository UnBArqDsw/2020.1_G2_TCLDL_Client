import React from 'react';

import { Container, TextField, Paper, Button, InputLabel, MenuItem, FormControl, Select, IconButton } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { error } from 'highcharts';
import useStyles from '../styles/components/SubmitPaper.module';


export default function SubmitPaper() {
  const styles = useStyles();
  const [domain, setDomain] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [dataset, setDataset] = React.useState('');
  const [paperLink, setPaperLink] = React.useState('');
  const [codeLink, setCodeLink] = React.useState('');
  const [modelName, setModelName] = React.useState('');
  const [accuracyType, setAccuracyType] = React.useState('');
  const [cpuModel, setCpuModel] = React.useState('');
  const [gpuModel, setGpuModel] = React.useState('');
  const [tpuModel, setTpuModel] = React.useState('');
  const [authorsField, setAuthorsField] = React.useState(['']);
  const [authors, setAuthors] = React.useState(['']);
  const [errorText, setErrorText] = React.useState('');
  const [text, setText] = React.useState('');

  const handleDomainChange = (event) => {
    setDomain(event.target.value);
  };

  const handleDatasetChange = (event) => {
    setDataset(event.target.value);
  };

  const handlePapelLink = (event) => {
    setPaperLink(event.target.value);
  };

  const handleCodeLink = (event) => {
    setCodeLink(event.target.value);
  };

  const handleModelName = (event) => {
    setModelName(event.target.value);
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
    <FormControl required className={styles.selectField}>
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

  const addAuthorsField = () => {
    let input = authorsField
    input.push('')
    setAuthorsField([...input])
  }


  const removeAuthorsField = () => {
    let input = authorsField
    if (input.length != 1) {
      input.pop();
      setAuthorsField([...input])
    }
  }


  const onSubmit = () => {
    setSubmitted(true)
    console.log('Foi aqui')
  }

  const authorField = () => {
    return  authorsField.map((el, index) => 
      <div key={index}>
        <TextField className={styles.authorField} required id="outlined-basic" label="Author(s)" />
      </div>
    )
  }

  return (
    <div>
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
                <TextField required error={submitted && !domain.length ? true : false} className={styles.nameflex} id="outlined-basic" label="Paper Name" helperText={submitted && !domain.length ? "Required Field" : ""} onChange={handleDomainChange} />

                <div className={styles.sameLine}>
                  <div className={styles.flexButtons}>
                    <div>
                      {authorField()}
                    </div>
                    <div className={styles.authorButtons}>
                      {authorsField.length === 1 ? null : (
                        <IconButton onClick={removeAuthorsField}>
                          <RemoveIcon />
                        </IconButton>
                      )}
                      <IconButton onClick={addAuthorsField}>
                        <AddIcon />
                      </IconButton>
                    </div>
                  </div>

                  {console.log(submitted)}
                  <TextField required error={submitted && !dataset.length ? true : false} helperText={submitted && !dataset.length ? "Required Field" : ""} className={styles.flexDate} InputLabelProps={{ shrink: true }} id="outlined-basic" label="Release Date" type="date" onChange={handleDatasetChange} />
                </div>
                <div className={styles.sameLine}>
                  <TextField required error={submitted && !paperLink.length ? true : false} helperText={submitted && !paperLink.length ? "Required Field" : ""}  className={styles.flexLinks} id="outlined-basic" label="Paper Link" onChange={handlePapelLink}/>
                  <TextField required error={submitted && !codeLink.length ? true : false} helperText={submitted && !codeLink.length ? "Required Field" : ""}  className={styles.flexLinks} id="outlined-basic" label="Code Link"onChange={handleCodeLink}/>
                </div>
                <div>
                  {toggle('Domain', handleDomainChange, domain)}
                  {toggle('Dataset', handleDatasetChange, dataset)}
                  <TextField required error={submitted && !modelName.length ? true : false} helperText={submitted && !modelName.length ? "Required Field" : ""} className={styles.field} id="outlined-basic" label="Model Name" onChange={handleModelName}/>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Accuracy information</h2>
            <div>
              <div>
                {toggle('Accuracy Type', handleAccuracyTypeChange, accuracyType)}
                <TextField required className={styles.field} id="outlined-basic" label="Accuracy" />
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Hardware information</h2>
            <div className={styles.sameLine}>
              <div>
                <h4 className={styles.field}>CPU </h4>
                <div>
                  <div>
                    {toggle('CPU model', handleCpuModelChange, cpuModel)}
                    <TextField required className={styles.field} id="outlined-basic" label="# of CPU (s)" />
                  </div>
                  <TextField required className={styles.field} id="outlined-basic" label="CPU's Gflops (32fp)" />
                </div>
              </div>

              <div className={styles.boxOnRight}>
                <h4 className={styles.field}>GPU</h4>
                <div>
                  <div>
                    {toggle('GPU model', handleGpuModelChange, gpuModel)}
                    <TextField required className={styles.field} id="outlined-basic" label="# of GPU (s)" />
                  </div>
                  <TextField required className={styles.field} id="outlined-basic" label="GPU's Gflops (32fp)" />
                </div>
              </div>
            </div>

            <div>
              <h4 className={styles.subsection}>TPU</h4>
              <div>
                <div>
                  {toggle('TPU model', handleTpuModelChange, tpuModel)}
                  <TextField required className={styles.field} id="outlined-basic" label="# of TPU (s)" />
                </div>
                <TextField required className={styles.field} id="outlined-basic" label="TPU's Gflops (32fp)" />
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Model's information</h2>
            <div>
              <div>
                <TextField required className={styles.field} id="outlined-basic" label="Training Time (s)" />
                <TextField required className={styles.field} id="outlined-basic" label="Training Data Size" />
              </div>
              <TextField required className={styles.field} id="outlined-basic" label="# of Epochs" />
            </div>
          </div>

        </Paper>
        <div className={styles.buttons}>
          <Button onClick={() => onSubmit()} className={styles.button} variant="contained">SUBMIT PAPER</Button>
          <Button className={styles.cancelButton}>Cancel</Button>
        </div>
      </Container>
    </div>
  );
}

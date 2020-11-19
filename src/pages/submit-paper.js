import React from 'react';
import AppBar from '../components/AppBar'
import useStyles from '../styles/components/SubmitPaper.module';
import { Container, TextField, Paper, Button, InputLabel, MenuItem, FormControl, Select, IconButton } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { error } from 'highcharts';


export default function SubmitPaper() {
  const styles = useStyles();
  const [domain, setDomain] = React.useState('');
  const [dataset, setDataset] = React.useState('');
  const [paperLink, setPaperLink] = React.useState('');
  const [codeLink, setCodeLink] = React.useState('');
  const [modelName, setModelName] = React.useState('');
  const [accuracyType, setAccuracyType] = React.useState('');
  const [cpuModel, setCpuModel] = React.useState('');
  const [gpuModel, setGpuModel] = React.useState('');
  const [tpuModel, setTpuModel] = React.useState('');
  const authorsField = React.useRef([0]);
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
    var newInput = authorsField.current.length;
    let input = authorsField.current;
    input.push(newInput);
    authorsField.current = input;
    console.log(input);
  }


  const removeAuthorsField = () => {
    let input = authorsField.current;
    if (authorsField.current.length != 1) {
      input.pop();
      authorsField.current = input;
    }
  }

  const authorField = () => {
    return  authorsField.current.map ((el, index) => 
      <div key={index}>
        <TextField required id="outlined-basic" label="Author(s)" key={index} />
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
                <TextField required error={domain.length === 0 ? true : false} className={styles.flex} id="outlined-basic" label="Paper Name" helperText={domain.length === 0 ? "Required Field" : ""} onChange={handleDomainChange} />

                <div className={styles.sameLine}>
                  <div className={styles.flexButtons}>

                    {authorField()}

                    <IconButton onClick={removeAuthorsField}>
                      <RemoveIcon />
                    </IconButton>
                    <IconButton onClick={addAuthorsField}>
                      <AddIcon />
                    </IconButton>
                  </div>
                  <TextField required error={dataset.length === 0 ? true : false} helperText={dataset.length === 0 ? "Required Field" : ""} className={styles.flexDate} InputLabelProps={{ shrink: true }} id="outlined-basic" label="Release Date" type="date" onChange={handleDatasetChange} />
                </div>
                <div className={styles.sameLine}>
                  <TextField required error={paperLink.length === 0 ? true : false} helperText={paperLink.length === 0 ? "Required Field" : ""}  className={styles.flexLinks} id="outlined-basic" label="Paper Link" onChange={handlePapelLink}/>
                  <TextField required error={codeLink.length === 0 ? true : false} helperText={codeLink.length === 0 ? "Required Field" : ""}  className={styles.flexLinks} id="outlined-basic" label="Code Link"onChange={handleCodeLink}/>
                </div>
                <div>
                  {toggle('Domain', handleDomainChange, domain)}
                  {toggle('Dataset', handleDatasetChange, dataset)}
                  <TextField required error={modelName.length === 0 ? true : false} helperText={modelName.length === 0 ? "Required Field" : ""} className={styles.field} id="outlined-basic" label="Model Name" onChange={handleModelName}/>
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
          <Button className={styles.button} variant="contained">SUBMIT PAPER</Button>
          <Button className={styles.cancelButton}>Cancel</Button>
        </div>
      </Container>
    </div>
  );
}

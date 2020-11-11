
import AppBar from '../components/AppBar'
import { Container } from '@material-ui/core';
import useStyles from '../styles/components/SubmitPaper.module';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

export default function SubmitPaper() {
  const styles = useStyles();
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
          <h3>Paper information</h3>
          <div>
            <div>
              <TextField className={styles.field} id="outlined-basic" label="Paper name"  />
              <TextField className={styles.field} id="outlined-basic" label="Release date"  />
            </div>

            <TextField className={styles.field} id="outlined-basic" label="Author(s)"  />
            
            <div>
              <TextField className={styles.field} id="outlined-basic" label="Domain"  />
              <TextField className={styles.field} id="outlined-basic" label="Dataset"  />
            </div>

            <TextField className={styles.field} id="outlined-basic" label="Model name"  />
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

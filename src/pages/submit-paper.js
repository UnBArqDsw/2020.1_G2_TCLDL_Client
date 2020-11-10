
import AppBar from '../components/AppBar'
import { Container } from '@material-ui/core';
import useStyles from '../styles/components/SubmitPaper.module';
import Button from '@material-ui/core/Button';
import GridPapers from '../components/SubmitPaper'
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
          <GridPapers text="" fieldText1="Paper Name" fieldText2="Author(s)" />
          <GridPapers text="Lorem ipsum dolor sit amet" fieldText1="Release Date " fieldText2="Domain" />
          <GridPapers text="consectetur adipiscing elit," fieldText1="Data Set" fieldText2="Model Name" />
        </Paper>
        <div className={styles.buttons}>
          <Button className={styles.button} variant="contained">SUBMIT PAPER</Button>
          <Button className={styles.cancelButton}>Cancel</Button>
        </div>
      </Container>
    </div>
  );
}

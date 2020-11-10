
import AppBar from '../components/AppBar'
import { Container } from '@material-ui/core';
import style from '../styles/Submit-paper.module.css'
import useStyles from '../styles/components/SubmitPaper.module';
import Button from '@material-ui/core/Button';
import GridPapers from '../components/SubmitPaper'

export default function SubmitPaper() {
  const styles = useStyles();
  return (
    <div>
      <AppBar />
      <Container>
        <div className={style.boxTitle}>
          <div className={style.title}>
            <h2>
              Submit paper
            </h2>
          </div>
        </div>

        <div className={style.root}>
          <GridPapers text="" fieldText1="Paper Name" fieldText2="Author(s)" />
          <GridPapers text="Lorem ipsum dolor sit amet" fieldText1="Release Date " fieldText2="Domain" />
          <GridPapers text="consectetur adipiscing elit," fieldText1="Data Set" fieldText2="Model Name" />
          <GridPapers text="sed do eiusmod tempor incididunt ut" fieldText1="Acurracy Type" fieldText2="Acurracy" />
          <GridPapers text="labore et dolore magna aliqua" fieldText1="CPU GFlops" fieldText2="TPU GFlops" />
          <GridPapers text="Massa sed elementum tempus egestas" fieldText1="#Of Parameters" fieldText2="Multiply-Adds" />
          <GridPapers text="Ullamcorper velit sed ullamcorper morbi" fieldText1="Training Time" fieldText2="Dataset Size (ex: 2034324)" />
        </div>

        <div className={style.button}>
          <Button className={styles.button} variant="contained">SUBMIT PAPER</Button>
        </div>
      </Container>
    </div>
  );
}

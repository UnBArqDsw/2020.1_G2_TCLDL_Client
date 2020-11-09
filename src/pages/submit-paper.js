
import AppBar from '../components/AppBar'
import { Container } from '@material-ui/core';
import style from '../styles/Submit-paper.module.css'
import Grid from '@material-ui/core/Grid';
import useStyles from '../styles/components/SubmitPaper.module';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

export default function SubmitPaper() {
  const styles = useStyles();
  return (
    <div>
      <AppBar />
      <Container>
        <div className={style.boxTitle}>
          <div className={style.title}>
            Submit paper
          </div>
        </div>


        <div className={style.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <div className={style.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br />
                labore et dolore magna aliqua. Massa sed elementum tempus egestas. Ullamcorper velit sed ullamcorper morbi. <br />
                Interdum posuere lorem ipsum dolor. At imperdiet dui accumsan sit. Diam quam nulla porttitor massa id neque aliquam. <br />
                Eleifend quam adipiscing vitae proin sagittis nisl. Vel orci porta non pulvinar. Malesuada nunc vel risus commodo viverra <br />
                maecenas accumsan lacus vel. Mauris nunc congue nisi vitae suscipit tellus mauris a. Vulputate eu scelerisque felis imperdiet proin.
                <br /> Mollis nunc sed id semper risus in hendrerit gravida rutrum. Elit ut aliquam purus sit amet luctus venenatis lectus. <br />
                Sed cras ornare arcu dui vivamus arcu felis. Ut enim blandit volutpat maecenas. Ligula ullamcorper malesuada proin libero nunc <br />
                consequat interdum varius sit. Massa eget egestas purus viverra accumsan. Vitae et leo duis ut
          </div>
            </Grid>
            <Grid item xs={12} sm={3}>

              <div className={styles.content}>
                <form className={styles.form} noValidate autoComplete="off">

                  <TextField className={styles.field} id="outlined-basic" label="Paper Name" variant="outlined" />
                  <TextField className={styles.field} id="outlined-basic" label="Release Date" variant="outlined" />
                  <TextField className={styles.field} id="outlined-basic" label="Data Set" variant="outlined" />
                  <TextField className={styles.field} id="outlined-basic" label="Acurracy Type" variant="outlined" />
                  <TextField className={styles.field} id="outlined-basic" label="CPU GFlops" variant="outlined" />
                  <TextField className={styles.field} id="outlined-basic" label="#Of Parameters" variant="outlined" />
                  <TextField className={styles.field} id="outlined-basic" label="Training Time" variant="outlined" />

                </form>
               
              </div>

            </Grid>
            <Grid item xs={12} sm={3}>
            <div className={styles.content}>
                <form className={styles.form} noValidate autoComplete="off">

                  <TextField className={styles.field} id="outlined-basic" label="Author(s)" variant="outlined" />
                  <TextField className={styles.field} id="outlined-basic" label="Domain" variant="outlined" />
                  <TextField className={styles.field} id="outlined-basic" label="Model Name" variant="outlined" />
                  <TextField className={styles.field} id="outlined-basic" label="Acurracy" variant="outlined" />
                  <TextField className={styles.field} id="outlined-basic" label="TPU GFlops" variant="outlined" />
                  <TextField className={styles.field} id="outlined-basic" label="Multiply-Adds" variant="outlined" />
                  <TextField className={styles.field} id="outlined-basic" label="Dataset Size" variant="outlined" />

                </form>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className={style.button}>
        <Button className={styles.button} variant="contained"  >SUBMIT PAPER</Button>
        </div>
      </Container>
    </div>
  );
}

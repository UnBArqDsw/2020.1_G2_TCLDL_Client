
import AppBar from '../components/AppBar'
import { Container } from '@material-ui/core';
import style from '../styles/Submit-paper.module.css'
import Grid from '@material-ui/core/Grid';
import useStyles from '../styles/SubmitPaper.module';

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sed elementum tempus egestas. Ullamcorper velit sed ullamcorper morbi. Interdum posuere lorem ipsum dolor. At imperdiet dui accumsan sit. Diam quam nulla porttitor massa id neque aliquam. Eleifend quam adipiscing vitae proin sagittis nisl. Vel orci porta non pulvinar. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Mauris nunc congue nisi vitae suscipit tellus mauris a. Vulputate eu scelerisque felis imperdiet proin. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Elit ut aliquam purus sit amet luctus venenatis lectus. Sed cras ornare arcu dui vivamus arcu felis. Ut enim blandit volutpat maecenas. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Massa eget egestas purus viverra accumsan. Vitae et leo duis ut
          </div>
            </Grid>
            <Grid item xs={12} sm={3}>

              <div className={styles.content}>
                <Paper elevation={3} className={styles.box}>
                  <form className={styles.form} noValidate autoComplete="off">

                    <TextField className={styles.field} id="outlined-basic" label="Paper Name" variant="outlined" />
                    <TextField className={styles.field} id="outlined-basic" label="Release Date" variant="outlined" />
                    <TextField className={styles.field} id="outlined-basic" label="Data Set" variant="outlined" />
                    <TextField className={styles.field} id="outlined-basic" label="Acurracy Type" variant="outlined" />
                    <TextField className={styles.field} id="outlined-basic" label="CPU GFlops" variant="outlined" />
                    <TextField className={styles.field} id="outlined-basic" label="#Of Parameters" variant="outlined" />
                    <TextField className={styles.field} id="outlined-basic" label="Training Time" variant="outlined" />

                  </form>
                </Paper>
              </div>

            </Grid>
            <Grid item xs={12} sm={3}>
              <form className={styles.form} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              </form>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

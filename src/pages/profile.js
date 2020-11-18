import AppBar from '../components/AppBar'
import { Container } from '@material-ui/core';
import useStyles from '../styles/components/SubmitPaper.module';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import style from '../styles/Profile.module.css';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
export default function SubmitPaper() {


    return (
        <div>
            <AppBar />
            <Container>
                <Grid container spacing={10} >
                    <Grid item xs={12} sm={4}>
                        <div className={style.boxTitle}>
                            <div className={style.titleText}>
                                Profile 
                            </div>

                        </div>
                        <div >
                            <Button className={style.buttonText1} >Account</Button>
                        </div>
                        <div className={style.buttonText1}>
                            <Button>Submitions</Button>
                        </div>
                        <div className={style.buttonText1}>
                            <Button>Review</Button>
                        </div>
                        <div className={style.text}>
                            Update your profile to make the most of your experience using TLCDL.
                            Adding a photo and some data about yourself will help to get to know you better.
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <div className={style.root}>
                            <Paper elevation={3} className={style.paper}>
                                    <Avatar className={style.large } alt="Remy Sharp" src="" />
                                
                                <form noValidate autoComplete="off">
                                    <div>
                                        <TextField id="outlined-basic" label="Outlined" variant="outlined" /></div>
                                    <div>   <TextField id="outlined-basic" label="Outlined" variant="outlined" /></div>
                                    <div> <TextField id="outlined-basic" label="Outlined" variant="outlined" /></div>
                                    <div><TextField id="outlined-basic" label="Outlined" variant="outlined" /> </div>

                                </form>

                                <div className={style.boxText}>
                                    <Button>Update Profile</Button>
                                </div>
                            </Paper>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

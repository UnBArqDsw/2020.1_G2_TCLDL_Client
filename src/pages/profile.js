import AppBar from '../components/AppBar'
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import useStyles from '../styles/Profile.module.js';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
export default function SubmitPaper() {
    const style = useStyles();

    return (
        <div>
            <AppBar />
            <Container>
                <Grid container spacing={10} >
                    <Grid item xs={12} sm={6}>
                        <div className={style.boxTitle}>
                            <div className={style.titleText}>
                                Profile
                            </div>
                        </div>
                        <div >
                            <Button className={style.buttonText1} >Submitions</Button>
                        </div>
                        <div >
                            <Button className={style.buttonText1} >Review</Button>
                        </div>
                        <div className={style.text}>
                            Update your profile to make the most of your experience using TLCDL.
                            Adding a photo and some data about yourself will help to get to know you better.
                            <div style={{paddingTop: '10px'}}>
                            <Button size="small" variant="contained" color="primary" >Request Subadmin Privileges</Button>
                            </div>
                        </div>



                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className={style.root}>
                            <Paper elevation={3} className={style.paper}>
                                <div className={style.avatarFile} >
                                    <Avatar className={style.sizeLarge} alt="Remy Sharp" src="" />
                                </div>
                                <div >
                                    Collaborator
                        </div>
                                <form noValidate autoComplete="off">
                                    <div className={style.textFieldBox}>
                                        <TextField fullWidth id="outlined-basic" label="Username" variant="outlined" /></div>
                                    <div className={style.textFieldBox}>  <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" /></div>
                                    <div className={style.textFieldBox}> <TextField fullWidth id="outlined-basic" label="Location" variant="outlined" /></div>
                                    <div className={style.textFieldBox}><TextField fullWidth multiline
                                        rows={5} id="outlined-basic" label="Bio" variant="outlined" /> </div>

                                </form>

                                <div className={style.buttonText2}>
                                    <Button className={style.buttonText2} size="large" variant="contained" color="primary" >Update Profile</Button>
                                </div>
                            </Paper>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

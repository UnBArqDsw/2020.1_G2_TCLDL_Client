import AppBar from '../components/AppBar'
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import useStyles from '../styles/Profile.module.js';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import { BorderRight, NaturePeopleOutlined } from '@material-ui/icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as userAction } from '../store/reducer';

import Link from 'next/link'
function Profile({ user }) {
    const style = useStyles();
    const [editProfile, setEditProfile] = React.useState(true);
    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleEditProfile = () => (
        <>
            <div className={style.root}>
                <Paper elevation={3} className={style.paper}>

                    <div className={style.avatarFile} >
                        <Avatar className={style.sizeLarge} alt="Remy Sharp" src="" />
                    </div>
                    <div>
                        Admin
                    </div>
                    <form noValidate autoComplete="off">
                        <div className={style.textFieldBox}>
                            <TextField fullWidth id="outlined-basic" label="Name" variant="outlined" /></div>
                        <div className={style.textFieldBox}>  <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" /></div>
                        <div className={style.textFieldBox}> <TextField fullWidth id="outlined-basic" label="Location" variant="outlined" /></div>
                        <div className={style.textFieldBox}> <TextField fullWidth multiline
                            rows={5} id="outlined-basic" label="Bio" variant="outlined" /> </div>
                    </form>

                    <div className={style.buttonText2}>
                        <Button className={style.updateButton} size="large" variant="contained" onClick={submitProfile}>Update Profile</Button>
                    </div>
                </Paper>
            </div>
        </>
    )
    const viewProfile = () => (
        <>
            <div className={style.root}>
                <Paper elevation={3} className={style.paper2}>
                    <div className={style.avatarFile} >
                        <Avatar className={style.sizeLarge} alt="Remy Sharp" src="" />
                    </div>
                    <div className={style.buttonText1}>
                        Name
                    </div>
                    <div style={{ padding: '10px' }} >
                        {user ? user.name : 'Username'}
                    </div>
                    <div className={style.buttonText1}>
                        Email
                    </div>
                    <div style={{ padding: '10px' }}>
                      {user ? user.email : 'email@hotmail.com'}
                    </div>
                    <div className={style.buttonText1}>
                        Location
                    </div>
                    <div style={{ padding: '10px' }} >
                        Cambrige,Massachusette
                    </div>
                    <div className={style.buttonText1}>
                        Bio
                    </div>
                    <div style={{ padding: '10px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className={style.buttonText2}>
                        <Button className={style.editButton} size="large" variant="contained" onClick={onClickEditProfile} >Edit Profile</Button>
                    </div>
                </Paper>
            </div>
        </>
    )

    const submitProfile = () => {
        setEditProfile(true)
    }

    const onClickEditProfile = () => {
        setEditProfile(false)
    }

    return (
        <div>
            <Container>
                <Grid container spacing={10} >
                    <Grid item xs={12} sm={6}>
                        <div style={{ paddingLeft: '20px' }}>
                            <div style={{ borderRight: '1px solid #eaeaea' }}>
                                <div className={style.boxTitle}>
                                    <div className={style.titleText}>
                                        Profile
                            </div>
                                </div>
                                <div>
                                    <Link href="/submission-profile">
                                        <Button className={style.buttonText1} >Submitions</Button>
                                    </Link>
                                </div>
                                <div >
                                    <Link href="/review-profile">
                                        <Button className={style.buttonText1} >Review</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {editProfile ? viewProfile() : handleEditProfile()}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(userAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
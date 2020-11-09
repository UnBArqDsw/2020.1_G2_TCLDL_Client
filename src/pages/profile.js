import AppBar from '../components/AppBar'
import { Container } from '@material-ui/core';
import useStyles from '../styles/components/SubmitPaper.module';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import style from '../styles/Profile.module.css';

export default function SubmitPaper() {
    const styles = useStyles();
    return (
        <div>
            <AppBar />
            <Container>
                <Grid container spacing={0} >
                    <Grid item xs={12} sm={3}>
                        <div className={style.boxTitle}>
                            <div className={style.titleText}>
                                Profile
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        oi
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

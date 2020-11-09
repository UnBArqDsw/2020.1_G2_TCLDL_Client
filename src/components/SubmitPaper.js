import React from 'react';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import useStyles from '../styles/components/SubmitPaper.module';
import style from '../styles/Submit-paper.module.css';

export default function SubmitPaper({ text, fieldText1, fieldText2 }) {
    const styles = useStyles();

    return (
        <>
            <Grid container spacing={0} >
                <Grid item xs={12} sm={4}>
                    <div className={style.text}>
                        {text}
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className={styles.content}>
                        <form className={styles.form} noValidate autoComplete="off">
                            <TextField className={styles.field} id="outlined-basic" label={fieldText1} variant="outlined" />
                        </form>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div className={styles.content}>
                        <form className={styles.form} noValidate autoComplete="off">
                            <TextField className={styles.field} id="outlined-basic" label={fieldText2} variant="outlined" />
                        </form>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

import { fade, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    titleText: {
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '36px',
        lineHeight: '37px',
        letterSpacing: '0.23125px',
        color: '#121212',
    },

    gridBox: {
        padding: 0,
    },

    boxTitle: {
        display: 'flex',
        marginTop: '3rem',
        marginBottom: '3rem',
    },


    buttonText1: {
        fontFamily: 'Roboto Mono',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '37px',
        letterSpacing: '0.23125px',
        color: '#121212',
    },

    buttonText2: {
        /* Button */
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '16px',
        /* identical to box height, or 114% */

        letterSpacing: '1.25px',
        textTransform: 'uppercase',

        /* 03. On Primary / High Emphasis */

        color: '#FFFFFF',
    },

    boxText: {
        display: 'flex',
        marginTop: '1px',
        marginBottom: '1px',
    },

    root: {
        flexGrow: 1,
        marginTop: '70px',
    },

    text: {
        padding: '20px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '0.15px',
        color: '#121212',

    },

    paper: {
        padding: '20px',
        textAlign: 'center',
    },

    textFieldBox: {
        padding: '10px',
    },

    sizeLarge: {
        alignSelf: 'center',
        width: '90px',
        height: '90px',
    }

}));
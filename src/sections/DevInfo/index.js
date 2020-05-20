import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        background: '#4F4F4F',
        flexWrap: 'wrap',
        flexDirection: 'column',
        padding: '0.5em'
    },
    text: {
        color: '#fff',
        display: 'flex',
        '& a': {
            textDecoration: 'none',
            color: '#fff'
        }
    }
}))

function DevInfo() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.text}>
                <Typography variant="subtitle2">Developped by Kenedy Ribeiro</Typography>
            </div>
            <div className={classes.text}>
                <Typography variant="subtitle2">helplace2019@gmail.com</Typography>
            </div>
            <div className={classes.text}>
                <Typography variant="subtitle2">All right reserved <a href="http://www.helplace.com.br" target="_blank">www.helplace.com.br</a></Typography>
            </div>
        </div>
    )
}
export default DevInfo;
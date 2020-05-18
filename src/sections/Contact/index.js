import React, { useState } from 'react';
import { TextField, Paper, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1em',
    },
    container2:{
        display: 'flex',
        flexDirection: 'column',
    }
}))

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const classes = useStyles()
    function handleName(name) {
        setName(name)
    }
    function handleEmail(email) {
        setEmail(email)
    }
    function handleSubject(subject) {
        setSubject(subject)
    }
    function handleMessage(message) {
        setMessage(message)
    }
    return (

        <Paper elevation={3} className={classes.container}>
            <h3>Contato</h3>
            <div className={classes.container2}>
                <TextField
                    label="Nome"
                    value={name}
                    onChange={e => handleName(e.target.value)}
                    placeholder="Nome completo"
                    required
                />
                <TextField
                    label="Email"
                    value={email}
                    onChange={e => handleEmail(e.target.value)}
                    placeholder="Email válido"
                    type="email"
                    required
                />
                <TextField
                    label="Assunto"
                    value={subject}
                    onChange={e => handleSubject(e.target.value)}
                />
                <TextField
                    label="Mensagem"
                    value={message}
                    onChange={e => handleMessage(e.target.value)}
                    multiline
                    rowsMax={8}
                />
                <Button style={{ marginTop: '0.5em' }} variant="contained" color="secondary">Enviar</Button>
            </div>
        </Paper>

    );
}

export default Contact;
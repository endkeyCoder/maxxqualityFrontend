import React, { useState } from 'react';
import { TextField, Button, makeStyles } from '@material-ui/core';
import { StaticQuery, graphql } from 'gatsby';

import api from '../../config/axios';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1em',
    },
    container2: {
        display: 'flex',
        backgroundColor: 'transparent',
        padding: '1em',
        justifyContent: 'space-evenly',
        boxShadow: '2px 2px 6px #000',
        '& div > label': {
            color: '#FFECB5',
            textShadow: '1px 1px 2px #000'
        },
        '& div > div': {
            color: '#f1f1f1',
        },
        '& div > label.Mui-focused': {
            color: '#FFECB5',
        },
        '& div > div > input.MuiInputBase-input': {
            textShadow: '1px 1px 2px #000'
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    containerItem: {
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    title: {
        color: '#fff',
        textShadow: '1px 1px 2px #000',
        margin: '0 0 0.4em 0'
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
    async function sendMail(evt) {
        evt.preventDefault();
        //função para envio de email com chamada API
       
        try {
            const resSendMail = await api.post('/sendMail', {
                transporter: {
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    auth: {
                        user: process.env.GATSBY_EMAIL_TRANSPORTER,
                        pass: process.env.GATSBY_SENHA_TRANSPORTER
                    }
                },
                sender: {
                    from: `${name} <${email}>`,
                    to: process.env.GATSBY_EMAIL_TRANSPORTER,
                    subject: `Maxxquality Site: ${subject}`,
                    text: `Mensagem: ${message}
Email do remetente: ${email}`,
                }
            }) 
            console.log(resSendMail.data)
            alert(resSendMail.data.message)
        } catch (error) {
            console.log('print de error em sendMail => ', error)
            alert('Problema com o email')
        }
    }
    return (
        <StaticQuery
            query={graphql`
            query {
                bgContact: file(relativePath: { eq: "contactImage.jpg" }) {
                  childImageSharp {
                    fluid(maxWidth: 1000) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            `}
            render={data => (
                <div id="contact" className={classes.container} style={{ backgroundImage: `url(${data.bgContact.childImageSharp.fluid.src})` }}>
                    <h3 className={classes.title}>Contato</h3>
                    <form onSubmit={sendMail} className={classes.container2}>
                        <div className={classes.containerItem}>
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
                                required
                            />
                        </div>
                        <div className={classes.containerItem}>
                            <TextField
                                label="Mensagem"
                                value={message}
                                onChange={e => handleMessage(e.target.value)}
                                multiline
                                rowsMax={8}
                                required
                                inputProps={{
                                    height: "10em"
                                }}
                            />
                            <Button type="submit" style={{ marginTop: '0.5em' }} variant="contained" color="secondary">Enviar</Button>
                        </div>
                    </form>
                </div>
            )}
        />
    );
}

export default Contact;
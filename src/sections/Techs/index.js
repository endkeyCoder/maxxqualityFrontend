import React from 'react';
import { makeStyles, Card } from '@material-ui/core';
import { graphql, StaticQuery } from 'gatsby';

const useStyles = makeStyles(theme => ({
    containerCards: {
        display: 'flex',
        overflowY: 'scroll',
        padding: '0 1em 1em 1em',
        flexWrap: 'wrap',
        maxHeight: '60vh',
        alignItems: 'baseline',
        justifyContent: 'space-between',
    },
    card: {
        minHeight: '8em',
        width: '100%',
        marginBottom: '0.5em',
        [theme.breakpoints.up('md')]: {
            maxWidth: '20em',
        },
        background: '#f3f3f3'
    },
    headerCard: {
        borderRadius: '5px 5px 0 0',
        background: 'linear-gradient(to right, #3547D1, #202B80)',
        color: '#fff',
        padding: '0.4em',
        textShadow: '1px 1px 2px #000',
        display: 'flex',
        alignItems: 'center',
        minHeight: '3em'
    },
    bodyCard: {
        padding: '0.4em',
        color: '#fff',
        textShadow: '1px 1px 2px #000',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1em'
    }
}))

function Techs() {
    const classes = useStyles();
    const bgTech = graphql`
    query {
        bgTech: file(relativePath: { eq: "techBackground.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `;

    return (
        <StaticQuery
            query={bgTech}
            render={data => {
                return (
                    <div className={classes.container}>
                        <h3>Techs</h3>
                        <div className={classes.containerCards}>
                            <Card className={classes.card} elevation={3}>
                                <div className={classes.headerCard}>
                                    <h4 style={{ margin: 0 }}>Title</h4>
                                </div>
                                <div className={classes.bodyCard}>
                                    <p style={{ margin: 0 }}>
                                        Description
                            </p>
                                </div>
                            </Card>
                            <Card className={classes.card} elevation={3}>
                                <div className={classes.headerCard}>
                                    <h4 style={{ margin: 0 }}>Title</h4>
                                </div>
                                <div className={classes.bodyCard}>
                                    <p style={{ margin: 0 }}>
                                        Description
                            </p>
                                </div>
                            </Card>
                            <Card className={classes.card} elevation={3}>
                                <div className={classes.headerCard}>
                                    <h4 style={{ margin: 0 }}>Title</h4>
                                </div>
                                <div className={classes.bodyCard}>
                                    <p style={{ margin: 0 }}>
                                        Description
                            </p>
                                </div>
                            </Card>
                            <Card className={classes.card} elevation={3}>
                                <div className={classes.headerCard}>
                                    <h4 style={{ margin: 0 }}>Title</h4>
                                </div>
                                <div className={classes.bodyCard}>
                                    <p style={{ margin: 0 }}>
                                        Description
                            </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                )
            }}
        />
    );
}

export default Techs;
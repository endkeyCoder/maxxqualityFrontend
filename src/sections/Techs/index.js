import React from 'react';
import { makeStyles, Card, Paper } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';

const useStyles = makeStyles(theme => ({
    containerCards: {
        display: 'flex',
        overflowY: 'scroll',
        padding: '1em',
        flexWrap: 'wrap',
        maxHeight: '60vh',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        backgroundColor: '#0d202f'
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
        background: 'linear-gradient(to right, #FFB736, #B37400)',
        color: '#fff',
        padding: '0.4em',
        textShadow: '1px 1px 2px #000',
        display: 'flex',
        alignItems: 'center',
        minHeight: '3em'
    },
    bodyCard: {
        padding: '0.4em',
        color: '#000',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1em'
    },
    title: {
        color: '#fff',
        textShadow: '1px 1px 2px #000',
    }
}))

function Techs() {
    const classes = useStyles();
    const techsQuery = useStaticQuery(graphql`
    {
        file(relativePath: {eq: "techBackground.jpg"}) {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                description
                slug
                title
              }
            }
          }
        }
      }
    `)

    const showTechs = () => {
        const { edges } = techsQuery.allMarkdownRemark;

        return edges.map((value) => {
            
            const { frontmatter, id } = value.node;
            const { title, description } = frontmatter;

            return (
                <Card key={id} className={classes.card} elevation={3}>
                    <div className={classes.headerCard}>
                        <h4 style={{ margin: 0 }}>{title}</h4>
                    </div>
                    <div className={classes.bodyCard}>
                        <p style={{ margin: 0 }}>
                            {description}
                        </p>
                    </div>
                </Card>
            )
        })
    }

    return (
        <div id="techs" className={classes.container} style={{ backgroundImage: `url(${techsQuery.file.childImageSharp.fluid.src})` }}>
            <h3 className={classes.title}>Tecnologias</h3>
            <Paper className={classes.containerCards} elevation={3}>
                {
                    showTechs()
                }
            </Paper>
        </div>
    );
}

export default Techs;
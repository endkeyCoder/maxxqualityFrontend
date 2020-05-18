import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '1em',
        height: '20em',
        display: 'flex',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        textShadow: '1px 1px 2px #000'
    }
}))

function Apresentation() {
    const classes = useStyles()
    return (
        <StaticQuery
            query={graphql`
            query {
                apresentationImage: file(relativePath: { eq: "default.jpg" }) {
                  childImageSharp {
                    fluid(maxWidth: 300) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            `}
            render={data => {

                return (
                    <div className={classes.container} style={{ backgroundImage: `url(${data.apresentationImage.childImageSharp.fluid.src})` }}>
                        <h5 className={classes.text}>Some description</h5>
                    </div>
                )
            }}
        />
    );
}

export default Apresentation;
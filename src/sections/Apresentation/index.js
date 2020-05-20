import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '1em',
        height: '20em',
        display: 'flex',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
    },
    text: {
        color: '#fff',
        textShadow: '1px 1px 2px #000'
    }
}))

function Apresentation() {
    const classes = useStyles();

    return (
        <StaticQuery
            query={graphql`
            query {
                apresentationImage: file(relativePath: { eq: "bgApresentation.jpg" }) {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                logoApresentation: file(relativePath: { eq: "logo.PNG" }){
                    childImageSharp {
                        fixed(width: 400) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
              }
            `}
            render={data => {

                return (
                    <div id="apresentation" className={classes.container} style={{ backgroundImage: `url(${data.apresentationImage.childImageSharp.fluid.src})` }}>
                        <Img fixed={data.logoApresentation.childImageSharp.fixed} />
                    </div>
                )
            }}
        />
    );
}
export default Apresentation;
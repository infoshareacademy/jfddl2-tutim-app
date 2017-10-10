import React from 'react'

import {FacebookButton, FacebookCount} from "react-social";

class SocialShare extends React.Component {

    render() {

        let url = "https://github.com";

        return (

            <FacebookButton url={url}>
                <FacebookCount url={url}/>
                {" Share " + url}
            </FacebookButton>
        );
    }
}


export default SocialShare


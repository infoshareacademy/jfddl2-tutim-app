import React from 'react'

import {FacebookButton, FacebookCount} from "react-social";

class SocialShare extends React.Component {

    render() {

        let url = "https://www.facebook.com/";

        return (

            <FacebookButton url={url}>
                <FacebookCount url={url}/>
                Share
            </FacebookButton>
        );
    }
}


export default SocialShare


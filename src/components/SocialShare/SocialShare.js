import React from 'react'

import FacebookProvider , { Share }from "react-facebook";

class SocialShare extends React.Component {

    render() {


        return (

            <FacebookProvider appId="1">
                <Share href="http://www.facebook.com">
                    <button type="button">
                        Udostępnij
                    </button>
                </Share>
            </FacebookProvider>
        );
    }
}


export default SocialShare


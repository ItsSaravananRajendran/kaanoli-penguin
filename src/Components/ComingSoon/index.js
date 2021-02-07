import React from "react";
import Style from './comingSoon.css';

import TextInputWithButton from "../TextInputWithButton";

import VideoGrapher from '../../Icons/videoGraphers'




const ComingSoon = props => (<div className={Style.container}>
    <div className={Style.rightContainer}>
        <VideoGrapher />
    </div>
    <div className={Style.leftContainer}>
        <div className={Style.comingSoonText}>We're Coming Soon!</div>
        <div className={Style.notifyMeText}>Notify me when it's ready</div>
        <TextInputWithButton placeholder="xyz@email.com" buttonText="SEND" />
    </div>
</div>
)

export default ComingSoon;
import React from "react";
import Style from './comingSoon.css';

import TextInputWithButton from "../TextInputWithButton";
import VideoGrapher from '../../Icons/videoGraphers'
import LogoWithName from '../../Icons/LogoWithName';



const ComingSoon = props => (<div className={Style.container}>
    <LogoWithName className={Style.icon} />
    <div className={Style.leftContainer}>
        <VideoGrapher />
    </div>
    <div className={Style.rightContainer}>
        <div className={Style.comingSoonText}>We're Coming Soon!</div>
        <div className={Style.notifyMeText}>Notify me when it's ready</div>
        <TextInputWithButton placeholder="xyz@email.com" buttonText="SEND" />
    </div>
</div>
)

export default ComingSoon;
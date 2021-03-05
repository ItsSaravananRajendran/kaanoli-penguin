import React from 'react';

import LogoWithName from '../../Icons/LogoWithName';
import Style from './header.css';

const Header = props => {
    return <div className={Style.headerContainer}>
        <LogoWithName className={Style.icon} />
        <div className={Style.rightSide}>What we do?</div>
    </div>
}

export default Header;
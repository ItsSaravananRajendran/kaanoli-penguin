import React from 'react';

import LogoWithName from '../../Icons/LogoWithName';
import Style from './header.css';

const Header = props => {
    return <div className={Style.headerContainer}>
        <LogoWithName className={Style.icon} />
    </div>
}

export default Header;
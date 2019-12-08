import React from 'react';

import Logo from '../logo/logo.component';
import './header.styles.scss';

const Header = () => (
        <div className='header'>
            <Logo />
            <div className='fl w-two-thirds pa2 b f1 lh-title'>MFTP</div>
        </div>
);

export default Header;
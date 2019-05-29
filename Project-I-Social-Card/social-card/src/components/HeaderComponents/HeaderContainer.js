import React from "react";
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';


const Header = () => {
    return(
    <div className = 'body'>
        <ImageThumbnail />
        <div className = 'TitleContent'>
            <HeaderTitle />
            <HeaderContent />
        </div>
    </div>
    );
};

export default Header;
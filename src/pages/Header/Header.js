import React from 'react';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import Logo from './logo.png'

import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutLinedIcon from '@material-ui/icons/PersonOutline';



function Header() {
    return (
        <div className="header">
          <div className="header__icons">
            <div className="header__icon header__icon--active">
                <HomeIcon/>
                <p>Home</p>
            </div>
            <div className="header__icon">
                <VideoLibraryIcon />
                 <p>Collection</p>
            </div>
            
            <div className="header__left">
                <SearchIcon />
                <input 
                    placeholder="Search for Match, Player "
                    type="text"
                />
            </div>
            
            
          </div>  
          <img src={Logo}
           alt="blank"

          />
        </div>
    )
}

export default Header

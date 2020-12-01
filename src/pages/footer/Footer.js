import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin, FaGithub
} from "react-icons/fa";





function Footer() {
  return (
    <div className='footer_container'>
      <div className='footer_links'>
        <div className='footer_link_wrapper'>
          <div className='footer_link_items'>
            <h2>Quicklinks </h2>
            <Link to='/sign_up'>News</Link>
            <Link to='/'>Videos</Link>
            <Link to='/'>Venues</Link>
            <Link to='/'>Stats</Link>
            <Link to='/'>Archive</Link>
          </div>
          <div className='footer_link_items'>
            <h2>Teams</h2>
            <Link to='/'>Chennai Super Kings</Link>
            <Link to='/'>Delhi Capitals</Link>
            <Link to='/'>Kings XI Punjab</Link>
            <Link to='/'>Kolkata Knight Riders</Link>
            <Link to='/'>Mumbai Indians</Link>
            <Link to='/'>Rajasthan Royals</Link>
            <Link to='/'>Sunrisers Hyderabad</Link>
            <Link to='/'>Royal Challengers Bangalore</Link>
          </div>
          <div className='footer_link_items'>
            <h2>About Us</h2>
            <Link to='/'>About Us</Link>
            <Link to='/'>Anti Corruption Policy</Link>
            <Link to='/'>Anti Discrimination Policy</Link>
            <Link to='/'>Anti Doping Policy</Link>
            <Link to='/'>Clothing and Equipment Regulations</Link>
            <Link to='/'>TUE Applicatio Form</Link>
          </div>
        </div>
        <div className='footer_link_wrapper'>
          <div className='footer_link_items'>
            <h2>Title</h2>
            <Link to='/'>IPL Code Of Conduct For Match Official</Link>
            <Link to='/'>Brand And Protection Guidelines</Link>
            <Link to='/'>Governing Concil</Link>
            <Link to='/'>Match Playing Condition</Link>
          </div>
          <div className='footer_link_items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>Sponsorship</Link>
            
          </div>
        </div>
      </div>
      <section className='social_media'>
        <div className='social_media_wrap'>
         
          <small className='website_rights'>© Copyright IPL, AKIB 2020. All Rights Reserved.
</small>
          <div className='social_icons'>
            <Link
              className='social_icon_link'
              to={'//www.github.com/Akibsheikh48'}
              target='_blank'
              aria_label='Facebook'
            >
              <FaGithub />
            </Link>
            <Link
              className='social_icon_link'
              to={'//www.instagram.com/akibsheikh1/?igshid=1n35acwkvzx00'}
              target='_blank'
              aria_label='Instagram'
            >
              <FaInstagram/>
            </Link>
            <Link
              className='social_icon_link'
              to={
                '//www.youtube.com/channel/UC3rtUUwsd09W6yZ6dkR8Wmw?view_as=subscriber'
              }
              target='_blank'
              aria_label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social_icon_link'
              to={'//WWW.twitter.com/akibsheikh48?s=03'}
              target='_blank'
              aria_label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social_icon_link'
              to='/'
              target='_blank'
              aria_label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

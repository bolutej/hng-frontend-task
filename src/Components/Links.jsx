import React from 'react'
import Image from '../Image/bolu.png';
import Ifg from '../Image/ifg.png';
import Zuri from '../Image/Zuri.png';
import {BsSlack} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const Links = () => {
    const links = [
        {
          id: 'twitter',
          title: 'Twitter Link',
          link: 'https://twitter.com/BoluTejumola'
        },
        {
          id: 'btn__zuri',
          title: 'Zuri Team',
          link: 'http://books.zuri.team',
        },
        {
          id: 'books',
          title: 'Zuri Books',
          link: 'https://training.zuri.team/',
        },
        {
          id: 'book__python',
          title: 'Python Books',
          link: 'https://books.zuri.team/python-for-beginners?ref_id=Bolu',
        },
        {
          id: 'pitch',
          title: 'Background Check for Coders',
          link: 'https://background.zuri.team',
        },
        {
          id: 'book__design',
          title: 'Design Books',
          link: 'https://books.zuri.team/design-rules',
        },
      ];
  return (
    <div>
      <div className="profile-section">
        <img id="profile__img" src={Image} alt="" />
        <h3 id="slack">Boluwatife Tejumola</h3>
      </div>
      <div className="main-links">
        {links.map(({ id, title, link }) => {
          return (
            <button key={id} className="each">
              <a href={link} target="_blank" rel="noreferrer">{title}</a>
            </button>
          );
        })}
        <div className="socials">
          <BsSlack className="icons" />
          <a href="https://github.com/bolutej" target="_blank" rel="noreferrer"><BsGithub className="icons" /></a>
        </div>
      </div>
      <div className="footer">
        <img src={Ifg} alt="" className='image'/>
        <p>HNG Internship 9 Frontend Task</p>
        <img src={Zuri} alt="" className='image'/>
      </div>
    </div>
  );
}

export default Links
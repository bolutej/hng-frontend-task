import React from 'react'
import Image from '../Image/bolu.png';
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
          link: 'https://books.zuri.team',
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
        <img id="profile__img"src={Image} alt="" />
        <h3 id="slack">Boluwatife Tejumola</h3>
      </div>
      <div className="main-links">
        {links.map(({ id, title, link }) => {
          return <button key={id} className="each"><a href={link}>{title}</a></button>;
        })}
      </div>
    </div>
  )
}

export default Links
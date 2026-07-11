import Link from 'next/link'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'

const socials = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/',
  },
  {
    icon: <FaFacebook />,
    path: 'https://facebook.com/',
  },
  {
    icon: <FaInstagram />,
    path: 'https://instagram.com/',
  },
  {
    icon: <FaLinkedinIn />,
    path: 'https://linkedin.com/in/',
  },
  {
    icon: <FaTwitter />,
    path: 'https://twitter.com/',
  },
]

const Social = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socials.map((item, idx) => (
        <Link
          key={idx}
          href={item.path}
          target='_blank'
          rel='noopener noreferrer'
          className={iconStyle}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social

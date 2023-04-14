import styles from '../style';
import { fullLogo } from '../assets';
import { footerLinks, socialMedia } from '../constants';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img src={fullLogo} alt="hoobank" className="w-[200px] object-contain" />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px] md:w-1/3">
            <h4 className="font-markazi font-medium text-[26px] leading-[27px] text-black">{footerLink.title}</h4>
            <ul className="link-none mt-4">
              {footerLink.title === 'QUICK LINKS' &&
                footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-gray-800 hover:text-secondary cursor-pointer ${
                      index !== footerLink.links.length - 1 ? 'mb-3' : 'mb-0'
                    }`}
                  >
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
              {footerLink.title === 'OPENING TIMES' &&
                footerLink.links.map((link, index) => (
                  <li
                    key={link.days}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-gray-800 cursor-pointer ${
                      index !== footerLink.links.length - 1 ? 'mb-3' : 'mb-0'
                    }`}
                  >
                    <h4>
                      <strong>{link.days}:</strong> {link.time}
                    </h4>
                  </li>
                ))}
              {footerLink.title === 'CONTACT US' &&
                footerLink.links.map((link, index) => (
                  <li
                    key={link.title}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-gray-800 hover:text-secondary cursor-pointer ${
                      index !== footerLink.links.length - 1 ? 'mb-3' : 'mb-0'
                    }`}
                  >
                    <a href={link.link}>
                      <h4>{link.title}:</h4>
                      <p>{link.info}</p>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-black">
        Copyright &copy; 2021 Raven and Macaw HMO. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <div key={social.id}>
            <img
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'} footer-link`}
            />
          </div>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;

import {
  facebook,
  instagram,
  linkedin,
  twitter,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  people01,
  people02,
  people03,
  Corporate,
  PrivatePlan,
  OtherPlans,
} from '../assets';

export const feedback = [
  {
    id: 'feedback-1',
    content:
      'Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.',
    name: 'Herman Jensen',
    title: 'Founder & Leader',
    img: people01,
  },
  {
    id: 'feedback-2',
    content:
      'Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.',
    name: 'Steve Mark',
    title: 'Founder & Leader',
    img: people02,
  },
  {
    id: 'feedback-3',
    content:
      'Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.',
    name: 'Kenn Gallagher',
    title: 'Founder & Leader',
    img: people03,
  },
];

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
    link: '/',
  },
  {
    id: 'about',
    title: 'About',
    link: '/about',
  },
  {
    id: 'plans',
    title: 'Our Plans',
    link: '/plans',
  },
  {
    id: 'contact',
    title: 'Contact Us',
    link: '/contact-us',
  },
];

export const healthPlans = [
  {
    id: 'corporate',
    title: 'Corporate Health Plan',
    text: 'Healthy employees are vital to business success, that’s why we’re here to support businesses with the everyday health of their employees.',
    image: Corporate,
    price: '250,000',
  },
  {
    id: 'private',
    title: 'Private Health Plan',
    text: 'We give you and your family access to treatments and services when you need them. Keeping on top of your health can be easier than you think.',
    image: PrivatePlan,
    price: '150,000',
  },
  {
    id: 'other',
    title: 'Other Health Plans',
    text: 'In keeping with our innovative value, we provide other health care solutions aimed at fulfilling the need of all our enrollees, at all levels beyond their expectation.',
    image: OtherPlans,
    price: '100,000',
  },
];

export const clients = [
  {
    id: 'client-1',
    logo: logo1,
  },
  {
    id: 'client-2',
    logo: logo2,
  },
  {
    id: 'client-3',
    logo: logo3,
  },
  {
    id: 'client-4',
    logo: logo4,
  },
  {
    id: 'client-5',
    logo: logo5,
  },
  {
    id: 'client-6',
    logo: logo6,
  },
  {
    id: 'client-7',
    logo: logo7,
  },
  {
    id: 'client-8',
    logo: logo8,
  },
];

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: instagram,
    link: 'https://www.instagram.com/',
  },
  {
    id: 'social-media-2',
    icon: facebook,
    link: 'https://www.facebook.com/',
  },
  {
    id: 'social-media-3',
    icon: twitter,
    link: 'https://www.twitter.com/',
  },
  {
    id: 'social-media-4',
    icon: linkedin,
    link: 'https://www.linkedin.com/',
  },
];

export const footerLinks = [
  {
    title: 'QUICK LINKS',
    links: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'About',
        link: '/about',
      },
      {
        name: 'Our Plans',
        link: '/plans',
      },
      {
        name: 'Contact Us',
        link: '/contact-us',
      },
    ],
  },
  {
    title: 'OPENING TIMES',
    links: [
      {
        days: 'Mon - Wed',
        time: '10:30AM - 12:00AM',
      },
      {
        days: 'Fri',
        time: '12:00PM - 1:00AM',
      },
      {
        days: 'Sat - Sun',
        time: '10:30AM - 12:00AM',
      },
    ],
  },
  {
    title: 'CONTACT US',
    links: [
      {
        title: 'Abuja',
        info: '21 Abeokuta Street, Area 8, Garki, FCT, Nigeria',
        link: 'https://goo.gl/maps/VoXQCbmNWjWU4uHa9',
      },
      {
        title: 'Tel',
        info: '+234 809 666 1116',
        link: 'tel:+2348096661116',
      },
      {
        title: 'Email',
        info: 'Hello@Ravenandmacaw.com',
        link: 'mailto:Hello@Ravenandmacaw.com',
      },
    ],
  },
];

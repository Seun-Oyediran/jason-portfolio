export function calcTime(offset = 1) {
  const d = new Date();

  const utc = d.getTime() + d.getTimezoneOffset() * 60000;

  const nd = new Date(utc + 3600000 * offset);

  const hours = `0${nd.getHours()}`.slice(-2);
  const minutes = `0${nd.getMinutes()}`.slice(-2);

  return `${hours}:${minutes} WAT`;
}

export const projects = [
  { id: 1, name: 'pap', image: '/img/pap_1.png' },
  { id: 2, name: 'rptrd', image: '/img/project_2.png' },
  { id: 3, name: 'tenaciti', image: '/img/project_3.png' },
];

export const workshop = [
  { id: 1, name: 'apple', image: '/img/workshop_1.png' },
  { id: 2, name: 'windows', image: '/img/workshop_2.png' },
  { id: 3, name: 'rptrd', image: '/img/workshop_3.png' },
  { id: 4, name: 'rptrd', image: '/img/workshop_4.png' },
  { id: 5, name: 'five', image: '/img/workshop_5.png' },
];

export const projectsObject = {
  pap: {
    bg: '#080808',
    firstLetter: 'P',
    title: 'AP Admin',
    color: '#FFFFFF',
    secondaryColor: '#8D8D8D',
    titleColor: '#ffffff',
    images: [
      '/img/pap_1.png',
      '/img/pap_2.png',
      '/img/pap_3.png',
      '/img/pap_4.png',
      '/img/pap_5.png',
      '/img/pap_6.png',
    ],
    role: 'Interface designer',
    developedBy: 'Tobiloba',
    client: 'PAP Inc. (UK)',
    date: 'October ‘22',
    link: '',
    mobileTitle: 'PAP Admin',
    mobileBtnBorder: '#FFFFFF',
    mobileBtnText: '#FFFFFF',
    mobileBtnBg: 'transparent',
    footerBorder: '',
  },

  rptrd: {
    bg: '#F5F5F5',
    firstLetter: 'R',
    title: 'PTRD',
    color: '#1B1C1E',
    secondaryColor: '#8D8D8D',
    titleColor: '#1E1E1E',
    images: [
      '/img/rptrd_1.png',
      '/img/rptrd_2.png',
      '/img/rptrd_3.png',
      '/img/rptrd_4.png',
      '/img/rptrd_5.png',
      '/img/rptrd_6.png',
      '/img/rptrd_7.png',
    ],
    role: 'Interface designer',
    developedBy: 'Wale Shopeyin',
    client: 'RPTRD (UK)',
    date: 'October ‘22',
    link: 'https://www.rptrdsols.io/',
    mobileTitle: 'RPTRD',
    mobileBtnBorder: '#000000',
    mobileBtnText: '#FFFFFF',
    mobileBtnBg: '#000000',
    footerBorder: 'rgba(27, 28, 30, 0.5)',
  },

  tenaciti: {
    bg: '#3366CC',
    firstLetter: 'T',
    title: 'ENACITI',
    color: '#FFFFFF',
    secondaryColor: '#8D8D8D',
    titleColor: '#f5f5f5',
    images: [
      '/img/tenaciti_1.png',
      '/img/tenaciti_2.png',
      '/img/tenaciti_3.png',
      '/img/tenaciti_4.png',
      '/img/tenaciti_5.png',
      '/img/tenaciti_6.png',
      '/img/tenaciti_7.png',
    ],
    role: 'Interface designer',
    developedBy: 'Waves Tech',
    client: 'Waves Tech (US)',
    date: 'October ‘22',
    link: '',
    mobileTitle: 'TENACITI',
    mobileBtnBorder: '#FFFFFF',
    mobileBtnText: '#1B1C1E',
    mobileBtnBg: '#ffffff',
    footerBorder: '',
  },
};

export const workshopObject = {
  apple: {
    image: '/img/big_workshop_1.png',
    why: 'Working on a personal project with a couple designer and dev friends of mine that includes all the best modals ever created. This being the very first one to be used on the site. fin.',
    footerImg: '',
  },
  windows: {
    image: '/img/big_workshop_2.png',
    why: 'Just wanted to. Still on my modals project. The fully interactive modal is in the works. Fin',
    footerImg: '',
  },
  rptrd: {
    image: '/img/big_workshop_3.png',
    why: 'Working on a personal project with a couple designer and dev friends of mine that includes all the best modals ever created. This being the very first one to be used on the site. fin.',
    footerImg: '/img/rptrd_footer.svg',
  },
};

export const aboutMovies = [
  { id: 1, image: '/img/movies_1.svg', name: 'Blade Runner 2049' },
  { id: 2, image: '/img/movies_2.svg', name: 'Far Cry' },
  { id: 3, image: '/img/movies_3.png', name: 'Blade Runner 2049' },
];

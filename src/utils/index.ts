export function calcTime(offset = 1) {
  const d = new Date();

  const utc = d.getTime() + d.getTimezoneOffset() * 60000;

  const nd = new Date(utc + 3600000 * offset);

  const hours = `0${nd.getHours()}`.slice(-2);
  const minutes = `0${nd.getMinutes()}`.slice(-2);

  return `${hours}:${minutes} WAT`;
}

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
  },
};

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      about: 'ABOUT',
      home: 'HOME',
      publications: 'PUBLICATIONS',
      experience: 'PROJECTS',
      team: 'TEAM',
      contact: 'CONTACT',
      all: 'All',
      teachers: 'Teachers',
      students: 'Students',
      address: 'Address',
      contactUs: 'Contact Us',
      emailUs: 'Email Us',
      email: 'Email',
      send: 'Send',
      school:
        'Chengdu University of Technology, Institute of Sedimentary Geology',
      prev: 'Previous page',
      next: 'Next page',
      phd: 'PhD',
      master: 'Master',
      undergraduate: 'Undergraduates',
      principal: 'Principal Investigator',
      professor: 'Co-PI',
      ma: 'Professor',
      maNav: '[Personal Website ]',
      message: 'Message',
      style: 'Team Style',
    },
  },
  cn: {
    translation: {
      'Welcome to React': 'Bienvenue à React et react-i18next',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

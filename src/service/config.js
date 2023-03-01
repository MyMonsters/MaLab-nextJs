const devBaseURL = 'http://www.machao.group';
const proBaseURL = 'http://www.machao.group';
export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;
export const TIME_OUT = 5000;

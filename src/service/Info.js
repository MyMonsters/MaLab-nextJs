import request from './request';
export const getIntroduction = () => {
  request.get('/deeptime/getIntroduction');
};

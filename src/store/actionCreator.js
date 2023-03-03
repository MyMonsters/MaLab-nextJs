import { createAction, createReducer } from '@reduxjs/toolkit';
const getIntroductionAction = createAction('getIntroduction');
const getMembersAction = createAction('getMembers');
const getProjectsAction = createAction('getProjects');
const getNewsAction = createAction('getNews');
const getPublicationsAction = createAction('getPublications');
const getPointsAction = createAction('counter/getPoints');

//写法二
const Reducer = createReducer(
  {
    introduction: [],
    members: [],
    projects: [],
    news: [],
    publications: [],
    points: [],
  },
  {
    [getIntroduction]: (state, action) => {
      state.introduction = action.payload;
    },
    [getMembers]: (state, action) => {
      state.members = action.payload;
    },
  }
);

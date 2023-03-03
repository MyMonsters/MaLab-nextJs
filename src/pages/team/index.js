import { useGetMembers1Query } from '@/lib/MaLabApi';
import React, { memo } from 'react';
import { TeamWrapper } from './style';

const Team = memo(function Team() {
  const { data: TeachersData, err1, TeachersisLoading } = useGetMembers1Query();
  const { data: PhdData, err2, PhdisLoading } = useGetMembers1Query();
  const { data: MastersData, err3, MastersisLoading } = useGetMembers1Query();
  const {
    data: UndergraduatesData,
    err4,
    UndergraduaresisLoading,
  } = useGetMembers1Query();
  return <TeamWrapper>Team</TeamWrapper>;
});
export default Team;

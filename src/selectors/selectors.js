import { createSelector } from 'reselect';

const streamsData = (state) => state.streams.data;
export const streamsSelector = createSelector([streamsData]);

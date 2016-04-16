import { createSelector } from 'reselect';

export const starredItems = (state) => state.streams.starredItems;
export const nextPageUrl = (state) => state.streams.nextPageUrl;
export const prevPageUrl = (state) => state.streams.prevPageUrl;

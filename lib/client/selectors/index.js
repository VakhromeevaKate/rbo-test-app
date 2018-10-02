import { createSelector } from 'reselect';

export const getAutos = state => state.autos;
export const autosSelector = createSelector(
getAutos,
autos => Object.values(autos));
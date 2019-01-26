import { createSelector } from 'reselect';


export function isAuthenticated(state) {
  return getAuth(state).authenticated;
}


//=====================================
//  MEMOIZED SELECTORS
//-------------------------------------

export const getAuth = createSelector(
  state => state.auth,
  auth => auth.toJS()
);

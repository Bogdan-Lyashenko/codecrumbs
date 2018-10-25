import { INIT_AUTH, SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from './action-types';
import { authReducer } from './reducer';


describe('Auth reducer', () => {
  describe('INIT_AUTH', () => {
    it('should set AuthState.authenticated to false when payload is null', () => {
      let state = authReducer(undefined, {
        type: INIT_AUTH,
        payload: null
      });

      expect(state.authenticated).toBe(false);
      expect(state.id).toBe(null);
    });

    it('should set AuthState.authenticated to true when payload provided', () => {
      let state = authReducer(undefined, {
        type: INIT_AUTH,
        payload: {uid: '123'}
      });

      expect(state.authenticated).toBe(true);
      expect(state.id).toBe('123');
    });
  });


  describe('SIGN_IN_SUCCESS', () => {
    it('should set AuthState.authenticated to true', () => {
      let state = authReducer(undefined, {
        type: SIGN_IN_SUCCESS,
        payload: {uid: '123'}
      });

      expect(state.authenticated).toBe(true);
      expect(state.id).toBe('123');
    });
  });


  describe('SIGN_OUT_SUCCESS', () => {
    it('should set AuthState.authenticated to false', () => {
      let state = authReducer(undefined, {
        type: SIGN_OUT_SUCCESS
      });

      expect(state.authenticated).toBe(false);
      expect(state.id).toBe(null);
    });
  });
});

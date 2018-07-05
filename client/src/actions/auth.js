import { firebase, googleAutProvider } from '../firebase/firebase';

export const startLogin = () => {
	return () => {
		return firebase.auth().signInWithPopup(googleAutProvider);
	};
};

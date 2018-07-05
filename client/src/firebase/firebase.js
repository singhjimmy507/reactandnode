import * as firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyAfiaoGbDyar3Yxnop_Mmj2tWipWwiM43g',
	authDomain: 'reactandnode-bb685.firebaseapp.com',
	databaseURL: 'https://reactandnode-bb685.firebaseio.com',
	projectId: 'reactandnode-bb685',
	storageBucket: 'reactandnode-bb685.appspot.com',
	messagingSenderId: '749724493891'
};

firebase.initializeApp(config);

const database = firebase.database();

//add to the database
// database
// 	.ref()
// 	.set({
// 		name: 'Hello World',
// 		email: 'hello@world.com',
// 		location: {
// 			city: 'Waterloo',
// 			country: 'Canada'
// 		}
// 	})
// 	.then(() => {
// 		console.log('Database updated');
// 	})
// 	.catch(e => {
// 		console.log('Database operation failed', e);
// 	});

//reading from the database
database
	.ref('email')
	.once('value')
	.then(snapshot => {
		const val = snapshot.val();
		console.log(val);
	})
	.catch(e => {
		console.log('Error reading data', e);
	});
//
// //constantly updating values - feed screen
// database.ref().on('value', snapshot => {
// 	console.log(snaphot.val());
// });

// //updating the database - code works
// database
// 	.ref()
// 	.update({
// 		city: 'Toronto',
// 		country: 'Canada'
// 	})
// 	.then(() => {
// 		console.log('Database updated');
// 	})
// 	.catch(e => {
// 		console.log('Database operation failed', e);
// 	});

// //remove from the database - code works
// database
// 	.ref('city')
// 	.remove()
// 	.then(() => {
// 		console.log('Database updated');
// 	})
// 	.catch(e => {
// 		console.log('Database operation failed', e);
// 	});

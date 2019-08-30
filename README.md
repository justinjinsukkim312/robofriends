To run this:
1.`npm i`
2. `npm start`

This application was created with React. We are consuming the JSONPlaceholder API and using the ROBOHASH Image Generator API.

Using Redux we created a system where the actions are being triggered and go through middleware.

If its a search term change its going to go straight to the reducer and run through a function, update the store and make changes to our view.

If its a robot request its going to notice its a function go into the middle ware and redux thunk is going to dispatch, pending to the reducer, and let us know when its done with promise it will let us know if it has robots. When it returns its going to dispatch the success to go through the reducer and update the store and make changes to our view.

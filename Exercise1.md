1. Change to new branch `sagas-exercise`.
 - If you get stuck use: `git checkout -b sagas-finished origin/sagas-finished`
2. Setup Redux Sagas

 - `npm install redux-saga --save`
 - Add it to the store middleware.

 ```
// src/store/index.js

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
...
 const middleware = [
  ...customMiddleware,
  sagaMiddleware,
];
...
// When  you have your saga index, run it here
sagaMiddleware.run(rootSaga);
...
 ```

3. Create `helloWorldSaga` that prints to the console a greeting.

4. Create `userSaga` to retrieve data from the user.
```
// api/user.js
loadUser()
```

5. Create `pricesSaga` to retrieve info about crypto currencies prices.
```
// api/crypto.js
loadPrices()
```

6. Select data from the state using a saga and display it inside a new component.

7. Create user reducer

8. Display `user.name` on a component

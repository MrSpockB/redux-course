1. Change to new branch `thunks-exercise`.
 - If you get stuck use: `git checkout -b thunks origin/thunks`
2. Setup Redux Thunks

 - `npm install redux-thunk --save`
 - Add it to the store middleware.

 ```
 import thunk from 'redux-thunk';
...
 const middleware = [
  ...customMiddleware,
  thunk,
];
...
 ```

3. Add actions `getPricesRequested`, `getPricesCompleted`, `getPricesFailed`.
4. Add reducers for our new actions.
5. Integrate with UI
 - Convert `TransactionList` to stateful component.
 - Dispatch action `getPricesRequested` inside constructor.

> Note:
> Use chrome with security flags disabled
> `open -a Google\ Chrome --args --disable-web-security --user-data-dir`
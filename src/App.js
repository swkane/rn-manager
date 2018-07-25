import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";
import reducer from "./reducers";
import Router from "./Router";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

class App extends React.Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyDj9SlO10oWyX8UQoTcLzTa-B2Q0zS3PPw",
      authDomain: "manager-c0b19.firebaseapp.com",
      databaseURL: "https://manager-c0b19.firebaseio.com",
      projectId: "manager-c0b19",
      storageBucket: "",
      messagingSenderId: "173705890359"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

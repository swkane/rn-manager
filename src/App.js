import React from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "firebase";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;

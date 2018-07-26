import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { Card, CardSection, Input, Button, Spinner } from "./common";
import { emailChanged, passwordChanged, loginUser } from "../actions";

class LoginForm extends React.Component {
  onEmailChange = text => {
    this.props.emailChanged(text);
  };
  onPasswordChange = text => {
    this.props.passwordChanged(text);
  };
  onButtonPress = () => {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            autoFocus
            onChangeText={this.onEmailChange}
            label="Email"
            placeholder="email@gmail.com"
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            onChangeText={this.onPasswordChange}
            label="Password"
            placeholder="password"
            value={this.props.password}
          />
        </CardSection>
        {this.props.error != "" && (
          <View style={{ backgroundColor: "white" }}>
            <Text style={styles.errorTextStyle}>{this.props.error}</Text>
          </View>
        )}
        <CardSection>
          {!this.props.loading ? (
            <Button onPress={this.onButtonPress}>Login</Button>
          ) : (
            <Spinner size="large" />
          )}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  loading: state.auth.loading
});

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);

import React from "react";
import { connect } from "react-redux";
import { Card, CardSection, Input, Button } from "./common";
import { emailChanged } from "../actions";

class LoginForm extends React.Component {
  onEmailChange = text => {
    this.props.emailChanged(text);
  };
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            onChangeText={this.onEmailChange}
            label="Email"
            placeholder="email@gmail.com"
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input secureTextEntry label="Password" placeholder="password" />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  email: state.email
});

export default connect(
  mapStateToProps,
  { emailChanged }
)(LoginForm);

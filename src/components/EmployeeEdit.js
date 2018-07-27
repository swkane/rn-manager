import React from "react";
import _ from "lodash";
import Communications from "react-native-communications";
import { Card, CardSection, Button, Confirm } from "./common";
import { connect } from "react-redux";
import EmployeeForm from "./EmployeeForm";
import { employeeUpdate, employeeSave, employeeDelete } from "../actions";

class EmployeeEdit extends React.Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee.item, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress = () => {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.item.uid
    });
  };

  onTextPress = () => {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  };

  onAccept = () => {
    const { uid } = this.props.employee.item;
    this.props.employeeDelete({ uid });
  };

  onDecline = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress}>Save Changes</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress}>Text Schedule</Button>
        </CardSection>
        <CardSection>
          <Button
            onPress={() => this.setState({ showModal: !this.state.showModal })}
          >
            Fire Employee
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept}
          onDecline={this.onDecline}
        >
          Are you sure you want to fire this employee?
        </Confirm>
      </Card>
    );
  }
}

mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeSave, employeeDelete }
)(EmployeeEdit);

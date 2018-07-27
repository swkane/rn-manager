import React from "react";
import { connect } from "react-redux";
import { Card, CardSection, Input, Button } from "./common";
import { employeeUpdate, employeeCreate } from "../actions";
import EmployeeForm from "./EmployeeForm";

class EmployeeCreate extends React.Component {
  onButtonPress = () => {
    const { name, phone, shift } = this.props;
    // Gives shift a default value to Monday
    this.props.employeeCreate({ name, phone, shift: shift || "Monday" });
  };
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeCreate }
)(EmployeeCreate);

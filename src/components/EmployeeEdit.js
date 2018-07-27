import React from "react";
import _ from "lodash";
import { Card, CardSection, Button } from "./common";
import { connect } from "react-redux";
import EmployeeForm from "./EmployeeForm";
import { employeeUpdate, employeeSave } from "../actions";

class EmployeeEdit extends React.Component {
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
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress}>Save Changes</Button>
        </CardSection>
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
  { employeeUpdate, employeeSave }
)(EmployeeEdit);

import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { employeesFetch } from "../actions";

class EmployeeList extends React.Component {
  componentWillMount() {
    this.props.employeesFetch();
  }
  render() {
    return (
      <View>
        <Text>Employee List</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  employees: state.employees
});

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);

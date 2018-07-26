import React from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import _ from "lodash";
import { employeesFetch } from "../actions";
import ListItem from "./ListItem";

class EmployeeList extends React.Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  renderItem = employee => <ListItem employee={employee} />;

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderItem}
        keyExtractor={employee => employee.uid}
      />
    );
  }
}

const mapStateToProps = state => {
  // convert object holding all employees in Redux store to array of employees on component props
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);

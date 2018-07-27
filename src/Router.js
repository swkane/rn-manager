import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeEdit from "./components/EmployeeEdit";
import { employeeFormClear } from "./actions";

const RouterComponent = props => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            initial
          />
        </Scene>
        <Scene key="main">
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Employee"
          />
          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
            onExit={() => {
              console.log("clear");
              props.employeeFormClear();
            }}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default connect(
  null,
  { employeeFormClear }
)(RouterComponent);

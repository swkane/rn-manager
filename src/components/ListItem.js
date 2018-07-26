import React from "react";
import { Text } from "react-native";
import { CardSection } from "./common";

class ListItem extends React.Component {
  render() {
    const { name } = this.props.employee.item;

    return (
      <CardSection>
        <Text style={styles.titleStyle}>{name}</Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;

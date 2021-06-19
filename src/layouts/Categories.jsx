import React from "react";
import {Menu, Label, Input, Container } from "semantic-ui-react";

export default function Categories() {
  return (
    <Menu pointing vertical>
      <Container>
    <Menu.Item
      name='home'
    />
    <Menu.Item
      name='messages'
    />
    <Menu.Item
      name='friends'
    />
    </Container>
  </Menu>
      
  );
}

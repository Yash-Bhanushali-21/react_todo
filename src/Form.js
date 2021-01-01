import React, { useState } from "react";
import { Component } from "react";
import { Container } from "react-bootstrap";
import Entries from "./Entries";
import "./styles.css";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  this.initialState = {
    title:'',
    body:''

  }
  this.state = this.initialState;

}

export default Form;

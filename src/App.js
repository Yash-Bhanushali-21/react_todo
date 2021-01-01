import React, { useState } from "react";
import { Component } from "react";
import { Container } from "react-bootstrap";
import Entries from "./Entries";
import "./styles.css";

class App extends Component {
  state = {
    entries: [
      {
        title: "this is a test",
        body: "this is a test body"
      },
      {
        title: "this is a test",
        body: "this is a test body"
      }
    ]
  };

  removeEntry = (index) => {
    const { entries } = this.state;
    this.setState({
      entries: entries.filter((entry, i) => {
        return i !== index;
      })
    });
  };
  editEntry = (index, title, body) => {
    const { entries } = this.state;
    let entry = { ...entries[index] };
    entry.title = title;
    entry.body = body;
    entries[index] = entry;
    this.setState({ entries });
    console.log("after changes");
    console.log(this.state);
  };
  render() {
    return (
      <div className="App">
        <h1>My Journnal App </h1>
        <Entries
          entryData={this.state}
          removeEntry={this.removeEntry}
          editEntry={this.editEntry}
        />
      </div>
    );
  }
}
export default App;

import React, { Component } from "react";

const EntryTitle = () => {
  return <h3>title</h3>;
};
const EntryBody = (props) => {
  const { entryData, removeEntry, editEntry } = props;
  const entries = entryData.entries.map((entry, index) => {
    return (
      <div key={index}>
        <h2>{entry.title}</h2>
        <h2>{entry.body}</h2>
        <button onClick={() => removeEntry(index)}> Delete </button>
        <button onClick={() => editEntry(index, "hi", "chnaged")}>Edit </button>
      </div>
    );
  });

  return <div>{entries}</div>;
};

const Entries = (props) => {
  const { entryData, removeEntry, editEntry } = props;
  console.log(entryData);
  return (
    <div>
      <h2>My Entries</h2>;
      <EntryTitle />
      <EntryBody
        entryData={entryData}
        removeEntry={removeEntry}
        editEntry={editEntry}
      />
    </div>
  );
};
export default Entries;

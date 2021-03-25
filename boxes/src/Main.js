import React from "react";
import "./App.css";

const Box = (props) => {
  return (
    <div className="box">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Title: {props.title}</p>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <Box name="Sakarius Topelius" age="123" title="kirjailija" />
      <Box name="Akseli Miettinen" age="65" title="Suurmestari" />
      <Box name="Fantastic Fred" age="1050" title="Grand Wizard" /> );
    </div>
  );
};

export default Main;

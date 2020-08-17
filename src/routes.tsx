import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing";
import TeacherList from "./components/TeacherList";
import TeacherForm from "./components/TeacherForm";
import SucessPost from "./components/SucessPost";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/study" component={TeacherList} />
      <Route exact path="/give-classes" component={TeacherForm} />
      <Route exact path="/saved" component={SucessPost} />
    </Router>
  );
};

export default Routes;

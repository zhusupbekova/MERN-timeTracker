import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/navbar.component";
import { ExercisesList } from "./components/exercises-list.component";
import { EditExercise } from "./components/edit-exercise.component";
import { CreateExercise } from "./components/create-exercise.component";
import { CreateUser } from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" exact component={EditExercise} />
      <Route path="/exercises/add" exact component={CreateExercise} />
      <Route path="/users/add" exact component={CreateUser} />
    </Router>
  );
}

export default App;

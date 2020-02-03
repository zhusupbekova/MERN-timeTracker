import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export class ExercisesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { exercises: [] };

    this.deleteExercise = this.deleteExercise.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then(res => {
        this.setState({ exercises: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteExercise(id) {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then(res => console.log(res.data));
    this.setState({
      exercises: this.state.exercises.filter(item => item._id !== id)
    });
  }

  exerciseList() {
    return this.state.exercises.map(currexercise => {
      return (
        <Exercise
          exercise={currexercise}
          deleteExercise={this.deleteExercise}
          key={currexercise._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Exercise</th>
              <th>Description</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}

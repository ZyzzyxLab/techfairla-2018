import React, { Component } from 'react';
import propTypes from 'prop-types';
import '../App.css';
import TaskList from '../components/taskList';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

// //Get Task data from graphQL
// const GET.TASK = gql`
//   {
//     task {
//       //Whatever data
//     }
//   }
// `;

// //Get Project data from GraphQL
// const GET.PROJECT = gpl`
//   {
//     project{
//       //whatever data
//     }
//   }
// `;

class TaskView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TaskList />;
  }
}

export default TaskView;

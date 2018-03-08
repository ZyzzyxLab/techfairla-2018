import React, { Component } from 'react';
import propTypes from 'prop-types';
import '../App.css';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { graphql } from 'react-apollo';
// import gql from 'graphql-tag'

// const TaskQuery = gql`
//   query TaskQuery {
//     Task(private: true) {
//       description
//       reward
//     }
//   }
// `;

// const ProjectQuery = gql`
//   query ProjectQuery {
//     Project() {
//       description
//     }
//   }
// `;

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

  // static propTypes = {
  //   data: React.PropTypes.shape({
  //     loading: React.PropTypes.bool,
  //     error: React.PropTypes.object,
  //     TaskQuery: React.PropTypes.object,
  //     ProjectQuery: React.PropTypes.object,
  //   }).isRequired,
  // }

  render() {
    // if (this.props.data.loading) {
    //    return (<div>Loading</div>)
    //  }

    //  if (this.props.data.error) {
    //    console.log(this.props.data.error)
    //    return (<div>An unexpected error occurred</div>)
    //  }

    return <TaskList />;
  }
}

export default TaskView;

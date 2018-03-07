import React, { Component } from 'react';
import propTypes from 'prop-types';
import logo from '../logo.svg';
import '../App.css';
import ProjectGraph from '../components/ProjectGraph';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

class ProjectView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const taskNodes = [
      { id: '1', label: 'Node 1', color: '#e04141' },
      { id: '2', label: 'Node 2', color: '#e09c41' },
      { id: '3', label: 'Node 3', color: '#e0df41' },
      { id: '4', label: 'Node 4', color: '#7be041' },
      { id: '5', label: 'Node 5', color: '#41e0c9' }
    ];
    //Connections between tasks:
    const taskEdges = [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 }
    ];
    return <ProjectGraph nodes={taskNodes} edges={taskEdges} />;
  }
  //TODO: WIRE THIS UP TO DB LATER.
}

export default ProjectView;

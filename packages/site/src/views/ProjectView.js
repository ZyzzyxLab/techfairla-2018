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
    const graphnodes = [
      { id: 1, label: 'Node 1' },
      { id: 2, label: 'Node 2' },
      { id: 3, label: 'Node 3' },
      { id: 4, label: 'Node 4' },
      { id: 5, label: 'Node 5' }
    ];
    const edges = [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 }
    ];
    return <ProjectGraph nodes={graphnodes} edges={edges} />;
  }
  //TODO: WIRE THIS UP TO DB LATER.
}

export default ProjectView;

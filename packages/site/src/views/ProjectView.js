import React, { Component } from 'react';
import propTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import ProjectGraph from './components/ProjectGraph';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

class ProjectView extends Component {
    const nodes = [
      {id: 1, label: 'Node 1'},
      {id: 2, label: 'Node 2'},
      {id: 3, label: 'Node 3'},
      {id: 4, label: 'Node 4'},
      {id: 5, label: 'Node 5'}
  ];
    const  edges = [
      {from: 1, to: 2},
      {from: 1, to: 3},
      {from: 2, to: 4},
      {from: 2, to: 5}
    ];

      render() {
        return (
            <ProjectGraph nodes=nodes edges=edges />
        )
        }
    }

    export default ProjectView;

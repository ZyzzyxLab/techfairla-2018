import React, { Component } from 'react';
import propTypes from 'prop-types';
import logo from '../logo.svg';
import '../App.css';
import ProjectGraph from '../components/ProjectGraph';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
const ReactGridLayout = require('react-grid-layout');
class ProjectView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const taskNodes = [
      { id: '1', label: 'Design mockup for UI', color: '#e04141' },
      {
        id: '2',
        label: 'Translate mockup to front end code',
        color: '#e09c41'
      },
      { id: '3', label: 'Create a landing page', color: '#e0df41' },
      {
        id: '4',
        label: 'Make an API / back-end from a project template',
        color: '#7be041'
      },
      { id: '5', label: 'Set up a database', color: '#41e0c9' },
      { id: '6', label: 'Form a basic MVP working website' }
    ];
    //Connections between tasks:
    const taskEdges = [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 6 },
      { from: 4, to: 6 },
      { from: 3, to: 6 },

      { from: 5, to: 6 }
    ];

    var layout = [
      { i: 'a', x: 0, y: 0, w: 1, h: 3, static: true },
      { i: 'b', x: 1, y: 0, w: 1, h: 3, static: true }
    ];
    return (
      <div>
        <h1>Wilson's project tree</h1>
        <ReactGridLayout
          className="layout"
          layout={layout}
          cols={2}
          rowHeight={30}
          width={1200}
        >
          <div key="a">
            <ProjectGraph nodes={taskNodes} edges={taskEdges} />
          </div>
          <div key="b">
            <div>
              <h2> project info </h2>
              <p>blablabla </p>
              <p>
                {' '}
                We want to build this ting But u gotta sign an NDA if u wanna
                know more.{' '}
              </p>
            </div>
          </div>
        </ReactGridLayout>
      </div>
    );
  }
  //TODO: WIRE THIS UP TO DB LATER.
}

export default ProjectView;

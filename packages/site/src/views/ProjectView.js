import React, { Component } from 'react';
import propTypes from 'prop-types';
import logo from '../logo.svg';
import '../App.css';
import ProjectGraph from '../components/ProjectGraph';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import ReactGridLayout from 'react-grid-layout';
import axios from 'axios';
const getRandomColor = function() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

class ProjectView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.loadDataFromServer = this.loadDataFromServer.bind(this);
  }

  loadDataFromServer() {
    axios
      .get(this.props.url) //Pass in URL
      .then(res => {
        this.setState({ data: res.data });
      });
  }

  componentDidMount() {
    this.loadDataFromServer();
    setInterval(this.loadDataFromServer, 2000);
  }

  render() {
    //const taskNodes = this.state.data.map((proj)
    //=> ({id: proj._id, label: proj.description, color: getColor()}))
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
    //const taskEdges = this.state.data.map((proj) => proj.childNode && proj.childNode.map(
    // (child) => ({from: proj._id, to: child._id})));

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
                <blockquote>
                  We want to build this thing that integrates dog owners with
                  dog lovers.
                </blockquote>
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

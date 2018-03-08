import React, { Component } from 'react';
import propTypes from 'prop-types';
import logo from '../logo.svg';
import '../App.css';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import ReactGridLayout from 'react-grid-layout';
//import { Button, Collapse, Switch } from '@blueprintjs/core';
//collapsable contact details:

class TaskView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskname: 'HELP ME CODE MY REACT FRONTEND' /*props.project*/
      /*  projects: [
        'Project 1',
        'Project 2',
        'Project 3',
        'Project 4'
    ] */
    }; //TODO: GRAPHQL integration.
  }

  render() {
    var layout = [
      { i: 'profilecard', x: 0, y: 0, w: 1, h: 3, static: true },
      { i: 'taskinfo', x: 1, y: 0, w: 1, h: 3, static: true }
    ];

    return (
      <div>
        <h1> Taskname: {this.state.taskname}</h1>

        <ReactGridLayout
          className="layout"
          layout={layout}
          cols={2}
          rowHeight={60}
          width={1200}
        >
          <div key="profilecard">
            <div class="pt-card .pt-elevation-4">
              <h3> about the creator </h3>
              <h4> Hanifa Harjani </h4>
              <p class="title">CEO & Founder, Example</p>
              <p>Hanifa University</p>

              <a href="#">
                <i class="fa fa-dribbble" />
              </a>
              <a href="#">
                <i class="fa fa-twitter" />
              </a>
              <a href="#">
                <i class="fa fa-linkedin" />
              </a>
              <a href="#">
                <i class="fa fa-facebook" />
              </a>
            </div>
            <div class="pt-card .pt-elevation-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec dapibus et mauris, vitae dictum metus.
              </p>
            </div>
          </div>
          <div key="taskinfo">
            <h3> Monetary reward</h3>
            <p>$ 5.00 </p>
            <h3> Expiry date</h3>
            <p>$ 5th December </p>
            <h3> Required expertise</h3>
            <p> PHP LAMP STACK </p>
            <h2> PUBLIC</h2>
          </div>
        </ReactGridLayout>
      </div>
    );
  }
  //TODO: WIRE THIS UP TO DB LATER.
}

export default TaskView;

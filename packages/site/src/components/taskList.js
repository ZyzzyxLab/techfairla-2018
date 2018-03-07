import React, { Component } from 'react';
import { Table, Cell, Column } from '@blueprintjs/table';


//import CSS

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskData: {
        description: 'Hello Task',
        reward: 20
      },
      projectData: {
        name: 'Hello Project'
      }
    };
  }
  render() {
    return (
      <div>
        <div className="projectList">
          <Table numRows={1}>
            <Column name="Project Name">
              {' '}
              {this.state.taskData.description}
            </Column>
          </Table>
        </div>

        <div className="privateTask">
          <Table numRows={1}>
            <Column name="Task Description">
              {' '}
              {this.state.taskData.description}
            </Column>
            <Column name="Reward"> {this.state.taskData.reward}</Column>
          </Table>
        </div>
      </div>
    );
  }
}

export default TaskList;


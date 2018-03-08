import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import TaskList from '../components/TaskList';

class MarketplaceView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onLayoutChange: layout => {
        return;
      }
    };
  }

  render() {
    const tasks = [
      'task 1',
      'task 2',
      'task 3',
      'task 4',
      'task 5',
      ' task 6',
      "Hanif's task"
    ]; // TODO: REPLACE THIS
    return (
      <div>
        <h2> Projects & Tasks Marketplace </h2>
        <TaskList onLayoutChange={this.state.onLayoutChange} items={tasks} />
      </div>
    );
  }
}

export default MarketplaceView;

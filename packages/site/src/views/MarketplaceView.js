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
      },
      endpoint: 'TODO CHANGE THIS TO REST ENDPOINT'
    };
  }

  render() {
    const thisColor = 'coral';
    return (
      <div>
        <h2> Projects & Tasks Marketplace </h2>
        <TaskList
          onLayoutChange={this.state.onLayoutChange}
          endpoint={this.state.endpoint}
          color={thisColor}
        />{' '}
        //trying to pass color. Can't do it? Go to tasklist.
      </div>
    );
  }
}

export default MarketplaceView;

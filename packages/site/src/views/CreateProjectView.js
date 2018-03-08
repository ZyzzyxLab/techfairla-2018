import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import CreateProjectGraph from '../components/CreateProjectGraph';

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
    return (
      <div>
        <h2> Create a project </h2>
        <h4> Click on the circle to get started. </h4>
        <CreateProjectGraph />
      </div>
    );
  }
}

export default MarketplaceView;

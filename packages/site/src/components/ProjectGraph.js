import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
var Graph = require('react-graph-vis');


class ProjectGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state.graph = {
      nodes: this.props.nodes,
      edges: this.props.edges
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}
  render() {
    var options = {
      layout: {
        hierarchical: true
      },
      edges: {
        color: '#000000'
      }
    };
    var events = {
      select: function(event) {
        var { taskID, edges } = event;
        // TODO: Do when onclick on the nodes id
        alert('clicked on taskID: ' + taskID);
      }
    };
    return (
      <Graph
        graph={this.state.graph}
        options={options}
        events={events}
        style={{ height: '1000px' }}
      />
    );
  }
}

export default ProjectGraph;

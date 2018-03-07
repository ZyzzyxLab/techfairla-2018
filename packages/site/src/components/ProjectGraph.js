import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Graph from 'react-graph-vis';
//const Graph = require('react-graph-vis').default;

class ProjectGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: { nodes: this.props.nodes, edges: this.props.edges }
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { nodes, edges } = this.props;
    const graph = { nodes, edges };
    var options = {
      layout: {
        hierarchical: true
      },
      edges: {
        color: '#000000'
      }
    };
    const events = {
      select: function(event) {
        var { nodes, edges } = event;
        // TODO: Do when onclick on the nodes id
        let taskID = nodes;
        if (taskID != '')
          alert(
            'clicked on taskID: ' +
              taskID +
              '. TODO: REDIRECT TO THE TASKVIEW IF PUBLIC.'
          );
      }
    };
    return <Graph graph={this.state.graph} options={options} events={events} />;
  }
}

export default ProjectGraph;

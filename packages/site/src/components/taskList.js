import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import _ from 'lodash';

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
class TaskList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items, // TODO: PASS THIS AS A PROP

      newCounter: 0
    };
  }

  render() {
    return (
      <div>
        <ReactGridLayout
          className="layout"
          cols={6}
          rowHeight={30}
          width={1200}
        >
          {this.state.items.map(function(name, index) {
            return (
              <div
                style={{ 'background-color': 'coral' }}
                key={index.toString()}
                data-grid={{
                  x: (index * 2) % 6,
                  y: Math.floor(index * 2 / 6),
                  w: 1,
                  h: 1
                }}
              >
                {name}
              </div>
            );
          })}
        </ReactGridLayout>
      </div>
    );
  }
}

export default TaskList;

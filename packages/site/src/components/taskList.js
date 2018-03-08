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
      handleClick: id => {
        //TODO: REDRECT TO TASKVIEW.
        alert('REDIRECT TO ID: ' + id);
        console.log('redirected ');
      },

      newCounter: 0
    };
  }

  render() {
    //TODO: onClick here doesn't work.
    return (
      <div>
        <ReactGridLayout
          className="layout"
          cols={8}
          rowHeight={30}
          width={1200}
        >
          {this.state.items.map(function(name, index) {
            return (
              <div
                style={{ 'background-color': 'coral' }}
                key={index.toString()}
                data-grid={{
                  x: (index * 2) % 8,
                  y: Math.floor(index * 2 / 8),
                  w: 1,
                  h: 1
                }}
                onClick={index => this.state.handleClick(index)}
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

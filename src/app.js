import React from 'react';
import { observable, autorun } from 'mobx';
import { observer } from 'mobx-react';

const vipMember = observable({
  name: 'Susan',
  age: 18,
  points: 0,
});


@observer
class App extends React.Component {
  constructor(props) {
    super(props)
  }

  handleAdd() {
    vipMember.points++
  }

  handleUpdate() {
    vipMember.age = 20
  }

  render() {
    return (
      <div>
        <div>
          <span>{`${vipMember.name} has ${vipMember.points} points.`}</span>
          <button onClick={this.handleAdd.bind(this)}>+</button>
        </div>
        <div>
          <button onClick={this.handleUpdate.bind(this)}>修改</button>
        </div>
      </div>
    )
  }
}

// observer(App)

export default App
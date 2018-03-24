import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'

import { toggleAndIncrement } from '../redux/actions'

const mapStateToProps = state => ({
  component: state.component
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  toggleComp: (comp) => dispatch({ type: 'TOGGLE', comp: comp }),
  toggleAndIncrement: () => dispatch(toggleAndIncrement())
})

export class ComponentA extends Component {

  state = {
    isEnabled: true
  }

  handleClick = () => {
    // this.props.toggleComp('componentA')
    // this.props.increment()
    this.props.toggleAndIncrement()
  }

  render() {
    const { component } = this.props
    return (
      <View>
        <Button
          onPress={this.handleClick}
          title={`Component A is ${component.componentA ? 'Enabled' : 'disbaled'}`}
          color={`${component.componentA ? 'green' : 'red'}`}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentA)
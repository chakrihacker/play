import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'

import ComponentC from './ComponentC'

const mapStateToProps = state => ({
  component: state.component
})

const mapDispatchToProps = dispatch => ({
  toggleComp: (comp) => dispatch({ type: 'TOGGLE', comp })
})

export class ComponentB extends Component {

  state = {
    isEnabled: true
  }

  handleClick = () => {
    // this.setState((prevState) => ({
    //   isEnabled: !prevState.isEnabled
    // }))
    this.props.toggleComp('componentB')
  }

  render() {
    const { component } = this.props
    return (
      <View>
        <Button
          onPress={this.handleClick}
          title={`Component B is ${component.componentB ? 'Enabled' : 'disbaled'}`}
        />
        <ComponentC />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentB)
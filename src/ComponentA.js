import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  component: state.component
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  toggleComp: (comp) => dispatch({ type: 'TOGGLE', comp: comp })
})

export class ComponentA extends Component {

  state = {
    isEnabled: true
  }

  handleClick = () => {
    // this.setState((prevState) => ({
    //   isEnabled: !prevState.isEnabled
    // }))
    this.props.toggleComp('componentA')
    this.props.increment()
  }

  render() {
    const { component } = this.props
    console.log(component)
    return (
      <View>
        <Button
          onPress={this.handleClick}
          title={`Component A is ${component.componentA ? 'Enabled' : 'disbaled'}`}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentA)
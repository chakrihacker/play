import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT' })
})

export class ComponentC extends Component {
  handleClick = () => {
    this.props.increment()
  }
  render() {
    return (
      <View>
        <Button
          onPress={this.handleClick}
          title="Increment From C"
          style={{ padding: 5, margin: 5 }}
        />
        <Text> {this.props.counter} </Text>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentC)
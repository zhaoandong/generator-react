import React from 'react'
import styles from './index.css'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'

let cx = classNames.bind(styles)

class Button extends React.Component {
  render () {
    console.log(this.props)
    return (
      <button className={cx(styles.button)} onClick={() => this.props.onAdd()} >{this.props.value}</button>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.todos.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: () => {
      dispatch({type: 'ADD_TODO'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)

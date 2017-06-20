import React from 'react'
import styles from './index.css'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'

import Button from '../../components/Button'

let cx = classNames.bind(styles)

class Home extends React.Component {
  render () {
    return (
      <div>
        <h2 className={cx(styles.f1)}>home</h2>
        <p>点击按钮触发action</p>
        <Button />
        <p>num:{this.props.value}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.todos.value
  }
}

export default connect(mapStateToProps)(Home)

import React from 'react'
import classNames from 'classnames/bind'

import styles from './index.scss'

let cx = classNames.bind(styles)

const About = () => (
  <div>
    <h2 className={cx(styles.f1)}>about</h2>
  </div>
)

export default About

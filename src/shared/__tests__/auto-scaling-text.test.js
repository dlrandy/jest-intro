/* eslint-disable testing-library/no-debug */
import React from 'react'
import {render} from 'client-test-utils'
import AutoScalingText from '../auto-scaling-text'

test('renders', () => {
  render(<AutoScalingText />)
  // console.log(debug());
})
import React from 'react'
import CalculatorDisplay from 'calculator-display'
import {render} from 'client-test-utils'
import {light} from 'themes'

test('should render', () => {
  const {container, rerender} = render(
    <CalculatorDisplay id="test" value="0" />,
    {theme: light},
  )
  rerender(<CalculatorDisplay id="test" value="1" />)
  expect(container.firstChild).toMatchSnapshot()
  expect(container.firstChild).toMatchInlineSnapshot(`
    .emotion-0 {
      position: relative;
      line-height: 130px;
      font-size: 6em;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      color: #1c191c;
      background: white;
    }

    <div
      class="emotion-0 emotion-1"
      id="test"
    >
      <div
        class="autoScalingText"
        data-testid="total"
        style="transform: scale(1,1);"
      >
        1
      </div>
    </div>
  `)
})

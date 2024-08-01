import { render } from '@redwoodjs/testing/web'

import Hamburgerbtn from './Hamburgerbtn'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Hamburgerbtn', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Hamburgerbtn />)
    }).not.toThrow()
  })
})

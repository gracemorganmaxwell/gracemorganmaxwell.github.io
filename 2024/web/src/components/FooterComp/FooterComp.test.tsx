import { render } from '@redwoodjs/testing/web'

import FooterComp from './FooterComp'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FooterComp', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FooterComp />)
    }).not.toThrow()
  })
})

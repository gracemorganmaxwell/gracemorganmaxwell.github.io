import { render } from '@redwoodjs/testing/web'

import NavigationComp from './NavigationComp'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NavigationComp', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavigationComp />)
    }).not.toThrow()
  })
})

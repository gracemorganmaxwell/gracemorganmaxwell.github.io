import { render } from '@redwoodjs/testing/web'

import LineSeperatorComponent from './LineSeparatorComponent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LineSeperatorComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LineSeperatorComponent />)
    }).not.toThrow()
  })
})

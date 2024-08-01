import { render } from '@redwoodjs/testing/web'

import PopupMessageComponent from './PopupMessageComponent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PopupMessageComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PopupMessageComponent />)
    }).not.toThrow()
  })
})

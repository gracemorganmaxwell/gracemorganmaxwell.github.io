import { render } from '@redwoodjs/testing/web'

import AboutMeComponent from './AboutMeComponent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AboutMeComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AboutMeComponent />)
    }).not.toThrow()
  })
})

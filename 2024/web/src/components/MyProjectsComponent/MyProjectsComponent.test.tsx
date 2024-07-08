import { render } from '@redwoodjs/testing/web'

import MyProjectsComponent from './MyProjectsComponent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MyProjectsComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyProjectsComponent />)
    }).not.toThrow()
  })
})

import { render } from '@redwoodjs/testing/web'

import MyBlogPostsComponent from './MyBlogPostsComponent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MyBlogPostsComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyBlogPostsComponent />)
    }).not.toThrow()
  })
})

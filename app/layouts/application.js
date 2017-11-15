import React, { createElement } from 'react'
import { routeNode } from 'react-router5';

import * as pages from '../pages'

import './application.sass'

const Page = routeNode('')((props) => {
  const { route } = props;

  const resource = route.name.split('.')[0]
  const page = route.name.split('.')[-1] || 'collection'

  return createElement(pages[resource][page])
})

class Application extends React.Component {
  render() {
    return (
      <div id='Application'>
        <div styleName='sidebar'>
          Sidebar
        </div>
        <div className='content'>
          <Page />
        </div>
      </div>
    );
  }
}

export default Application

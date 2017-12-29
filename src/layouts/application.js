import React from 'react'
import Pages from '../pages'

import './application.sass'

class Application extends React.Component {
  render() {    
    return (
      <div id='Application'>
        <div className='some-global' styleName='sidebar'>
          Sidebar
        </div>
        <div styleName='content'>
          <Pages />
        </div>
      </div>
    );
  }
}

export default Application

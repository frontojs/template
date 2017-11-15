import React from 'react'
import Pages from '../pages'

import './application.sass'

class Application extends React.Component {
  render() {    
    return (
      <div id='Application'>
        <div styleName='sidebar'>
          Sidebar
        </div>
        <div className='content'>
          <Pages />
        </div>
      </div>
    );
  }
}

export default Application

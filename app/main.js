import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import { RouterProvider } from 'react-router5'

import Application from './layouts/application'
import createRouter from '../config/router'

const router = createRouter({ listener: true, logger: true })

const app = 
  <Provider>
    <RouterProvider router={router}>
      <Application />
    </RouterProvider>
  </Provider>

router.start(() => 
  render(app, document.getElementById('app'))
)

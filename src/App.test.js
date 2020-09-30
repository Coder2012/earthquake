import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { App } from './App'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

it('renders without crashing', () => {
  const store = mockStore({
    earthquakes: {
      features: [],
      magFilter: '',
      magTypeFilter: '',
    },
  })
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

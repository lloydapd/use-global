import React from 'react'
import globalHook from './globalHook'
import actions from './actions'

// all states here
const initialState = {
  token: '',
  counter: 0
}

const useGlobal = globalHook(React, initialState, actions)
export default useGlobal

/**
 * Generate a reducer with standard default behaviour and initial value
 * @param initialState - Any      The initial state of this reducer
 * @param reducerMap   - Object   A map of action types to reducers
 */
export const createReducer = (initialState, reducerMap) => (state = initialState, action) => {
  const reducer = reducerMap[action.type]
  return reducer ? reducer(state, action) : state
}

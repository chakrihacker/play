export const toggle = (comp) => ({
  type: 'TOGGLE',
  comp
})

export const increment = () => ({
  type: 'INCREMENT'
})

export const toggleAndIncrement = () => {
  return async dispatch => {
    dispatch(increment())
    dispatch(toggle('componentA'))
  }
}
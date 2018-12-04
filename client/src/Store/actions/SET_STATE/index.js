export default (endPoint, val) => {

  return (dispatch) => {
    dispatch({
      type: endPoint,
      payload: val
    })
  }
}

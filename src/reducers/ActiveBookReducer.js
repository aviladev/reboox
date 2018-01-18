export default (state = null, action) => {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.book
  }

  return state
}

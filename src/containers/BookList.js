import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectBook } from '../actions'

const mapStateToProps = ({ books }) => ({
  books
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ selectBook }, dispatch)

class BookList extends Component {  
  renderList = () => {
    const { books, selectBook } = this.props

    return books.map(book =>
      <li
        key={book.title}
        className="list-group-item"
        onClick={() => selectBook(book)}
      >
        {book.title}
      </li>
    )
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)

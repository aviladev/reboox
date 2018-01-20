import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  book: state.activeBook
})

class BookDetail extends Component {
  render () {
    const { book } = this.props

    return (
      (!book)
        ?
          <div>Select a book to get started</div>
        :
          <div>
            <h3>Details for:</h3>
              {book.title}
          </div>
    )
  }
}

export default connect(mapStateToProps)(BookDetail)
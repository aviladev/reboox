import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  book: state.activeBook
})

class BookDetail extends Component {
  render () {
    const { book } = this.props
    const { title, pages } = book || {}

    return (
      (!book)
        ?
          <div>Select a book to get started</div>
        :
          <div>
            <h3>Details for:</h3>
            <ul>
              <li><strong>Title: </strong>{title}</li>
              <li><strong>Pages: </strong>{pages}</li>
            </ul>
          </div>
    )
  }
}

export default connect(mapStateToProps)(BookDetail)
import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  book: state.activeBook
})

class BookDetail extends Component {
  render () {
    const { book } = this.props

    return (
      <div>
        <h3>Details for:</h3>
        <div>
          { book
            ? book.title 
            : 'Select a book to get started.'
          }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(BookDetail)
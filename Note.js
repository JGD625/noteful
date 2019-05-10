import React from 'react'
import { Link } from 'react-router-dom';
import "./Note.css";
import { format } from 'date-fns'
import config from '../config'
import NotefulContext from '../NotefulContext/NotefulContext'
import PropTypes from 'prop-types'



export default class Note extends React.Component {
  static defaultProps ={
    onDeleteNote: () => {},
  }
  static contextType = NotefulContext;

  handleClickDelete = e => {
    e.preventDefault()
    const noteId = this.props.id

    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(() => {
        this.context.deleteNote(noteId)
        // allow parent to perform extra behaviour
        this.props.onDeleteNote(noteId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { name, id, modified } = this.props
    return (
      <div className='Note'>
        <h2 className='Note__title'>
          <Link to={`/note/${id}`}>
            {name}
          </Link>
        </h2>
        <button name="delete button" role="button"
          className='Note__delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          <i class="fas fa-trash-alt"></i>

        </button>
        <div className='Note__dates'>
          <div className='Note__dates-modified'>
            Modified
            {' '}
            <span className='Date'>
              {format(modified, 'Do MMM YYYY')}
            </span>
          </div>
        </div>
      </div>
    )
  }
}
Note.propTypes = {
  modified: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};
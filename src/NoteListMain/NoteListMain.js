import React from 'react'
import { Link } from 'react-router-dom'
import Note from '../Note/Note'
import AppButton from '../AppButton'
import './NoteListMain.css'
import NotefulContext from '../NotefulContext/NotefulContext'
import { getNotesForFolder } from '../note-helpers'


export default class NoteListMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = NotefulContext

  render() {
    const { folderId } = this.props.match.params
    const { notes=[] } = this.context
    const notesForFolder = getNotesForFolder(notes, folderId)
    return (
      <section className='NoteListMain'>
        <ul>
          {notesForFolder.map(note =>
            <li key={note.id}>
              <Note
                id={note.id}
                name={note.name}
                modified={note.modified}
              />
            </li>
          )}
        </ul>
        <div className='NoteListMain__button-container'>
       <AppButton
          tag={Link}
          to='/add-note'
          type='button'
          className='NoteListMain__add-note-button'
        >
          
          Note
        </AppButton>
      </div>
    </section>
  )
}
}


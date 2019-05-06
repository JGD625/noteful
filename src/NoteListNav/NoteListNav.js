import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import AppButton from '../AppButton'
import './NoteListNav.css'




export default function NoteListNav(props) {
  const countNotesForFolder = (notes=[], folderId) =>
  notes.filter(note => note.folderId === folderId).length
  return ( <div className='NoteListNav'>
  <ul className='NoteListNav__list'>
    {props.folders.map(folder =>
      <li key={folder.id}>
        <NavLink
          className='NoteListNav__folder-link'
          to={`/folder/${folder.id}`}
        >
          <span className='NoteListNav__num-notes'>
            {countNotesForFolder(props.notes, folder.id)}
          </span>
          {folder.name}
        </NavLink>
      </li>
    )}
  </ul>
  <div className='NoteListNav__button-wrapper'>
    <AppButton
      tag={Link}
      to='/add-folder'
      type='button'
      className='NoteListNav__add-folder-button'
    >
      
      
      Folder
    </AppButton>
  </div>
</div>
)
}

NoteListNav.defaultProps = {
folders: []
}
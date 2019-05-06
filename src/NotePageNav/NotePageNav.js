import React from 'react'
import AppButton from '../AppButton'
import './NotePageNav.css'



export default function NotePageNav(props) {
  return (
    <div className='NotePageNav'>
      <AppButton
        tag='button'
        role='link'
        onClick={() => props.history.goBack()}
        className='NotePageNav__back-button'
      >
        
        Back
      </AppButton>
      {props.folder && (
        <h3 className='NotePageNav__folder-name'>
          {props.folder.name}
        </h3>
      )}
    </div>
  )
}

NotePageNav.defaultProps = {
  history: {
    goBack: () => {}
  }
}
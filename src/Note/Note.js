import React from 'react'
import { Link } from 'react-router-dom';
import "./Note.css";
import { format } from 'date-fns'


export default function Note(props) {
  return (
    <div className='Note'>
      <h2 className='Note__title'>
        <Link to={`/note/${props.id}`}>
          {props.name}
        </Link>
      </h2>
      <button className='Note__delete' type='button'>
        
        {' '}
        <i class="fas fa-trash-alt"></i>
      </button>
      <div className='Note__dates'>
        <div className='Note__dates-modified'>
          Modified
          {' '}
          <span className='Date'>
            {format(props.modified, 'Do MMM YYYY')}
          </span>
        </div>
      </div>
    </div>
  )
}
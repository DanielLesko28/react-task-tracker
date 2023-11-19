import React from 'react'
import './TaskCard.css'
import Tag from '../tag/Tag'

const TaskCard = () => {
  return (
    <article className='task_card'>
        <p className='task_text'>This is task text</p>
        <div className='task_card_bottom_line'>
            <div className='task_card_tags'>
                <Tag name={'HTML'} />
            </div>
            <button>Delete</button>
        </div>
    </article>
  )
}

export default TaskCard
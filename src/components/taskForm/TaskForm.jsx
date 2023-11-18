import React, { useState } from 'react';
import './TaskForm.css';
import Tag from '../tag/Tag';

const TaskForm = () => {
  const [tag, setTag] = useState('');
  const handleTagClick = (selectedTag) => {
    setTag(selectedTag);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Do something with the selected tag and other form data
    // console.log('Selected Tag:', tag);
  };

  return (
    <header className='task_header'>
      <form onSubmit={handleFormSubmit}>
        <input type='text' className='task_input' placeholder='Enter your Task' />
        <div className='task_form_bottom_line'>
          {/* <button className='tag' onClick={() => handleTagClick('HTML')}>HTML</button>
          <button className='tag' onClick={() => handleTagClick('CSS')}>CSS</button>
          <button className='tag' onClick={() => handleTagClick('Javascript')}>Javascript</button>
          <button className='tag' onClick={() => handleTagClick('React')}>React</button> */}
          <Tag name={'HTML'} setState={setTag} />
          <Tag name={'CSS'} setState={setTag} />
          <Tag name={'Javascript'} setState={setTag} />
          <Tag name={'React'} setState={setTag} />
          <div>
            <select className='task_status'>
              <option value='todo'>To do</option>
              <option value='doing'>Doing</option>
              <option value='done'>Done</option>
            </select>
            <button type='submit' className="task_submit">Add</button>
          </div>
        </div>
        <section style={{display: 'flex', justifyContent: 'center', margin: '1rem 0 1rem 0'}}>
          <div>
        {
          tag === 'HTML' ? <p style={{color: 'purple'}}>{tag}</p> : <p>{tag}</p>
        }
          </div>
          <button style={{margin: '0 0 0 1rem'}} onClick={() => setTag('')}>Clear state</button>

        </section>
      </form>
    </header>
  );
}

export default TaskForm;

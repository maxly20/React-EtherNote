import React from 'react';
import useInput from '../../customhook/useInput';

const Form = () => {
  const [title, bindTitle, resetTitle] = useInput();
  const [content, bindContent, resetContent] = useInput();
  const handleSubmit = e => {
    e.preventDefault();
    console.log({ title, content });
    resetTitle();
    resetContent();
  };
  return (
    <div className='form-section'>
      <form onSubmit={handleSubmit} className='main-form'>
        <h5>New Note</h5>
        <div className='input-field'>
          <label htmlFor='note_title'>Note Title</label>
          <input type='text' id='note_title' {...bindTitle} />
        </div>
        <div className='input-field'>
          <label htmlFor='note_content'>Note Content</label>
          <textarea name='' id='note_content' {...bindContent}></textarea>
        </div>
        <button className='btn' onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;

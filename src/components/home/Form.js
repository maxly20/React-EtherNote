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
      <div className="form-section">
          <form>
              <h5>New Note</h5>
              <div className="input-field">
                  <input type="text" id="note_title" {...bindTitle}/>
                  <label htmlFor="note_title">Note Title</label>
              </div>
              <div className="input-field">
                  <textarea name="" id="note_content" cols="30" rows="10" {...bindContent}></textarea>
                  <label htmlFor="note_content">Note Content</label>
              </div>
              <button className="btn">Add</button>
          </form>
      </div>
  )
};

export default Form;

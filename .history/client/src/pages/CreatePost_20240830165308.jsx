import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
};
const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
];

const CreatePost = () => {
  const [title , setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  function createNewPost (ev)
  {
    const data =new FormData();
    data.set('title',title);
    data.set('summary',summary);
    data.set('content',content);
    // data.set('files',)
ev.preventDefault();
console.log(setFiles);
// fetch('http//localhost:5000/post'),
// {
//   method: 'POST',
//   body: JSON.stringify({title, summary, content}),
//   headers: { 'Content-Type': 'application/json' },
//   credentials: 'include',
// }
  }
  
  return (
    <form onSubmit={createNewPost}>
        <input type="text" name="" id="" placeholder="Title" value={title} onChange={ev => setTitle(ev.target.value)}/>
        <input type="text" name="" id="" placeholder="Summary" value={summary} onChange={ev=> setSummary(ev.target.value)}/>
        <input type="file"  onChange={ev => setFile(ev.target.files)}/>
        <ReactQuill  value={content} 
        onChange={newValue => setContent(newValue)}
        theme="snow"        modules={modules} formats={formats} />
        <button style={{marginTop:'10px'}}>Create Post</button>
        {/* <textarea name="" id="" cols={30} rows={10}></textarea> */}
    </form>
  )
}

export default CreatePost

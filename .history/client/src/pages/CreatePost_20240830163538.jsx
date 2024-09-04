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
  
  return (
    <form>
        <input type="text" name="" id="" placeholder="Title" value={title} onChange={ev => setTitle(ev.target.value)}/>
        <input type="text" name="" id="" placeholder="Summary"/>
        <input type="file" />
        <ReactQuill  value={content} modules={modules} formats={formats} />
        <button style={{marginTop:'10px'}}>Create Post</button>
        {/* <textarea name="" id="" cols={30} rows={10}></textarea> */}
    </form>
  )
}

export default CreatePost

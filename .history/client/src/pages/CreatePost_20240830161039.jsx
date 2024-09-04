import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const CreatePost = () => {
  return (
    <form>
        <input type="text" name="" id="" placeholder="Title"/>
        <input type="text" name="" id="" placeholder="Summary"/>
        <input type="file" />
        <ReactQuill/>
        <button style={{marginTop:'10px'}}>Create Post</button>
        {/* <textarea name="" id="" cols={30} rows={10}></textarea> */}
    </form>
  )
}

export default CreatePost

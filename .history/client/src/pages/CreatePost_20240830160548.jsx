import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const CreatePost = () => {
  return (
    <form>
        <input type="text" name="" id="" placeholder="Title"/>
        <input type="text" name="" id="" placeholder="Summary"/>
        <input type="file" />
        <ReactQuill/>
        {/* <textarea name="" id="" cols={30} rows={10}></textarea> */}
    </form>
  )
}

export default CreatePost

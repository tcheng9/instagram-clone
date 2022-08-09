import {Link} from 'react-router-dom';
import {storage} from '../firebase';
import {useState} from "react";
import {ref, uploadBytes} from "firebase/storage";

const AddPic = () => {

    const [imageUpload, setImageUpload] = useState(null);

    const uploadImage = () => {
       
      if (imageUpload == null) return;
      console.log('clicked');
      const imageRef = ref(storage);
      uploadBytes(imageRef, imageUpload).then(() => {
        alert("image uploaded");
      })
    }
    const onSubmit = (e) => {
      e.preventDefault();

    }

    return (
      <div>
        <h1>Hello from add pic page </h1>
        
        <Link to = "/"> Main page </Link>
      
      <div id = "picInputForm">
        
          <input type = "file" onChange = {(event) => {setImageUpload(event.target.files[0])}} />
          <input type = "text" name = "username" placeholder = "NAME" />
          <button onClick = {uploadImage}> Upload image </button>
        
      </div>
      </div>
    );
  };
  
  export default AddPic;
import {Link} from 'react-router-dom';
import {storage} from '../firebase';
import {useState, useEffect} from "react";
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
import { isReactNative } from '@firebase/util';

const AddPic = () => {

    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(storage, "images/");

    const uploadImage = () => {
      
      if (imageUpload == null) return;
      console.log('clicked');
      const imageRef = ref(storage, `images/${imageUpload.name}`);
      uploadBytes(imageRef, imageUpload).then((snaphsot) => {
        console.log("uploading");
        getDownloadURL(snaphsot.ref).then((url) => {
          setImageList((prev) => [...prev, url])
        })
        
      })
    }
    // const onSubmit = (e) => {
    //   e.preventDefault();

    // }

    // useEffect(() => {
    //   listAll(imageListRef).then((response) => {
    //     response.items.forEach((item) => {
    //       getDownloadURL(item).then((url) => {
    //         setImageList((prev) => [...prev, url]);
    //       });
    //     });
    //   });
    // }, []);

    return (
      <div>
        <h1>Hello from add pic page </h1>
        
        <Link to = "/"> Main page </Link>
      
      <div id = "picInputForm">
        
          <input type = "file" onChange = {(event) => {setImageUpload(event.target.files[0])}} />
          <input type = "text" name = "username" placeholder = "NAME" />
          <button onClick = {uploadImage}> Upload image </button>
        
      </div>

      {/* <div id = "imageList">
        {imageList.map((url) => {
          return <img src = {url} />
        })}
      </div> */}
      </div>
    );
  };
  
  export default AddPic;
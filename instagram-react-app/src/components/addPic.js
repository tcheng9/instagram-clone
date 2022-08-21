import {Link} from 'react-router-dom';
import {storage} from '../firebase';
import {useState, useEffect} from "react";
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
import { isReactNative } from '@firebase/util';


const AddPic = () => {

    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(storage, "images/");
    const [currFileName, setCurrFileName] = useState('');
    const [currImgUrl, setCurrImgUrl] = useState('');

    const uploadImage = (imgObjVal) => {
      
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

    const onSubmit = (e) => {
      e.preventDefault();
      // const elementsArray = [...e.target.elements[2].value];
      const elementsArray = [...e.target.elements];
      const formFileName = e.target.elements[2].files[0].name;
      setCurrFileName(formFileName);
      
      console.log(formFileName);

      getImgURL(formFileName)
    }

    
    const getImgURL = (imgName) => {
      //Reference firebase storage
      const storageRef = ref(storage);

      //Ref a specific folder in storage
      const imagesRef = ref(storage, "images/" + imgName);
      
      //Ref a specific file in said storage 
      const fileName = imgName;
      
      //get ref to specific image
      const spaceRef = ref(imagesRef, fileName);

      
      
      //Get public URL
      

      

    }
    // useEffect(() => {
      
    //   listAll(imageListRef).then((response) => {
    //     response.items.forEach((item) => {
    //       console.log(getDownloadURL(item));
    //       // getDownloadURL(item).then((url) => {
    //         // setImageList((prev) => [...prev, url]);
    //       });
    //     // });
    //   });
    // }, []);

    return (
      <div>
        <h1>Hello from add pic page </h1>
        
        <Link to = "/"> Main page </Link>
      
      {/* <div id = "picInputForm">
        
          <input type = "file" onChange = {(event) => {setImageUpload(event.target.files[0])}} />
          <input type = "text" name = "username" placeholder = "NAME" />
          <button onClick = {uploadImage}> Upload image </button>
        
      </div> */}

      <div id = "form">
        <form onSubmit = {onSubmit}> 
          {/* <label for = "title"> Title </label> */}
          <input type = "text" name = "title" placeholder = "Title"></input>
         
          {/* <label for = "comment"> Comment </label> */}
          <input type = "text" name = "comment" placeholder = "Comment"></input>
          
          {/* <label for = "imgUploader"> File to import </label> */}
          <input type = "file" name = "imgUploader" onChange = {(event) => {setImageUpload(event.target.files[0])}} />
        
          <button type = "submit" name = "submitBtn"> Post</button>
        </form>
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
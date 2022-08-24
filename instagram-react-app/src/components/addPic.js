import {Link} from 'react-router-dom';
import {storage} from '../firebase';
import {useState, useEffect} from "react";
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
// import { isReactNative } from '@firebase/util';
import {getDatabase, set} from 'firebase/database';
import {doc, setDoc} from "firebase/firestore";
import {collection, getDocs, addDoc} from "firebase/firestore";
import { firestoreDb } from '../firebase';
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';

const AddPic = () => {

    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(storage, "images/");
    const [currFileName, setCurrFileName] = useState('');
    const [currImgUrl, setCurrImgUrl] = useState('');
   
    
    
    const onSubmit = (e) => {
      e.preventDefault();
      // const elementsArray = [...e.target.elements[2].value];
      const elementsArray = [...e.target.elements];
      const formFileName = e.target.elements[2].files[0].name;
      setCurrFileName(formFileName);
      
      console.log(formFileName);
      //Function to upload the image
      uploadImage();
      
      //Wait for image to finish uploading
     
      //ISSUE: Sleep will let other functions run while we wait for image to upload
      
      setTimeout(function() {
        // //Get URL of image (by accessing DB and checking if it exists)
        getImgURL(formFileName);
        console.log(currImgUrl);
        // //Load info + img url to database
        dataToDB(e, currImgUrl);
      }, 30000)

      // //Get URL of image (by accessing DB and checking if it exists)
      // getImgURL(formFileName);
      
      // //Load info + img url to database
      // dataToDB(e, currImgUrl);
    

      // //After uploaded, get the image url
      // getImgURL(formFileName);
      

      // //After we have the image URL, we can 
      // dataToDB(e, currImgUrl);
    }

    const uploadImage = () => {
      
      if (imageUpload == null) return;
      
      const imageRef = ref(storage, `images/${imageUpload.name}`);
      uploadBytes(imageRef, imageUpload).then((snaphsot) => {
        console.log("uploading");
        getDownloadURL(snaphsot.ref).then((url) => {
          setImageList((prev) => [...prev, url])
        })
        
      })

      return "working";
    }

    
    
    const getImgURL = (imgName) => {
      //NOTE: storage is actually an imported function `const storage = getStorage()`;

      //Ref a specific file in storage
      const imagesRef = ref(storage, "images/" + imgName);

      //Get download URL and set to var
      getDownloadURL(imagesRef).then((url => {
        console.log(url);
        setCurrImgUrl(url);
        
      }))
      console.log("we're outside the function" + currImgUrl);
      return "working";
    }

    const dataToDB = (event, imgUrl) => {
      const colRef = collection(firestoreDb, "posts");
      console.log(imgUrl);
      addDoc(colRef, {
        caption: event.target.elements[1].value,
        pictureLink: event.target.elements[0].value,
        title: imgUrl
      })
      
      return "working";
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
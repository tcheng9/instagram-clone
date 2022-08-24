import {Link} from 'react-router-dom';
import {useState, useEffect} from "react";
import {storage} from "../firebase";
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
import { firestoreDb } from '../firebase';
import {getDocs, collection} from 'firebase/firestore';

const HomePage = () => {

const [imageList, setImageList] = useState([]);
const [photos, setPhotos] =  useState([]);

const imageListRef = ref(storage, "images/");

//Refercing DB collection
const colRef = collection(firestoreDb, 'posts');

//Get collection's data

getDocs(colRef)
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      photos.push({...doc.data(), id:doc.id});
    })
    console.log(photos);
  })
  .catch(err => {
    console.log(err.message);
  })



// useEffect(() => {
//   listAll(imageListRef).then((response) => {
//     response.items.forEach((item) => {
//       getDownloadURL(item).then((url) => {
//         setImageList((prev) => [...prev, url]);
      
//       })
//     })
//   });
// }, [])


// I think useEffect and setImageList is calling duplicates

  return (
    <div>
      <h1>Hello from Main/Home page of instagram</h1>

      <ul>
      <Link to = "/"> Main page </Link>
    </ul>
    <div id = "postContainer">
        <div id = "imgList">
          {imageList.map((url) => {
            return( 
            <div>
              <h1>Title </h1> 
              <img src = {url}/>
              <p> comment placeholder </p>
            </div>
              )
          })}
        </div>
     
      </div>
    </div>
  );
};
  
  export default HomePage;
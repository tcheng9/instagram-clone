import {Link} from 'react-router-dom';
import {useState, useEffect} from "react";
import {storage} from "../firebase";
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
import { firestoreDb } from '../firebase';
import {getDocs, collection} from 'firebase/firestore';
import { render } from '@testing-library/react';

const HomePage = () => {

const [imageList, setImageList] = useState([]);
const [photos, setPhotos] =  useState([]);

const imageListRef = ref(storage, "images/");

//Refercing DB collection
const colRef = collection(firestoreDb, 'posts');

//Get collection's data
useEffect(() => {
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

},[])
// getDocs(colRef)
//   .then((snapshot) => {
//     snapshot.docs.forEach((doc) => {
//       photos.push({...doc.data(), id:doc.id});
//     })
//     console.log(photos);
//   })
//   .catch(err => {
//     console.log(err.message);
//   })



// useEffect(() => {
//   listAll(imageListRef).then((response) => {
//     response.items.forEach((item) => {
//       getDownloadURL(item).then((url) => {
//         setImageList((prev) => [...prev, url]);
      
//       })
//     })
//   });
// }, [])

const loadPage = (photos) => {
  
  {photos.map((photo) => {
    return( 
        
      <ul key = {photo.id}>
        <h1> {photo.title} </h1>
      

        
        <img src = {photo.pictureLink} />
        
        <p> {photo.caption} </p>
      </ul>
      

      )
  })} 
}

useEffect(() => {
  loadPage(photos);
}, []);

// I think useEffect and setImageList is calling duplicates

  
  return (
    <div>
      <h1>Hello from Main/Home page of instagram</h1>

      <ul>
      <Link to = "/"> Main page </Link>
    </ul>
    <div id = "postContainer">
        <div id = "imgList">
          {photos.map((photo) => {
           
            return( 
               
              <ul key = {photo.id}>
                
                <h1> {photo.title} </h1>
              
        
               
                <img src = {photo.pictureLink} />
                
                <p> {photo.caption} </p>
              </ul>
             

              )
              
        })}
        </div>
     
      </div>
    </div>
  );
        
};
  
  export default HomePage;
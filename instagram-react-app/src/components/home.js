import {Link} from 'react-router-dom';
import {useState, useEffect} from "react";
import {storage} from "../firebase";
import {ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";

const HomePage = () => {

const [imageList, setImageList] = useState([]);

const imageListRef = ref(storage, "images/");

useEffect(() => {
  listAll(imageListRef).then((response) => {
    response.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        setImageList((prev) => [...prev, url]);
      
      })
    })
  });
}, [])


// I think useEffect and setImageList is calling duplicates

  return (
    <div>
      <h1>Hello from Main/Home page of instagram</h1>

      <ul>
      <Link to = "/"> Main page </Link>
    </ul>

    <div id = "imgList">
      {imageList.map((url) => {
        return <img src = {url}/>
      })}
    </div>
    </div>
  );
};
  
  export default HomePage;
import Navbar from './Navbar'
import firebase from "firebase/compat/app";
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { auth } from "./firebase";
import { AuthContext } from './Auth';
import { useHistory } from 'react-router-dom';
const Add = () => {
    const [name, setName] = useState("");
    const owner =useContext(AuthContext)
    const history =useHistory();
  const [desc, setDesc] = useState("");
  const ref =firebase.firestore().collection("medium");

    const addData = (e) => {
        const user = owner;
        e.preventDefault();
    
        const newData = {
          name,
          desc,
          id: uuidv4(),
          user
        };
    
        ref
          .doc(newData.id)
          .set(newData)
          .catch((err) => {
            console.log(err);
          });
        setName("");
        setDesc("");
        history.push("/")
      };





    return ( 
        <>
        <Navbar />
        <div className="container">
            
        <form>
  <div className="mb-3">
    <label for="name" class="form-label">Topic</label>
    <input type="name" class="form-control" id="topic" aria-describedby="emailHelp " style={{height:"50px"}}  value={name}
          onChange={(e) => setName(e.target.value)} />
   
  </div>
  <div class="mb-3">
    <label for="Description" class="form-label">Description</label>
    <textarea class="form-control" aria-label="With textarea" style={{height:'200px'}}    value={desc}
          onChange={(e) => setDesc(e.target.value)}></textarea>
  </div>
  
  <button type="submit" class="btn btn-dark" onClick={(e) => addData(e)}>Submit</button>
</form>
        </div>
        </>
     );
}
 
export default Add;

import { useParams } from "react-router-dom";
import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import Avatar from "react-avatar";
import Navbar from './Navbar'
import Loading from "./Loading";
import {BsPencilSquare } from "react-icons/bs";
const Info = () => {
    const {id} =useParams()
    const ref =firebase.firestore().collection("medium");
    const [description,setDescription] =useState([]);
    const [loading,setLoading]=useState(true)

    useEffect(()=>{

      setTimeout(()=>{

     
        ref
        .where("id","==",id)
       
        
        .onSnapshot((querySnapshot)=>{
         const items=[]
         querySnapshot.forEach((doc)=>{
             items.push(doc.data())
         })
         setDescription(items);
         setLoading(false);
        })
      },2000)
    },[])
    return (
      
      <>
       
       {loading && <Loading />}

       {!loading && <Navbar />}
       
       
      
     <div className="container-fluid">
     
     
     {!loading && 
           

         <div className="container-fluid d-flex flex-row p-2">
          <Avatar src ={auth?.currentUser?.photoURL} round={true} size={45} />
           <h6 style={{marginTop:"10px", marginLeft:"10px"}}>{auth?.currentUser?.displayName}</h6>

         </div>
}
        
         <div className="container-fluid">
       {description.map(data=>{
        return(
            <li key={data.id} style={{listStyle:"none",marginTop:"30px"}}>
              <h2 style={{fontStyle:"monaco,monospace",fontWeight:"bolder"}}>{data.name}</h2>
              
              <p >{data.desc}</p>
              
             
            </li>
        )
       })}
       </div>
     </div>
     
       </>
    );
}
 
export default Info;
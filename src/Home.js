import Navbar from './Navbar'
import { IoHomeOutline } from "react-icons/io5";
import {IoSearchOutline} from 'react-icons/io5'
import {IoBookmarksOutline} from 'react-icons/io5'
import { auth } from './firebase';
import Avatar from "react-avatar";
import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from 'react-router-dom';

const Home = () => {
    const ref =firebase.firestore().collection("medium");
   const [blogs,setBlogs]=useState([])
   const [photo,setPhoto]=useState();
   const history=useHistory();
  useEffect(()=>{

   ref
   .where("user", "==", auth?.currentUser?.uid)
   
   
   .onSnapshot((querySnapshot)=>{
    const items=[]
    querySnapshot.forEach((doc)=>{
        items.push(doc.data())
    })
    setBlogs(items);
   })
   setPhoto(auth?.currentUser?.photoURL)
  })


   const handleInfo=(items)=>{
    history.push(`/info/${items.id}`);
   }


    return ( 
  <>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
        <Navbar />
        <nav class="navbar fixed-bottom navbar-light bg-light shadow-lg bg-grey bg-body rounded">
  <div className='container'>
  <a class="navbar-brand" href="#">
  <IoHomeOutline size={25} color="grey"/>
  
  </a>
  <a class="navbar-brand" href="#">
  <IoSearchOutline size={25} color="grey"/>
    </a>
    <a class="navbar-brand" href="#">
  <IoBookmarksOutline size={25} color="grey"/>
    </a>
    
    <Avatar src={photo} round={true} size={25} />
  
</div>
</nav>



      <div class="container-fluid" >
         <h2   style={{fontWeight: "bolder",fontSize: '35px',marginLeft:"15px"}}>{auth?.currentUser?.displayName}</h2>
        <br /> <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link " aria-current="page" href="#" style={{color:"black"}}>Home</a>
  </li>
  <li class="nav-item" >
    <a class="nav-link "  href="#" style={{color:'grey'}}>Lists</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" style={{color:'grey'}}>About</a>
  </li>
  
</ul>
<br /><br />

     <div className='container-sm'> 
     {blogs.map(items=>{
        return(
            <li key ={items.id} style={{listStyle:'none',marginLeft:"-30px"}}>
              <div className="row">
                <div className="col-md-12 sm-6">

               

                <div class="card shadow-sm bg-black" style={{margin:"20px",padding:"20px",border:"1px solid transparent" ,cursor:"pointer"}} onClick={()=>handleInfo(items)}>
              
              <div class="card-body">
             <h5 class="card-title">{items.name}</h5>
                <p class="card-text " style={{whiteSpace:"nowrap", textOverflow: "ellipsis",overflow: "hidden",width:"250px",marginBottom:"5px",paddingTop:'10px'}}>{items.desc}</p>
              
                </div>
                </div>
                </div>
                </div>
            </li>
        )
     })}
     </div>
      
      
     </div>
      </>
     );
}
 
export default Home;
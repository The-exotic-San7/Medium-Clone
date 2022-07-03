import { auth } from "./firebase";
import {BsPencilSquare } from "react-icons/bs";
import Home from "./Home";
import { useHistory } from "react-router-dom";



const Nav = () => {
    const history=useHistory();
    const handleClick = () => {
        history.push("/add")
    }

    const handleGo=() => {
        history.push('/')
    }

    const handleSignout=() => {
        auth.signOut();
        history.push("/")
    }

    return ( 
        <>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
    

 

   
<nav class="navbar sticky-top  bg-dark  shadow-sm p-3 mb-5 bg-white rounded "  >
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968885.png" alt="Medium" width="40" height="40" onClick={handleGo} />
    </a>
    
    <div class="d-flex ">
   
    
     <BsPencilSquare size={25}  style={{position:'relative',left:'-30px',bottom:'-5px',cursor:'pointer'}} onClick={handleClick}/>
     <button type="submit" class=" d-none d-lg-block btn btn-dark" style={{position:'relative',left:'-15px'}}  ><b style={{fontFamily:"Monaco,monospace"}}>Get unlimited Access</b></button>
     <button type="submit" class=" d-block d-lg-none d-md-none btn btn-dark" style={{width:"100px",position:'relative',left:'-15px'}} ><b style={{fontFamily:"Monaco,monospace"}}>Upgrade</b></button>
     
     <a href="" style={{textDecoration: 'none' ,color:"black",position:"relative",bottom:'-5px'}} onClick={handleSignout}>Logout</a>
     
  </div>
  </div>
</nav>




</>   
    )
}
 
export default Nav;
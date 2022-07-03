import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { auth } from "./firebase.js";
import { FcGoogle} from "react-icons/fc";


const SignIn = () => {
    const handleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      };

    return ( 
      <>
       
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

       
        <img src="https://miro.medium.com/max/1838/1*5ayVKXm53V6C-mFafTrdIA.png"  className="img-fluid"/>
      
  
      
       <div className="text-center">
        <button  className="d-sm-block d-lg-none d-md-none" onClick={handleLogin} style={{marginTop:"200px",width:"15rem",border:"1px solid lightgrey",borderRadius:"30px",height:"50px",backgroundColor:"white",fontSize:"15px",fontWeight:"bold"}}><span><FcGoogle size={25} style={{marginLeft:"-20px"}}/></span><span style={{marginLeft:"15px"}}>Sign in with Google</span></button>
        </div>
        <div className="text-end">
        <button  className="d-none d-lg-block d-md-block" onClick={handleLogin} style={{marginLeft:"78rem",marginTop:"-300px",width:"15rem",border:"1px solid lightgrey",borderRadius:"30px",height:"50px",backgroundColor:"white",fontSize:"15px",fontWeight:"bold"}}><span><FcGoogle size={25} style={{marginLeft:"-20px"}}/></span><span style={{marginLeft:"15px"}}>Sign in with Google</span></button>
        </div>
        
      </>

   

     );
}
 
export default SignIn;
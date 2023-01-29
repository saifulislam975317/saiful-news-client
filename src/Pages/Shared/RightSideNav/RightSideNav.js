import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Carousels from '../Carousels/Carousels';


const RightSideNav = () => {
    const {signInWithGoogle} = useContext(AuthContext)
    const provider = new GoogleAuthProvider()
    const handleGoogleSignIn = ()=>{
        signInWithGoogle(provider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div>
            <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
            <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>

        <div className='mt-3'>
          <h5>Finds on</h5>
          <ListGroup>
      <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaWhatsapp/> Whats'app</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
      <ListGroup.Item className='mb-2'> Terms and condition</ListGroup.Item>
    </ListGroup>  
        </div>
        <div>
            <Carousels></Carousels>
        </div>
        </div>
        
    );
};

export default RightSideNav;
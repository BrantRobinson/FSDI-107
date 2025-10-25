import './NotFound.css'
import { Link } from 'react-router-dom'
import { IconFileSad } from '@tabler/icons-react';

function NotFound() {
  return (
    <div className='main-content text-center'>

        <IconFileSad stroke={1} size={80} color='red'/>
        <h1>404 Page Not Found</h1>
        
        <p className='error-message'>Oops! The page you are looking for doesn't exist.</p>
        
        
        <Link className='btn btn-dark' to={"/"}>Go Home</Link>

    </div>
  )
}

export default NotFound
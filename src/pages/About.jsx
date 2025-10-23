import { useState } from 'react';
import './About.css';

function About() {
  const [isEmailVisible, setIsEmailVIsible] = useState(true)

  // function hideEmailInformation() {
  //   console.log("Clicking hide email")
  //   setIsEmailVIsible(false)
  // }

  // function showEmailInformation() {
  //   console.log("showing email")
  //   setIsEmailVIsible(true)
  // }



  return (
    <div className="main-content">
        <h1>About Page</h1>

        {
          isEmailVisible 
          ? <p>brantjrobinson@gmail.com</p> 
          : <p>Click the button below to see my email address</p>
        }

        

        <button 
          className='btn btn-dark' 
          onClick={() => setIsEmailVIsible(!isEmailVisible)}>
          {isEmailVisible 
            ? 'Hide Email' 
            : 'Show Email'}
        </button>

    </div>
  );
}

export default About;

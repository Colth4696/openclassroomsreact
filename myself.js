import { Link } from "react-router-dom";
import React, { Component, Fragment } from 'react';  




	
class Myself extends Component {
    state={
        info:  "My name is Colt Hafer. I enjoy creating bold, colorful, and dynamic websites. As of this moment I am a student at Openclassrooms, and I am following the Full-Stack Web Development path. I plan to gradutate with a bachelors diploma in Full-Stack Web Development by Janurary of 2019. I have also taken some college courses focusing on Photoshop and Adobe Illustrator. "
    }

  render() {
  return(
    <div >
    <h1>About</h1>
<p>{this.state.info}</p>
</div> 
  )
  }
}
export default Myself;


import React from 'react'
import Navbar from './Navbar';

// Header
//  -logo
//  -navbar elements
//  - download button 
const Header = () => {

    const handleDownload=()=>{
        console.log("download clicked");
    }
    return (
        <div className="w-full flex justify-between  shadow-md">
                <div className="flex justify-between">
                    <img  alt="logo" src="Group.png"/>
                    <Navbar/>
                </div>
               
                
           
            
            <button className="bg-black text-white" onClick={handleDownload}>Download</button>
            

        </div>
    )
}
export default Header;

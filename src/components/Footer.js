import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="text-sm py-2 sm:text-lg flex mt-4  justify-between sm:p-4">
                <div>
                    <img className="w-12" src="Group.png" alt="logo" />

                    <div className="sm:flex mt-4">
                        <img src="Vector.png" />
                        <p>+9121318661</p>
                    </div>

                    <div className="sm:flex mt-4">
                        <img src="email.png" />
                        <p>xyz@gmail.com</p>
                    </div>





                </div>

                <div  >
                    <h1 className="font-bold">Links</h1>

                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Bookings</a></li>
                        <li><a href="/">Blog</a></li>

                    </ul>


                </div>
                <div>
                    <h1 className="font-bold">Legel</h1>
                    <ul>
                        <li>Term of Use</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Ploicy</li>
                    </ul>

                </div>
                <div>
                    <h1 className="font-bold" >Product</h1>
                    <ul>
                        <li>Take Tour</li>
                        <li>Live Chat</li>
                        <li>Reveiws</li>
                    </ul>

                </div>
                <div >
                    <h1 className="font-bold">Newsletter</h1>
                    <ul>
                        <li>Stay Up to Date</li>
                    </ul>
                    <div>
                        <input className="shadow-md w-24 sm:w-32 sm:p-2" placeholder="Your email"></input>
                        <button className="bg-black text-white p-2" >Subscribe</button>
                    </div>

                </div>

            </div>
            <div class="text-center text-xs py-4">
                &copy; 2024 Mood Vikram. All rights reserved.
                <span class="font-mono text-gray-500">Made with Tailwind CSS</span>
            </div>
        </>
    )
}
export default Footer;

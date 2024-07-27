import { PackageOpen } from 'lucide-react';
// import LoginForm from './LoginForm';

import Popup from 'reactjs-popup';

const Navbar = () => {


    return (
        <>
            <div className="nav-body">
                <div className="h-15 w-full bg-white sticky top-0 shadow-xl">
                    <div className='h-15 w-full flex'>
                        <div class="h-15 flex justify-end items-center">
                            <PackageOpen strokeWidth={1.5} style={{ height: '5vh', width: '5vw', color: '#1769ed' }} />
                        </div>
                        <div className='h-15 w-[25vw] flex text-[#1769ed] text-4xl font-semibold font-dancing-script justify-start items-center'>
                            <span>DvaraL</span>
                        </div>
                        <div className='h-15 w-[60vw] flex justify-end items-center list-none flex-row gap-[2vw]'>
                            <li className='text-xm font-medium font-poppins cursor-pointer hover:text-[#4285F4]'>Content</li>
                            <li className='text-xm font-medium font-poppins cursor-pointer hover:text-[#4285F4]'>Content</li>
                            <li className='text-xm font-medium font-poppins cursor-pointer hover:text-[#4285F4]'>Content</li>
                            <li className='text-xm font-medium font-poppins cursor-pointer hover:text-[#4285F4]'>Content</li>
                            <li className='text-xm font-medium font-poppins cursor-pointer hover:text-[#4285F4]'>Content</li>
                        
                        </div>
                        <div className='h-[9vh] w-[10vw] flex justify-center items-center'>
                            {/* <button  onClick={handleLoginClick} className='login-btn'>Log In</button> */}
                            <Popup trigger = {<button className='h-[6vh] w-[6vw] text-max-sm font-poppins font-medium bg-white cursor-pointer border border-black rounded-[2px] hover:bg-[#efedede4]'> Sign In </button>} modal nested overlayStyle={{ backgroundColor: 'rgba(128, 128, 128, 0.3)' }} >
                                {
                                    close => (
                                        <div className='modal'>
                                            <div className='content'>
                                            {/* <div>
                                                <button onClick=
                                                    {() => close()}>
                                                    Close modal
                                                </button>
                                            </div> */}
                                                {/* <LoginForm/> */}
                                            </div>
                                        </div>
                                    )
                                }
                            </Popup>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar;
import React from 'react';

const Navbar1 = ({ onClick }) => {
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light' style={{ float: 'left', marginLeft: '45%', marginTop: '3%', backgroundColor: 'palegreen', cursor: 'pointer' }}>
                <ul className='navbar-nav m-auto'>
                    <li className='nav-item'>
                        <span className=" "  onClick={onClick}>
                            Student Info
                        </span>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar1;

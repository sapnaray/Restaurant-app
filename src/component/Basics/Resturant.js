import React, { useState } from 'react';

import './style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';
const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu)
    const filterItem=(category)=>{
        const updatedList=Menu.filter((curElem)=>{
            return curElem.category===category;
        });
        setMenuData(updatedList);
    }
    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#"><img src="./images/hotel.jpg" className="logo"></img></a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#" onClick={()=>filterItem('breakfast')}>Breakfast</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" onClick={()=>filterItem('lunch')}>Lunch</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" onClick={()=>filterItem('dinner')}>Dinner</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" onClick={()=>filterItem('evening')}>Evening</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" onClick={()=>setMenuData(Menu)}>All</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" onClick={()=>filterItem('other')}>Other</a>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant

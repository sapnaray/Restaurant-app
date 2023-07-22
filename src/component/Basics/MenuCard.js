import React from 'react'

const MenuCard = ({ menuData }) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">


                        <div className="row">
                            {menuData.map((curElem) => {
                                return (
                                    <>
                                        <div className="col-md-4">
                                            <div className="card-body">
                                                <div className="card" key={curElem.id}>
                                                    <span className="numberCircle">{curElem.id}</span>
                                                    <span className="head mt-2">{curElem.name}</span>
                                                    <h3 className="heading mt-2">{curElem.category}</h3>
                                                    <p className="para ">{curElem.description}</p>
                                                    <span className="card-text">READ</span>
                                                    <img src={curElem.image} className="img-fluid mt-2" alt="..." />
                                                    <a href="" className="link">Order Now</a>
                                                    <h5 className="text-center">{curElem.price}</h5>
                                                </div>
                                            </div>

                                        </div>

                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default MenuCard

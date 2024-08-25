import React from 'react'
import { Investdata } from '../Data/Data'
function Invester() {
    return (

        <>
            {Investdata.map((Investdata1, mnlott7) => (

                <div className="col-xl-3 col-md-6 my-3 text-center" key={mnlott7}>
                    <div className=" invedtercard">
                        <div className="image">
                            <img src={Investdata1.img11} alt="" />
                        </div>
                        <div className="contect">
                         <h3>{Investdata1.text1}</h3>
                         <p>{Investdata1.text2}</p>
                        </div>

                    </div>
                </div>

            ))}
        </>
    )
}

export default Invester

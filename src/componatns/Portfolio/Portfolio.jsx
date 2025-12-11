import React from 'react'
import logo1 from  "../../assets/Images/poert1.png"
import logo2 from  "../../assets/Images/port2.png"
import logo3 from  "../../assets/Images/port3.png"

export default function Portfolio() {
  return (<>

      <div className=' Portfolio-section py-5 w-100 text-center vh-100'>
        <h2 className='text-2 text-dark py-2 fs-2 fw-bold fw-italic position-relative'>PORTFOLIO COMPONENT</h2>  
        <div className="container">
             <div className="row py-5 g">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                  <img className='w-100' src= {logo1} alt="" />
              </div>
            </div>
             <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                  <img className='w-100' src={logo2} alt="" />
              </div>
            </div>
             <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                  <img className='w-100' src={logo3} alt="" />
              </div>
            </div>
                <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                  <img className='w-100' src={logo3} alt="" />
              </div>
            </div>
             <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                  <img className='w-100' src={logo2} alt="" />
              </div>
            </div>
             <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                  <img className='w-100' src={logo3} alt="" />
              </div>
            </div>
        </div>
        </div>
     </div>
       
    </>
  )
}

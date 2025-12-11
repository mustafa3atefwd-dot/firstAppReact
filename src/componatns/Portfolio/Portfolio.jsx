import React from 'react'

export default function Portfolio() {
  return (<>

      <div className=' Portfolio-section py-5 w-100 text-center vh-100'>
        <h2 className='text-2 text-dark py-2 fs-2 fw-bold fw-italic position-relative'>PORTFOLIO COMPONENT</h2>  
        <div className="container">
             <div className="row py-5 g">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                  <img className='w-100' src=".\src\Images\poert1.png" alt="" />
              </div>
            </div>
             <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                  <img className='w-100' src=".\src\Images\port2.png" alt="" />
              </div>
            </div>
             <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                  <img className='w-100' src=".\src\Images\poert1.png" alt="" />
              </div>
            </div>
                <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                  <img className='w-100' src=".\src\Images\port3.png" alt="" />
              </div>
            </div>
             <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                  <img className='w-100' src=".\src\Images\port2.png" alt="" />
              </div>
            </div>
             <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                  <img className='w-100' src=".\src\Images\port3.png" alt="" />
              </div>
            </div>
        </div>
        </div>
     </div>
       
    </>
  )
}

import React from 'react'

export default function Contact() {
  return (<>
      <div className='contact-section py-5 w-100 text-center py-4 vh-100'>
        <h2 className='text-2 text-dark py-2 fs-2 fw-bold fw-italic position-relative'>CONTACT COMPONENT</h2>
        <div className="container py-5">
          <div className="row d-flex justify-content-center py-5">
            <div className=" col-md-6 mb-3">
              <div className='w-100'>
                <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="user name" />
              </div>
            </div>
              <div className=" col-md-6 mb-3">
              <div className='w-100'>
                <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="User Age" />
              </div>
            </div>
              <div className=" col-md-6 mb-3">
              <div className='w-100'>
                <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="E-mail" />
              </div>
            </div>
              <div className=" col-md-6 mb-3">
              <div className='w-100'>
                <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Password" />
              </div>
            </div>
            <button className="btn mt-4 text-white w-25" style={{backgroundColor: '#1abc9c'}}> send Message </button>
          </div>
        </div>

      </div>
    </>
  )
}

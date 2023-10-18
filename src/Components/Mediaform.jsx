import React from 'react'

import { useNavigate } from 'react-router-dom';


const Mediaform = () => {



  const navigate = useNavigate()

  const handlesubmit = () => {
    setTimeout(() => {
      navigate(-1)
    }, 3000)
  }

  const handleback = () => {
    navigate(-1)
  }

 

  return (
    <div className="container textform">
      <p>Create Text & Media</p>
      <div className="heading">
        <div className="head1">
          <div className="form head">
            <label htmlFor="Email">Heading 01</label>
            <input type="text" className='input1' placeholder='Add a heading that would make users intrested' />
          </div>

          <div className="form">
            <label htmlFor="Email">Heading 01</label>
            <input type="text" className='input1' placeholder='Add a heading that would make users intrested' />
          </div>
        </div>
        <div className="form description">
          <label htmlFor="Description">Description 01</label>
          <input type="text" className='input2' placeholder='Add primary test to help users understand more about your products services or offers' />
        </div>
      </div>

      <div className="head2">
        <div className="form form1">
          <label htmlFor="Email">Landscape Marketing Image (1.9:1)</label>
          <input className='input3' type="text" placeholder='Add the URL of the image you want to use for the ad' />
        </div>

        <div className="form form1">
          <label htmlFor="Email">Portrait Marketing Image (4:5)</label>
          <input className='input3' type="text" placeholder='Add the URL of the image you want to use for the ad' />
        </div>

        <div className="form form1">
          <label htmlFor="Email">Square Marketing Image (1:1)</label>
          <input className='input3' type="text" placeholder='Add the URL of the image you want to use for the ad' />
        </div>
      </div>

      <div className="form head3">
        <label htmlFor="">Video URL</label>
        <input type="text" className='input4' placeholder='Add the URL of the image you want to use for the ad' />
      </div>

      <div className="head4">
        <div className="form form1">
          <label htmlFor="">Business Name</label>
          <input className='input5' type="text" placeholder='Add your Business name' />
        </div>

        <div className="form form1">
          <label htmlFor="">Button Label</label>
          <input className='input5' type="text" placeholder='Select a label that best suitsyour ad' />
        </div>
      </div>

      <div className="form head5">
        <label htmlFor="">Website URL</label>
        <input className='input6' type="text" placeholder='Add the URL of the landing page you want to redirect users to' />
      </div>

      <div className="bttn">
        <button className="back" onClick={handleback}>Back</button>

        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" onClick={handlesubmit}> Submit </button>

      </div>






      <>{ /* The Modal */}
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">

              { /* Modal Header */}

              { /* Modal body */}
              <div className="modal-body">
                <h6>Submitted..</h6>
              </div>

              { /* Modal footer */}


            </div>
          </div>
        </div></>

    </div>


  )
}

export default Mediaform
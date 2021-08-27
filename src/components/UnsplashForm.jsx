import React, { useState } from 'react'

const UnsplashForm = ({ getUnsplahPhoto }) => {
  const [formFields, setFormFields] = useState('')

    
  const handleSubmit = (event) => {
    event.preventDefault()
    setFormFields(event.target.value)
    getUnsplahPhoto(formFields)
  }
  
  return (
    <div>
      <section className="section section-white section-search">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-5 ml-auto mr-auto text-center">
              <form role="search" className="form-inline search-form" onSubmit={handleSubmit}>
                <div className="input-group border">
                  <span
                    className="input-group-addon addon-xtreme no-border"
                    id="basic-zhy">
                    <i className="fa fa-search"> </i>
                  </span>
                  <input
                    type="text"
                    className="form-control input-xtreme no-border"
                    value={formFields}
                    onChange={(e) => setFormFields(e.target.value)}
                    placeholder="Find Stuff"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UnsplashForm

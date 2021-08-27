import React from 'react'

const Photo = ({ photo }) => {
    console.log(photo)
    const { urls, user, likes, links, description, alt_description} = photo
  return (
    <div className="col-md-4">
      <div className="card card-blog">
        <div className="card-image">
          <a href="/">
                      <img className="img img-raised" src={ urls.small} />
          </a>
        </div>
        <div className="card-body">
          <h6 className="card-category text-info">Enterprise</h6>
          <h5 className="card-title">
                      <a href="javascript:;">{ alt_description}</a>
          </h5>
          <p className="card-description">
                      {description}  <br />
          </p>
          <hr />
          <div className="card-footer">
            <div className="author">
              <a href="javascript:;">
                <img
                                  src={ user.photos}
                  alt="..."
                  className="avatar img-raised"
                />
                              <span>{ user.username}</span>
              </a>
            </div>
            <div className="stats">
              <i className="fa fa-clock-o" aria-hidden="true"></i> 5 min read
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Unsplash = ({ data }) => {
  console.log(data)
  if (data === null) {
    return <p> Loading.... </p>
  } else if (data.errors) {
    return (
      <div>
        <div> {data.errors[0]} </div> <div> PS: Make sure to set your access token! </div>{' '}
      </div>
    )
  } else {
    return (
      <div className="blog-2 section section-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-10 ml-auto mr-auto">
              <h2 className="title">Latest Searches</h2>
              <br />
              <div className="row">
                {data.response.results.map((photo) => (
                    <Photo photo={photo} key={photo.id}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Unsplash

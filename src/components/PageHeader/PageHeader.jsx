import React from 'react'

const PagerHeader = ({title="Unsplash Food Junkies", date="Search all the delicious food that will make you cheat on your diet", url}) => {
    return (
        <div className="page-header" data-parallax="true" style={{backgroundImage: `url(${url})`, transform: `translate3d(0px, 0px, 0px)`}}>
            <div className="filter"></div>
            <div className="content-center">
                <div className="container">
                    <div className="motto">
                        <h1 className="title">{title}</h1>
                        <h3 className="description">{date}</h3>
                        <br/>

                            <button type="button" className="btn btn-outline-neutral btn-round">Only Foods Fans</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PagerHeader;

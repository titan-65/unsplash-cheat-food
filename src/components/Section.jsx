import React from 'react';

const Section = () => {
    return (
        <div className="section text-center landing-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ml-auto mr-auto">
                        <h2 className="title">The #Agenda</h2>
                        <h5>Code Xp Conference is the first conference that bring developers to young persons not yet
                            exposed to how coding can change their lives.</h5>
                        <br/>
                            <a href="#paper-kit" className="btn btn-danger btn-fill btn-round">See Agenda</a>
                    </div>
                </div>
                <br/><br/>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="info">
                                <div className="description">
                                    <h4 className="info-title">HTML:5 Starter</h4>
                                    <p className="description">No matter which programming discipline you want to do,
                                        everything begins with HTML. Most Frontend frameworks exist based on the
                                        fundamentals concepts of HTML.</p>
                                    <a href="#pkp" className="btn btn-link btn-danger">See more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info">
                                <div className="description">
                                    <h4 className="info-title">New Ideas: javascript Intro</h4>
                                    <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.
                                        Javascript is the most popular lanaguage in the world and is ever evolving.</p>
                                    <a href="#pkp" className="btn btn-link btn-danger">See more</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Section;

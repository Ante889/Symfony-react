import React, {Component} from 'react';

function Slideshow (props) {
    return (
        <div>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">{props.title}</h1>
                        <p className="lead text-muted">{props.description}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Slideshow;
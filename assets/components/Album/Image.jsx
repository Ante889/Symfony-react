import React, {Component} from 'react';

function Image (props) {
    return (
        <div>
            <div className="col">
                <div className="card shadow-sm">
                    <img src={props.image} alt=""/>
                    <div className="card-body">
                        <p className="card-text">{props.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button"
                                        className="btn btn-sm btn-outline-secondary">View
                                </button>
                                <button type="button"
                                        className="btn btn-sm btn-outline-secondary">Edit
                                </button>
                            </div>
                            <small className="text-muted">{props.views}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Image;
import React, {Component} from 'react';

class Heading extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="navbar navbar-dark bg-dark shadow-sm">
                        <div className="container">
                            <a href="#" className="navbar-brand d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                                     stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                     stroke-width="2" aria-hidden="true" className="me-2" viewBox="0 0 24 24">
                                    <path
                                        d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                                    <circle cx="12" cy="13" r="4"/>
                                </svg>
                                <strong>Album</strong>
                            </a>
                            <div className="dropdown">
                                <button className="navbar-toggler" type="button" id="dropdownMenu2"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
                                    <button className="dropdown-item" type="button">Action</button>
                                    <button className="dropdown-item" type="button">Another action</button>
                                    <button className="dropdown-item" type="button">Something else here</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Heading;
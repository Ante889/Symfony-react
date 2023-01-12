import './styles/app.css';
import './bootstrap';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
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
                <main>
                    <section className="py-5 text-center container">
                        <div className="row py-lg-5">
                            <div className="col-lg-6 col-md-8 mx-auto">
                                <h1 className="fw-light">Album example</h1>
                                <p className="lead text-muted">Something short and leading about the collection
                                    below—its contents, the creator, etc. Make it short and sweet, but not too short so
                                    folks don’t simply skip over it entirely.</p>
                                <p>
                                    <a href="#" className="btn btn-primary my-2">Main call to action</a>
                                    <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="album py-5 bg-light">
                        <div className="container">

                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                             xmlns="http://www.w3.org/2000/svg" role="img"
                                             aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                                             focusable="false"><title>Placeholder</title>
                                            <rect width="100%" height="100%" fill="#55595c"/>
                                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                                        </svg>

                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting text below as
                                                a natural lead-in to additional content. This content is a little bit
                                                longer.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <button type="button"
                                                            className="btn btn-sm btn-outline-secondary">View
                                                    </button>
                                                    <button type="button"
                                                            className="btn btn-sm btn-outline-secondary">Edit
                                                    </button>
                                                </div>
                                                <small className="text-muted">9 mins</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>

                <footer className="text-muted py-5">
                    <div className="container">
                        <p className="float-end mb-1">
                            <a href="#">Back to top</a>
                        </p>
                        <p className="mb-1">Album example is &copy; Bootstrap, but please download and customize it for
                            yourself!</p>
                        <p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a
                            href="../getting-started/introduction/">getting started guide</a>.</p>
                    </div>
                </footer>
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))
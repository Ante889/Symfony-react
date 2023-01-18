import React, {Component} from 'react';

function Footer() {
    return (
        <div>
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

export default Footer;
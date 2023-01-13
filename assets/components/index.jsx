import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Heading from "./Heading";
import Footer from "./Footer";
import Album from "./Album/Album";

class Index extends Component {
    render() {
        return (
            <div>
                <Heading />
                <Album />
                <Footer />
            </div>
        );
    }
}

export default Index;
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Heading from "./Heading";
import Footer from "./Footer";

class Index extends Component {
    render() {
        return (
            <div>
                <Heading />
                <Footer />
            </div>
        );
    }
}

export default Index;
import React, {useState} from 'react';
import axios from "axios";

function Login() {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    function changeValue(event) {
        const {name, value} = event.target;

        setData(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function submit(event) {
        const test = { title : 'test'};
        axios({
            method: 'post',
            url: '/login',
            data: test
        });
        // axios.post('/login', test,)
        //     .then(respone => {
        //         console.log(respone.data)
        //     }).catch(error => {
        //         console.error(error)
        // })

        event.preventDefault();
    }

    return (
        <div>
            <div className="login-form">
                <form onSubmit={submit}>
                    <h2 className="text-center">Log in</h2>
                    <div className="form-group">
                        <input type="text" onChange={changeValue} className="form-control" value={data.email}
                               placeholder="Email" required="required" name="email" />
                    </div>
                    <div className="form-group">
                        <input type="password" onChange={changeValue} className="form-control" value={data.password}
                               placeholder="Password" required="required" name="password" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">Log in</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
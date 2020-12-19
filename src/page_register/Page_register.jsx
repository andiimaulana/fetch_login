import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import "./Page-register.css"

const Page_register = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        password2: "",
    });
    useEffect(() => {
        if (input.password === input.password2) {
            setSame(true);
        } else {
            setSame(false);
        }
    }, [input]);

    const [same, setSame] = useState(false);
    return (
        <div className="page_register">
            <h3 className="title-register">REGISTER</h3>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email"
                    onChange={(e) => {
                        setInput({
                            input,
                            email: e.target.value,
                        })
                    }}
                />
                <label htmlFor="pasword2">password</label>
                <input type="password" name="password" id="password"
                    onChange={(e) => {
                        setInput({
                            input,
                            password: e.target.value,
                        })
                    }}
                />
                <label htmlFor="password">reset password</label>
                <input type="passwod" name="pasword2" id="password"
                    onChange={(e) => {
                        setInput({
                            input,
                            password2: e.target.value,
                        })
                    }}
                />
                {same === false ? <small>password tidak sama</small> : null}

                <button disabled={!same}>submit</button>
                <p>
                    not you have account ? <Link to="/Page_login">Sign in</Link>
                </p>

            </div>
        </div>
    )
}

export default Page_register
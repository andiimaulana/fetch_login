import react from "react";
import { Link } from 'react-router-dom'
import './Page_login.css'

const Page_login = () => {
    return (
        <div className="page_login">
            <h3 className="title-login">login</h3>
            <div className="form-group">

                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />

                <label htmlFor="password">password</label>
                <input type="text" name="pasword" id="password"></input>
                <button>Submit</button>
                <p>
                    not you have account ? <Link to="/Page_register">Sign up</Link>
                </p>
            </div>
        </div>
    )
}

export default Page_login
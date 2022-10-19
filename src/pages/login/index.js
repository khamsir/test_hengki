import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        if (email === 'hengki@gmail.com' && password === 'test123') {
            localStorage.setItem('token', '1');
            history.push('/');
        } else {
            alert('password salah coba gunakan email hengki@gmail.com dan password: test123')
        }
    }

    return (
        <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
            <div className="card p-3">
                <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
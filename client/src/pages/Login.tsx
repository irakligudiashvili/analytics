import { useState, type ChangeEvent, type FormEvent } from 'react'
import './form.css'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Login(){
    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const requestData = { email, password };

        fetch('http://localhost:8000/api/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.token){
                login(data.token);
                navigate('/');
            } else {
                console.error('No token received');
            }
        })
        .catch((err) => console.error(err));
    };

    return (
        <main>
            <h1>Login</h1>

            <form aria-label='Login Form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' required onChange={handleEmailChange} value={email} />
                    <small>Please enter a valid email</small>
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' required onChange={handlePasswordChange} value={password} />
                    <small>Please enter a password</small>
                </div>

                <small className='credentials'>Invalid credentials</small>
                <button type='submit'>Log In</button>
                <Link to='../register'>Register</Link>
            </form>
        </main>
    )
}

export default Login
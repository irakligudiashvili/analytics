import './form.css'

function Login(){
    return (
        <main>
            <h1>Login</h1>

            <form aria-label='Login Form'>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' required />
                    <small>Please enter a valid email</small>
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' required />
                    <small>Please enter a password</small>
                </div>

                <small className='credentials'>Invalid credentials</small>
                <button type='submit'>Log In</button>
            </form>
        </main>
    )
}

export default Login
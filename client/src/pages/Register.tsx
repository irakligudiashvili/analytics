import './form.css'

function Register(){
    return (
        <main>
            <h1>Register</h1>

            <form aria-label='Registration Form'>
                <div className='split'>
                    <div>
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text' id='firstName' name='firstName' />
                        <small>Please enter your first name</small>
                    </div>

                    <div>
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' id='lastName' name='lastName' />
                        <small>Please enter your last name</small>
                    </div>
                </div>

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
                <button type='submit'>Register</button>
            </form>
        </main>
    )
}

export default Register;
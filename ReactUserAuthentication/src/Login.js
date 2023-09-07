import React, { useState } from 'react'
//importing bootstrap from src folder after installing on project folder
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//importing Login css stylesheet
import './Login.css'
//importing sweetalert alert to style the onsubmit form alerts
import swal from 'sweetalert'

//login functional component
function Login() {

    //creating hooks = username, setusername to change value using useState() method
    const [username, setusername] = useState('')
    //creating hooks = password, setpassword to change value using useState() method
    const [password, setpassword] = useState('')

    //declaring validate() function
    function validate(event) {
        //using if() function to check if username & password from input is same as javascript & react
        if (username === 'javascript' && password === 'react') {
            //swal(login successful, message, symbol)
            swal('Login Successfull', 'Congratulation login successfull', 'success')
        }
        else {
            //swal(login invalid, message, symbol)
            swal('Invalid Login Details', 'Check username or password', 'error')
        }

        //using event.prevent method to stop page from restartig when using form
        event.preventDefault();
    }


    return <div>
        {/*using bootstrap grib system to style this <div>*/}
        <div className='row justify-content-center'>
            <div className='col-md-4'>
                <h1>React User Authentication</h1>
                {/*using onsubmit{} to calling vaildat() function when the form is submitted*/}
                <form onSubmit={validate}>
                    {/*using username(hook) as value in the input. using setusername (hook) with onchange{} to store or get input values*/}
                    <input type="text" placeholder='username' className='form-control' value={username} onChange={(e) => { setusername(e.target.value) }} />
                    {/*using password(hook) as value in the input. using setpassword(hook) with onchange{} to store or get input values*/}
                    <input type="text" placeholder='password' className='form-control' value={password} onChange={(e) => { setpassword(e.target.value) }} />

                    <input type="submit" className='btn btn-primary' />
                </form>
            </div>
        </div>

    </div>

}

//added background style in index.css

export default Login;
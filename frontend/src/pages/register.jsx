import Button from "../components/elements/Button/Button";
import InputForm from '../components/elements/Input/index';

import { Link } from "react-router-dom";

const RegisterPage = () => {
    return(
        <>
          <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-2 text-green-600">
                    Register
                </h1>
                <p className="mb-6 font-medium text-slate-500">
                    Welcome, Please enter your details
                </p>

                <form action="">
                    <InputForm name='nama' htmlFor='nama' label='Name' type='text' placeholder='Nama Lengkap'/>
                    <InputForm name='email' htmlFor='email' label='Email' type='text' placeholder='example@mail.com'/>
                    <InputForm name='password' htmlFor='password' label='Password' type='password' placeholder='********'></InputForm>
                    
                    <Button style="w-full bg-green-500 text-white mb-3"> Register</Button>
                    <Link to="/login">
                        <Button style="w-full text-green-500 outline outline-2">Login</Button>
                    </Link>
                    
                </form>

            </div>

          </div>
        </>
    )
}

export default RegisterPage
import { useState } from "react";
import { requestLogin, setToken} from "../../services/requests";
import { useAuth } from "../../authWrapper";
import { useNavigate } from "react-router-dom";


export default function SignInForm() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate();
	const{ login } = useAuth()

const handleSignInBtn = async () => {
  if (email === '' || password === '') {
    return window.alert('Please fill in all fields');
  }

  try {
    const signInResponse = await requestLogin(`${import.meta.env.VITE_API_URL}/signin`, { email, password });

    setToken(signInResponse.token);
    localStorage.setItem("token", signInResponse.token);
    login();
	 navigate(`${import.meta.env.VITE_API_URL}/products`);

  } catch (err) {
    console.log("Erro durante o login:", err);
    return window.alert("Login failed. Please try again."); // Exibe mensagem de erro para o usuário
  }
};


	return(
		<div className='flex flex-col bg-white shadow-xl py-6 px-4 rounded-lg font-lato w-11/12 max-w-md'>

			<section className=' sm:mx-auto sm:w-full sm:max-w-sm'>
				<h2 className='text-center text-2xl font-bold text-gray-900 my-2'>
					Sign In
				</h2>

				<p className="text-center text-sm text-gray-500">
    				If you don't have an account  
    				<span> </span> {/* Espaço adicionado aqui */}
    				<button  type="button" onClick={() => navigate("/signup")}
        				className="mt-2 font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"> Sign up
    				</button>.
			  </p>
			</section>
			<form>
				<section className='bg-white text-slate-950 flex-row items-center justify-between p-5'>
					<label className='block text-gray-700 text-sm font-bold mb-2 mt-1'>
						Email:
					</label>
					<input
						type='email'
						name='email'
						value={email}
						onChange={e => setEmail(e.target.value)}

						id='helper-text'
						aria-describedby='helper-text-explanation'
						className={ 
							'mb-4 shadow appearance-none border rounded w-full py-2 px-3 ' +
                   ' text-stone-800 leading-tight focus:outline-none focus:shadow-outline'
						}
						placeholder='example@email.com'
					/>
					<br />
					<label className='block text-stone-800 text-sm font-bold mb-2 mt-1'>
						Password:
					</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder='******'
						className={
							'mb-4 shadow appearance-none border rounded w-full py-2 px-3 ' +
                     'text-stone-800 leading-tight focus:outline-none focus:shadow-outline'
						}
					/>
				</section>


				<section className='flex flex-col items-center justify-between py-3 '>
					<button
						type='button'
						onClick={handleSignInBtn}
						className={
							'w-80 mt-4 content-center flex items-center justify-center ' +
                     'bg-yellow border border-gray-300 rounded-lg shadow-md px-6 py-2 ' +
                     'text-sm font-medium text-gray-800 hover:bg-gray-200 ' +
                     'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
						}>
						SIGN IN
					</button>
				</section>
			</form>
		</div>

	);
               }

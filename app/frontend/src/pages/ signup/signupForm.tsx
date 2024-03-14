import { useState} from "react";
import { requestLogin } from "../../services/requests";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword, validateUsername } from "../../helpers/input.validations";


export default function SignupForm() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
   const [username, setUsername] = useState('')
   const [buttonClicked, setButtonClicked] = useState(false);
         
   const navigate = useNavigate();

   const handleSignUpBtn = async () => {
		if (email === '' || password === '' || username === '') {
			return window.alert('Please fill in all fields');
		}
      setButtonClicked(true)

		try {
		const signupResponse = await requestLogin(`${import.meta.env.VITE_API_URl}/signup`,{email, password, username})
		console.log(signupResponse);

      if (signupResponse) navigate("/signin");


		} catch (err) {
			console.log(err);
		}
	};

	return(
		<div className='flex flex-col bg-white shadow-lg py-6 px-4 rounded-lg font-lato w-11/12 max-w-md overflow-hidden'>
			<div className='  sm:mx-auto sm:w-full sm:max-w-sm'>
				<h2 className='text-center text-2xl font-bold text-gray-900 my-2'>
					Create Your Account
				</h2>
			</div>
			<form >
				<div className=' text-slate-950 flex  flex-col  gap-2 '>
					<label className='block text-sm font-bold' htmlFor='username'>
						Username:
					</label>
					<input
						type='text'
						name='username'
						value={username}
						onChange={e => setUsername(e.target.value)}
						placeholder='username'
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
					/>

					{ buttonClicked && !validateUsername(username) && (
						<span className='text-rose-500 text-xs italic'>
							Your username must be at least 4 characters long
						</span>
					) }
				
			
					<label className='block text-gray-700 text-sm font-bold '>
						Email:
					</label>
					<input
						type='email'
						name='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						id='helper-text'
						aria-describedby='helper-text-explanation'
						className='email shadow appearance-none border rounded w-full py-2 px-3 text-stone-800 leading-tight focus:outline-none focus:shadow-outline '
						placeholder='example@email.com'
					/>
					{ buttonClicked && !validateEmail(email) && (
						<span className='text-rose-500 text-xs italic'>
							Your email must be in this format: example@example.com.
						</span>
					) }
					
					<label className='block text-stone-800 text-sm font-bold'>
						Password:
					</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder='******'
						className='password shadow appearance-none border rounded w-full py-2 px-3 text-stone-800  leading-tight focus:outline-none focus:shadow-outline'
					/>
					{ buttonClicked && !validatePassword(password) && (
						<p className='text-rose-500 text-xs italic'>
							Your password must be 6 characters long.
						</p>
					) }
					<br />
					<div className='flex flex-col items-center justify-between py-3 '>
						<button
							type='button'
							onClick={() => handleSignUpBtn()}
							className="signup w-80 mt-4 content-center flex items-center justify-center bg-yellow border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">

							SIGN UP
						</button>
					</div>

				
				</div>
			</form>
		</div>
	);
               }

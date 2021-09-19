import "./login.css";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
	const [userData, getUserData] = useState({ username: "", password: "" });
	const [userValid, setUserValid] = useState(null);
	const [visible, setvisible] = useState("visibles");

	function handleChange(e) {
		const { name, value } = e.target;
		getUserData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();
		axios
			.post("http://localhost:3000/api/user/login", { userData })
			.then((res) => {
				setUserValid(res.data);
				if (res.data) {
					console.log(res.data);
					setvisible("visibles");
				} else {
					setvisible("");
				}
			});
	}

	return (
		<div id='pagemain'>
			<div id='maincontainer' className='container pt-2'>
				<div className='container text-center'>
					<svg
						fill='#FCD116'
						xmlns='http://www.w3.org/2000/svg'
						width='40'
						height='40'
						viewBox='0 0 24 24'
					>
						<path d='M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z' />
					</svg>
					<svg
						fill='#FCD116'
						xmlns='http://www.w3.org/2000/svg'
						width='40'
						height='40'
						viewBox='0 0 24 24'
					>
						<path d='M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z' />
					</svg>
					<svg
						fill='#003893'
						xmlns='http://www.w3.org/2000/svg'
						width='40'
						height='40'
						viewBox='0 0 24 24'
					>
						<path d='M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z' />
					</svg>
					<svg
						fill='#CE1126'
						xmlns='http://www.w3.org/2000/svg'
						width='40'
						height='40'
						viewBox='0 0 24 24'
					>
						<path d='M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z' />
					</svg>
				</div>
				<div className='container text-center mt-5'>
					<h3>Username:</h3>
					<input
						type='email '
						name='username'
						onChange={(e) => handleChange(e)}
					></input>
					<h3 className='mt-4'>Password:</h3>
					<input
						type='password'
						name='password'
						onChange={(e) => handleChange(e)}
					></input>
					<br />
					<div
						onClick={(e) => handleSubmit(e)}
						className='btn mt-4 mb-5 border border-dark'
					>
						Enter
					</div>
					<br />
					<p className={` ${visible}  font-color`}>
						Incorrect username or password
					</p>

					<Link to='/Subscribe'>
						<a id='signUpLink' href='google.com'>
							No account? Sign up!
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

import "./login.css";

export default function Login() {
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
					<input></input>
					<h3 className='mt-4'>Password:</h3>
					<input></input>
					<br />
					<div className='btn mt-4 mb-5 border border-dark'>Enter</div>
					<br />
					<a id='signUpLink' href='google.com'>
						No account? Sign up!
					</a>
				</div>
			</div>
		</div>
	);
}

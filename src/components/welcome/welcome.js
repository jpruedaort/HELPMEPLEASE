import "./Welcome.css";
import {Link} from "react-router-dom";

export default function Welcome() {
	return (
		<div id='main-container' className='container'>
			<div id='mainrow' className='row'>
				<div id='titleColumn' className='col-sm-12 col-lg-6'>
					<div className='row w-100'>
						<div id='titleColumn' className='col-sm-12 col-lg-6 text-center'>
							<h1>HelpMePlease</h1>
						</div>
						<div id='titleColumn' className='col-sm-12 col-lg-6'>
							<div>
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
						</div>
					</div>
				</div>
				<div id='titleButtons' className='col-sm-12 col-lg-6'>
					<div className='container w-100 text-center'>
						<Link to='/viewmap'>
							<div id='mainbtn' className='btn '>
								I need Help
							</div>
						</Link>
						<br />
						<Link to='/login'>
							<div id='mainbtn' className='btn '>
								Help Somenone
							</div>
						</Link>
						<br />
						<div id='mainbtn' className='btn'>
							About
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

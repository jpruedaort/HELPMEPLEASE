import "./subscribe.css";
import React,{useState,useEffect} from 'react'
import axios from 'axios';

export default function Subscribe() {

	const[userData,setUserData]=useState({name:"",lname:"",age:0,email:"",pass:"",rpass:""})
	const[valid,setvalid] = useState(false)
	useEffect(()=>{
		if (userData.pass ===userData.rpass){
			setvalid(true)
		} else{
			setvalid(false)
			console.log("porq aqui paso")
		}
		

	},[userData.pass,userData.rpass])

	function handleChange(e){
		const {name,value}=e.target
		setUserData(prevState=>({
			...prevState,
			[name]:value
		}))
			
	}

	function handleSubmit(e){
		console.log("por aqui pasa")
		e.preventDefault()
		axios.post('http://localhost:3000/api/user/register',{userData})
			.then(res=>{
				console.log(res)
			})

		console.log(userData)
	}

	return (
		<div id='pagemain'>
			<div id='maincontaineri' className='container pt-4 pb-4'>
				<div className='container' style={{ height: "100%" }}>
					<div className='row h-100'>
						<div id='hearthcolumn' className='col-1 '>
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
						<div className='col-10 h-100'>
							<div className='container h-100 text-center'>
								<form autoComplete="off">
									<div className="col">
									<h3 id='userinputs'>Name: </h3>
									<input autoComplete="off" className='iSubscribe' name="name" onChange={(e)=>handleChange(e)} required></input>
									<h3 id='userinputs'>Last Name: </h3>
									<input autoComplete="off"  className='iSubscribe' name="lname" onChange={(e)=>handleChange(e)}required></input>
									<h3 id='userinputs' >Age: </h3>
									</div>
									<input autoComplete="off" type='number' required className='iSubscribe' name="age" onChange={(e)=>handleChange(e)}></input>
									<h3 id='userinputs'>Email: </h3>
									<input autoComplete="off" type='email' required className='iSubscribe' name="email" onChange={(e)=>handleChange(e)}></input>
									<h3 id='userinputs' >Password: </h3>
									<input autoComplete="off" type="password" name="pass" onChange={(e)=>handleChange(e)} required className='iSubscribe'></input>
									<h3 id='userinputs' >Repeat Password: </h3>
									<input autoComplete="off" type="password" name="rpass" onChange={(e)=>handleChange(e)} required className='iSubscribe'></input>
									{valid===true ? <p></p> : <p>not valid</p>}
									<br/>
									<input id="subButton" disabled={!valid} onClick={(e)=>handleSubmit(e)} className="btn " type="submit"></input>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

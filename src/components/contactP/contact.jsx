import React from 'react';
import * as cn from 'classnames';
import './contact.css';
import {useForm} from "react-hook-form";

const ContactPage = ()=>{

	const {register,handleSubmit,errors} = useForm();

	const submit = ()=> {};


	return(
		<div className = {cn('formContainer')}>
		   <form onSubmit = {handleSubmit(submit)}
			 className= "contactForm">
			<label htmlFor= "name"></label>
			<input  name="name" 
				ref={
					register({
						required:"Please Enter Your Name",
						maxLength:{
							value:20,
							message: "Please Enter a name with fewer than 20 characters"
						}
					})
				}
			/><br />
			{errors.name && errors.name.message}
			<label htmlFor = "submit"></label>
			<input  name="submit"
				type = "submit"/>
		   
		   </form>

		</div>
	);
}


export default ContactPage;

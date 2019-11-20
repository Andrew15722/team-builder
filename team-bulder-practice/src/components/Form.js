import React from 'react';

const Form = () => {
	return (
		<form className="custom-form">
			<label className="custom-form-label" htmlFor="username">
				Username:
				<input className="custom-form-label-input" type="text" name="username" id="username" />
			</label>

			<label className="custom-form-label" htmlFor="email">
				Email:
				<input className="custom-form-label-input" type="email" name="email" id="email" />
			</label>

			<label className="custom-form-label" htmlFor="role ">
				Role:
				<input className="custom-form-label-input" type="text" name="role" id="role" />
			</label>
		</form>
	);
};

export default Form;

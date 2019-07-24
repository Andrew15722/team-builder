import React, { useState } from 'react';
import { members } from './Data.js';

function Form() {
	const [ member, setMember ] = useState({
		name: 'Andrew',
		email: 'andrew@react.com',
		role: 'UI Developer'
	});

	function handleChange(event) {
		const updatedMember = { ...member, [event.target.name]: event.target.value };
		console.log('Handle Change Function:', event.target.name, event.target.value, updatedMember);
		setMember(updatedMember);
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log('name', member);
	}

	console.log(member);
	return (
		<form onSubmit={handleSubmit}>
			<fieldset>
				<legend>Team Form</legend>
				<div className="form-group">
					<label htmlFor="name" className="form-group-label">
						Name:
						<div>
							<input
								type="text"
								className="form-input"
								name="name"
								placeholder="Enter your name"
								value={member.name}
								onChange={handleChange}
							/>
						</div>
					</label>
					<label htmlFor="email" className="form-group-label">
						Email:
						<div>
							<input
								type="email"
								className="form-input"
								name="email"
								placeholder="Enter your email"
								value={member.email}
								onChange={handleChange}
							/>
						</div>
					</label>
					<label htmlFor="role" className="form-group-label">
						Role:
						<div>
							<input
								type="text"
								className="form-input"
								name="role"
								placeholder="Your role"
								value={member.role}
								onChange={handleChange}
							/>
						</div>
					</label>
				</div>
				<button type="submit" className="form-btn">
					Submit
				</button>
			</fieldset>
		</form>
	);
}

export default Form;

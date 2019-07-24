import React, { useState } from 'react';

function Form() {
	const [ member, setMember ] = useState({
		name: 'andrew',
		email: 'andrew@react.com',
		role: 'Full Stack Developer'
	});
	console.log(member);
	return (
		<form>
			<fieldset>
				<legend>Team Form</legend>
				<div className="form-group">
					<label for="name" className="form-group-label">
						Name:
						<div>
							<input
								type="text"
								className="form-input"
								name="name"
								placeholder="Enter your name"
								value={member.name}
							/>
						</div>
					</label>
					<label for="email" className="form-group-label">
						Email:
						<div>
							<input
								type="email"
								className="form-input"
								name="email"
								placeholder="Enter your email"
								value={member.email}
							/>
						</div>
					</label>
					<label for="role" className="form-group-label">
						Role:
						<div>
							<input
								type="text"
								className="form-input"
								name="role"
								placeholder="Your role"
								value={member.role}
							/>
						</div>
					</label>
				</div>
			</fieldset>
		</form>
	);
}

export default Form;

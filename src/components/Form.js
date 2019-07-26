import React, { useState } from 'react';

const Form = (props) => {
	// setting up an inital state for the Form With empty values so that after the form is submitted the values will go back to empty.
	const initialFormState = { id: null, name: '', role: '', email: '' };
	const [ member, setMember ] = useState(initialFormState);

	//function that updates the state within the form
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setMember({ ...member, [name]: value });
	};

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (!member.name || !member.role) return;
				props.addMember(member);
				setMember(initialFormState);
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={member.name} onChange={handleInputChange} />
			<label>Role</label>
			<input type="text" name="role" value={member.role} onChange={handleInputChange} />
			<label>Email</label>
			<input type="text" name="email" value={member.email} onChange={handleInputChange} />
			<button>Add New User</button>
		</form>
	);
};

export default Form;

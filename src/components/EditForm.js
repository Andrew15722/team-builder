import React, { useState, useEffect } from 'react';

const EditUserForm = (props) => {
	const [ member, setMember ] = useState(props.currentMember);

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setMember({ ...member, [name]: value });
	};

	useEffect(
		() => {
			setMember(props.currentMember);
		},
		[ props ]
	);

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();

				props.updateMember(member.id, member);
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={member.name} onChange={handleInputChange} />
			<label>role</label>
			<input type="text" name="role" value={member.role} onChange={handleInputChange} />
			<label>email</label>
			<input type="text" name="email" value={member.email} onChange={handleInputChange} />
			<button>Update user</button>
			<button onClick={() => props.setEditing(false)} className="button muted-button">
				Cancel
			</button>
		</form>
	);
};

export default EditUserForm;

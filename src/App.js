import React, { useState } from 'react';
import './App.css';
import MemberCard from './components/MemberCard.js';
import Form from './components/Form.js';
import EditForm from './components/EditForm.js';

const App = () => {
	const membersData = [
		{ id: 1, name: 'Andrew Mendez', email: 'andrew@react.com', role: 'Front-End Developer' },
		{ id: 2, name: 'John Marston', email: 'John@react.com', role: 'Back-End developer' },
		{ id: 3, name: 'Ken Kanneki', email: 'Ken@react.com', role: 'Full-Stack Developer' }
	];

	const [ members, setMembers ] = useState(membersData);

	// functionality for the edit button
	const [ editing, setEditing ] = useState(false);
	const initialFormState = { id: null, name: '', role: '', email: '' };
	const [ currentMember, setCurrentMember ] = useState(initialFormState);

	// function that sets the editing state to true and allows us to edit the current member.
	const editRow = (member) => {
		setEditing(true);

		setCurrentMember({ id: member.id, name: member.name, email: member.email, role: member.role });
	};

	const updateMember = (id, updatedMember) => {
		setEditing(false);

		setMembers(members.map((member) => (member.id === id ? updatedMember : member)));
	};

	// since we're not using an Api and a database, we have to increment  the ID of new users manually.
	const addMember = (member) => {
		member.id = members.length + 1;
		// function was not working, the reason was because I didn't have member as a param and i put members at the end of setState instead of member.
		setMembers([ ...members, member ]);
	};

	const deleteMember = (id) => {
		setMembers(members.filter((member) => member.id !== id));
		setEditing(false);
	};

	return (
		<div className="container">
			<h1>Team Builder</h1>
			<div className="flex-row">
				<div className="flex-large half">
					{editing ? (
						<div>
							<EditForm
								editing={editing}
								setEditing={setEditing}
								currentMember={currentMember}
								updateMember={updateMember}
							/>
						</div>
					) : (
						<div>
							<h2>Add User</h2>
							{/* adding the Form component and passing the addMember function to form as a prop */}
							<Form addMember={addMember} />
						</div>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					{/* passing the usestate props into the membercard through the members prop here */}
					<MemberCard members={members} editRow={editRow} deleteMember={deleteMember} />
				</div>
			</div>
		</div>
	);
};

export default App;

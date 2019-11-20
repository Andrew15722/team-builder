import React, { useState } from 'react';
import './App.scss';
import Form from './components/Form.js';

function App() {
	const [ team, setTeam ] = useState([
		{ username: 'Drew', email: 'Drew@lambda.com', role: 'Fullstack dev' },
		{ username: 'Bill', email: 'bill@bill.com', role: 'Front-end dev' },
		{ username: 'dale', email: 'dale@hill.com', role: 'Project manager' }
	]);

	return (
		<div className="App">
			<Form />

			{team.map((member) => {
				return (
					<div>
						<p>Username: {member.username}</p>
						<p>Email: {member.email}</p>
						<p>Role: {member.role}</p>
					</div>
				);
			})}
		</div>
	);
}

export default App;

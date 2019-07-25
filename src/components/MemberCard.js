import React from 'react';

const MemberCard = (props) => (
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Role</th>
				<th>Email</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			{/* checking if the length of members is greater than 0? If so Then return The table */}
			{props.members.length > 0 ? (
				props.members.map((member) => (
					<tr key={member.id}>
						<td>{member.name}</td>
						<td>{member.role}</td>
						<td>{member.email}</td>
						<td>
							<button className="button muted-button">Edit</button>
							{/* the onclick handler that adds the functionality to the delete button */}
							<button onClick={() => props.deleteMember(member.id)} className="button muted-button">
								Delete
							</button>
						</td>
					</tr>
				))
			) : (
				// else return one row with 'No Users'
				<tr>
					<td colSpan={3}>No users</td>
				</tr>
			)}
		</tbody>
	</table>
);

export default MemberCard;

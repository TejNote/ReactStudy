import React, { useContext, useEffect } from 'react'
import { UserDispatch } from '../App'

const User = React.memo(function User({ user }) {
	const dispatch = useContext(UserDispatch)

	useEffect(() => {
		console.log('시작')
		console.log(user)
		return () => {
			console.log('종료')
			console.log(user)
		}
	}, [user])
	return (
		<div>
			<b
				style={{
					cursor: 'pointer',
					color: user.active ? 'green' : 'black',
				}}
				onClick={() => {
					dispatch({
						type: 'TOGGLE_USER',
						id: user.id,
					})
				}}
			>
				{user.userName}
			</b>{' '}
			/ <span>{user.email}</span>
			<button
				onClick={() => {
					dispatch({
						type: 'REMOVE_USER',
						id: user.id,
					})
				}}
			>
				삭제
			</button>
		</div>
	)
})

function UserList2({ userList }) {
	return (
		<div>
			{userList.map(user => (
				<User user={user} key={user.id} />
			))}
		</div>
	)
}

export default React.memo(UserList2)

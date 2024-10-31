import React, { useContext, useRef } from 'react'
import { UserDispatch } from '../App'
import useInput from '../hooks/useInput'

const CreateUser = React.memo(function CreateUser() {
	const dispatch = useContext(UserDispatch)
	const [{ userName, email }, onChange, onReset] = useInput({
		userName: '',
		email: '',
	})

	const nextId = useRef(4)

	return (
		<div>
			<input
				name='userName'
				placeholder='계정명'
				onChange={onChange}
				value={userName}
			/>
			<input
				name='email'
				placeholder='이메일'
				onChange={onChange}
				value={email}
			/>

			<button
				onClick={() => {
					dispatch({
						type: 'CREATE_USER',
						user: {
							id: nextId.current,
							userName,
							email,
						},
					})
					onReset()
					nextId.current += 1
				}}
			>
				등록
			</button>
		</div>
	)
})

export default CreateUser

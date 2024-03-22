/**
 * Componentes Generales de utilidad para dispatch 
*/

import { useDispatch } from "react-redux"
import { addUser, changeEmail } from "./userSlice"

export const useUserDispatch = () => {
	const dispatch = useDispatch();

	const dispatchAddUser = user => {
		dispatch(addUser(user));
	}

	const dispatchChangeEmail = email => {
		dispatch(changeEmail(email));
	}

	return {
		dispatchAddUser,
		dispatchChangeEmail
	}
};
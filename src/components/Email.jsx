// Components utils
import { useUserDispatch } from "../redux/DispatchUtils";
import { useUser } from "../utils/actionsRedux"

const Email = () => {
	const user = useUser();
	const { dispatchChangeEmail } = useUserDispatch();

	function handleChangeEmail(e) {
		dispatchChangeEmail(e.target.value)
	}

	return (
		<input
			type="email"
			placeholder="Email"
			value={user.email}
			onChange={handleChangeEmail}
		/>
	)
}

export default Email
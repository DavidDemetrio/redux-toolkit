import { useUser } from "../utils/actionsRedux"

const Header = () => {
	const user = useUser();

	return (
		<header>
			<h1>Redux Toolkit</h1>
			<ul>
				<li>Name: {user.name}</li>
				<li>Email: {user.email}</li>
				<li>Nombre de usuario: {user.username}</li>
			</ul>
		</header>
	)
}

export default Header
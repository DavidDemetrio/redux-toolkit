// Con este vamos a poder acceder al estado
// global, y obtener el o los datos que deseamos
import { useSelector } from "react-redux";

export const useUser = () => {
    const user = useSelector(state => state.user);
    return user;
}
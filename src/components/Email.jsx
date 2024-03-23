// Components utils
import { Box, FormHelperText, Input } from "@chakra-ui/react";
import { useUserDispatch } from "../redux/DispatchUtils";
import { useUser } from "../utils/actionsRedux";

const Email = () => {
  const user = useUser();
  const { dispatchChangeEmail } = useUserDispatch();

  function handleChangeEmail(e) {
    dispatchChangeEmail(e.target.value);
  }

  return (
    <>
      <Box mt="4">
        <Input
          id="dispatch-email"
          type="email"
          focusBorderColor="#008000a1"
          value={user.email}
          onChange={handleChangeEmail}
        />
        <FormHelperText>
          To write in this field to change state in Redux Toolkit.
        </FormHelperText>
      </Box>
    </>
  );
};

export default Email;

import {
  Box, FormHelperText, FormLabel,
  Heading, Input, VStack
} from "@chakra-ui/react";
import { useUser } from "../utils/actionsRedux"

const Header = () => {
	const user = useUser();

	return (
		<>
			<Heading align='center' size='md' mb='4'>
				Redux Toolkit
			</Heading>
			<VStack>
          <Box>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" type="text" focusBorderColor='#008000a1' value={user.name} isDisabled />
          </Box>
          <Box>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input id="email" type="email" focusBorderColor='#008000a1' value={user.email} isDisabled />
            <FormHelperText>Well never share your e-mail.</FormHelperText>
          </Box>
          <Box>
            <FormLabel htmlFor="username">User Name</FormLabel>
            <Input id="username" type="text" focusBorderColor='#008000a1' value={user.username} isDisabled />
          </Box>
			</VStack>
		</>
	)
}

export default Header
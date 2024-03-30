
import { Card, Input, FormControl, FormLabel } from "@chakra-ui/react";
import WebButton from "../button/Button";


const Withdraw = () => {

  return (
    <Card padding={5}>

      <FormControl
        onSubmit={''}
        display={"flex"}
        flexDirection={"column"}
      >
        <FormLabel>Amount to withdraw</FormLabel>
        <Input mb={4} type="text" ></Input>
        <WebButton
          type="submit"
          label="Withdraw your stake"
        />
      </FormControl>
    </Card>
  );
};

export default Withdraw;

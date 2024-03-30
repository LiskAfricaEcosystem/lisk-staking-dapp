
import WebButton from "../button/Button";
import { Card, Input, FormControl, FormLabel } from "@chakra-ui/react";


const TokenApproval = () => {
 
  return (
    <Card padding={5}>
     
      <FormControl
      
        display={"flex"}
        flexDirection={"column"}
      >
        <FormLabel>Amount to withdraw</FormLabel>
        <Input mb={4} type="text" ></Input>
        <WebButton
          type="submit"
          label="Token Approval"
        />
      </FormControl>
    </Card>
  );
};

export default TokenApproval;

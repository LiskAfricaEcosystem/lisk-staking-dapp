
import WebButton from "../button/Button"

import { Card, Input, FormControl, FormLabel } from "@chakra-ui/react";



const StakeAmount = () => {
    
    return (
        <Card padding={5}>
            <FormControl display={'flex'} flexDirection={'column'}>
                <FormLabel >Amount to stake</FormLabel>
                <Input mb={4} type="text" ></Input>
                <WebButton type='submit' label='Stake'/>
    

            </FormControl>
            
        </Card>
      )
}

export default StakeAmount
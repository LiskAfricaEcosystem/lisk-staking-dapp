
import WebButton from "../button/Button";



const Wallet = ({children}) => {


 return(
      <div style={{height: "100vh"}}>
            {children}
     
            <WebButton  type="button" label="Connect Wallet" />
      </div>
 )

}

export default Wallet
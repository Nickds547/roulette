import { LoginComponent } from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ILogin } from "../../redux/user-account/user-account.model";
import { login } from "../../redux/user-account/user-account.store";



const AdminPage = () =>{
    const userAccount = useAppSelector((state) => state.userAccountReducer.account)
    const dispatch = useAppDispatch();

    function sendLogin(accountData: ILogin): void {
        console.log('Sending to store')
       dispatch(login(accountData));
    }

    return (
        <>
            {userAccount.token ? 
                <>
                </> 
            : 
                <>
                     <LoginComponent loginSubmitted={sendLogin} />
                </>
            }
        </>
    )
}

export default AdminPage;
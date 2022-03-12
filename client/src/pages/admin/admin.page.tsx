import { LoginComponent } from "../../components";
import RouletteInputsComponent from "../../components/roulette-inputs/roulette-inputs.component";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ILogin } from "../../redux/user-account/user-account.model";
import { login } from "../../redux/user-account/user-account.store";



const AdminPage = () =>{
    const userAccount = useAppSelector((state) => state.userAccountReducer.account)
    const theories = useAppSelector((state) => state.theoriesReducer.theories)
    const dispatch = useAppDispatch();

    function sendLogin(accountData: ILogin): void {
       dispatch(login(accountData));
    }

    return (
        <>
            {userAccount.token ? 
                <>
                    <RouletteInputsComponent  theories={theories}/>
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
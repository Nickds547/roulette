import { LoginComponent } from "../../components";
import RouletteInputsComponent from "../../components/roulette-inputs/roulette-inputs.component";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ILogin, IUser } from "../../redux/user-account/user-account.model";
import { setLoading, setUserAccount } from "../../redux/user-account/user-account.store";
import * as rouletteApi from '../../api/roulette.api';



const AdminPage = () =>{
    const userAccount = useAppSelector((state) => state.userAccountReducer.account)
    const isLoading = useAppSelector((state) => state.userAccountReducer.loading)
    const theories = useAppSelector((state) => state.theoriesReducer.theories)
    const dispatch = useAppDispatch();

    function sendLogin(accountData: ILogin): void {
        dispatch(setLoading(true));

        rouletteApi.login(accountData.username, accountData.password)
        .then((data) =>{
            return data.json()
        })
        .then((data) =>{
            console.log("data: ", data)
            dispatch(setUserAccount(data))
            dispatch(setLoading(false));
        })
        .catch((error) =>{
            dispatch(setLoading(false));
        })

    }

    return (
        <>
            {userAccount.token ? 
                <>
                   {userAccount.role === 'admin' && <RouletteInputsComponent  theories={theories}/>}
                </> 
            : 
                <>
                     <LoginComponent loginSubmitted={sendLogin} isLoading={isLoading}/>
                </>
            }
        </>
    )
}

export default AdminPage;
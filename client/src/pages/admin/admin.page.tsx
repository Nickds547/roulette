import { LoginComponent } from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ILogin } from "../../redux/user-account/user-account.model";
import { setLoading, setUserAccount } from "../../redux/user-account/user-account.store";
import * as rouletteApi from '../../api/roulette.api';
import TheoriesContainer from "../../components/theories-container/theories-container.component";



const AdminPage = () =>{
    const userAccount = useAppSelector((state) => state.userAccountReducer.account)
    const isLoading = useAppSelector((state) => state.userAccountReducer.loading)
    const dispatch = useAppDispatch();

    function sendLogin(accountData: ILogin): void {
        dispatch(setLoading(true));

        rouletteApi.login(accountData.username, accountData.password)
        .then((data) =>{
            return data.json()
        })
        .then((data) =>{
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
                   {userAccount.role === 'admin' && <TheoriesContainer />}
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
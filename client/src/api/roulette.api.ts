import { environment } from "../environments/enviornments";
import { useAppSelector } from "../redux/hooks";
import { ITheory } from "../redux/thoeries/theories.model";


const login = (username: string, password: string) =>{
    var url = environment.rouletteApi + '/login';

    return fetch(url,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password
        })
    });

}

const CreateOrUpdateTheories = (theroies: ITheory[]) =>{
    const userAccount = useAppSelector((state) => state.userAccountReducer.account)
    var url = environment.rouletteApi + '/theories';

    return fetch(url,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `bearer ${userAccount.token}`
        },
        body: JSON.stringify({
           theories: theroies
        })
    });
}

const getTheories = () =>{
    var url = environment.rouletteApi + '/theories';

    return fetch(url,{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
    });
}

export {login, CreateOrUpdateTheories, getTheories}
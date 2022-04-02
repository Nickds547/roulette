import { environment } from "../environments/enviornments";


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

export {login}
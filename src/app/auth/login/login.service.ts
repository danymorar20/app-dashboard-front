import AppService from "@/app/app-service";
import { Login } from "./interfaces/login.interface";
import { AccessToken } from "../interfaces/access-token.interface";

class LoginService extends AppService{
    loginApiUrl = `${this.apiUrl}/auth/login`;

    async login(login: Login): Promise<AccessToken> {
        const options: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login),
        }

        return this.handleRequest<AccessToken>(this.loginApiUrl, options);
    }
}

const loginService = new LoginService();

export default loginService;

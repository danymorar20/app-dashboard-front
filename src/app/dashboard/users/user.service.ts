import AppService from "@/app/app-service";
import { User } from "./interfaces/user.interface";

class UserService extends AppService {
    //private userApiUrl = `${process.env.NEXT_PUBLIC_DASHBOARD_BACKEND_URL}/users`;
    userApiUrl = `${this.apiUrl}/users`;
    async fetchUsers(): Promise<User[]> {
        return this.handleRequest<User[]>(this.userApiUrl);
    }

    async createUser(user: Omit<User, 'id'>): Promise<User> {
        console.log("usuario a crear", user);
        const options: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        };
        return this.handleRequest<User>(this.userApiUrl, options);
    }

    async desactivateUser(userId: number) {
        const options: RequestInit = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: false }),
        };
        return this.handleRequest<User>(`${this.userApiUrl}/${String(userId)}/status`, options);
    }
}

const userService = new UserService();

export default userService;

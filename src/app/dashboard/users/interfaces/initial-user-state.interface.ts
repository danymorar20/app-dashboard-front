import { User } from "./user.interface";

export const initialUserState: Omit<User, "id"> = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    cellphone: "",
    status: true,
}

import { User } from "./user.interface";

export interface UserFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (user: Omit<User, "id">) => void;
    selectedUser: Omit<User, "id"> | null;
}

import { users } from "../mocks/users"

export const getAllUser = () => {
    return new Promise(resolve => resolve(users));
}
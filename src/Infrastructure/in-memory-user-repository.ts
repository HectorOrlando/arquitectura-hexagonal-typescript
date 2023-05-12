// InMemoryUserRepository

import { User } from "../Domain/User";
import { UserRepository } from "../Domain/UserRepository";



const users: User[] = [
    {
        id: "1",
        email: "test-1-@test.com"
    },
    {
        id: "2",
        email: "test-2-@test.com"
    },
    {
        id: "3",
        email: "test-3-@test.com"
    }
]

export class InMemoryUserRepository implements UserRepository {

    constructor() { }

    async getById(userId: string): Promise<User | null> {
        const user = users.find((user) => user.id === userId);
        if (!user) {
            return null;
        }
        return new User(user.id, user.email);
    }

}
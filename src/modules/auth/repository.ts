interface User {
    username: string;
    password: string;
}

const users: User[] = []; // In-memory storage

export default class AuthRepository {
    async findByUsername(username: string): Promise<User | undefined> {
        return users.find(user => user.username === username);
    }

    async createUser(user: User): Promise<User> {
        users.push(user);
        return user;
    }


    
};

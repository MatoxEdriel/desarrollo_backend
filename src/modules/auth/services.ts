import AuthRepository from './repository';

export class AuthService {

    private readonly authRepository: AuthRepository;
    constructor() {
        this.authRepository = new AuthRepository()
    }

    async registerService(username: string, password: string) {
        const existingUser = await this.authRepository.findByUsername(username);
        if (existingUser) {
            throw new Error('Username already exists');
        }

        const newUser = await this.authRepository.createUser({ username, password });
        return newUser;
    }

    async loginService(username: string, password: string) {
        
        const user = await this.authRepository.findByUsername(username);
        if (!user || user.password !== password) {
            throw new Error('Invalid username or password');
        }

        // Simulate a simple token generation
        const token = Buffer.from(`${username}:${password}`).toString('base64');
        return token;
    }
};

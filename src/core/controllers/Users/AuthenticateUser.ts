import { User } from '../../entity/user.model';
// import { comparePasswords } from '../../utils/passwordUtils'; // Assume this utility compares hashed passwords
// import { generateToken } from '../../utils/tokenUtils'; // Assume this generates JWT tokens

interface AuthenticateUserRequest {
  email: string;
  password: string;
}

class AuthenticateUser {
  async execute(authenticateUserRequest: AuthenticateUserRequest): Promise<void> {
    // const userRepository = getRepository(User);
    // const { email, password } = authenticateUserRequest;

    // const user = await userRepository.findOne({ where: { email } });
    // if (!user) {
    //     throw new Error('User not found');
    // }

    // const isValid = await comparePasswords(password, user.password);
    // if (!isValid) {
    //     throw new Error('Invalid password');
    // }

    // return generateToken(user.id);
    return;
  }
}

export default AuthenticateUser;

// Esto se puede delegar a un contenedor de dependencias 

import { WelcomeEmailSender } from '../Application/WelcomeEmailSender';
import { UserContoller } from './UserController';
import { FakeEmailSeder } from './fake-email-sender';
import { InMemoryUserRepository } from './in-memory-user-repository';

const fakeEmailSeder = new FakeEmailSeder();
const inMemoryUserRepository = new InMemoryUserRepository();
export const welcomeEmailSender = new WelcomeEmailSender(
    inMemoryUserRepository,
    fakeEmailSeder
);
export const userContoller = new UserContoller(welcomeEmailSender);



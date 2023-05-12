import { EmailSender } from "../Domain/EmailSender";
import { UserRepository } from "../Domain/UserRepository";

export class WelcomeEmailSender {

    // inyeción de dependencias
    constructor(
        private userRepository: UserRepository,
        private emailSender: EmailSender
        ) { }

    async run(userId: string) {
        console.log("User", userId);
        const user = await this.userRepository.getById(userId);

        if (!user) {
            throw new Error(`User id not found ${userId}`);
        }

        // lo ponemos await por que es una operación asincrona que tendria que interacturar con un servidor de correos.
        await this.emailSender.send(user.email, 'Welcome to our application!!!');
        // console.log("User", user.email);
    }

}
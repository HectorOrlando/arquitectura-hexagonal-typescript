import { EmailSender } from "../Domain/EmailSender";

export class FakeEmailSeder implements EmailSender{

    async send(email: string, text: string): Promise<void> {
        console.log(`Simulating email to ${email}, text: ${text}`);
    }
}


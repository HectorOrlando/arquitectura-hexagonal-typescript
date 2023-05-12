import { Request, Response } from "express";
import { WelcomeEmailSender } from '../Application/WelcomeEmailSender';


export class UserContoller {
    // Traer por inyección  de dependencias el WelcomeEmailSender
    constructor(private welcomeEmailSender: WelcomeEmailSender){}

    async run(req: Request, res: Response) {
        const userId = req.params.id;
        await this.welcomeEmailSender.run(userId);
        res.status(200).send();
    }
}
import "dotenv/config";
declare global {
    export namespace Express {
        interface Request {
            userId: string;
        }
    }
}

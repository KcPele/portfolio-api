 declare global{
    export namespace Express{
        interface Request{
            userId: string
        }
    }
}
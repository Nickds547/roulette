export abstract class CustomError extends Error {
    public constructor(msg: string){
        super(msg)
    }

    abstract getErrorStatus(): number;
}


export class NotFoundError extends CustomError {

    public constructor(msg: string){
        super(msg)
    }

    public getErrorStatus(): number {
        return 404;
    }
}

export class InvalidCredintials extends CustomError {
    public constructor(msg: string){
        super(msg)
    }

    public getErrorStatus(): number {
        return 401;
    }
}

export class InvalidBodyData extends CustomError {
    public constructor(){
        super("Incorrect Data Format")
    }

    public getErrorStatus(): number {
        return 400;
    }
}
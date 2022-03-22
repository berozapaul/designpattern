export class Command {
    public execute(): void {
        throw new Error("Abstract method!");
    }
}

export class AddToCart extends Command {
    private receiver: Receiver;

    constructor(receiver: Receiver) {
        super();
        this.receiver = receiver;
    }

    public execute(): void {
        console.log("`execute` method of AddToCart is being called!");
        this.receiver.action();
    }
}

export class AddToWishList extends Command {
    private receiver: Receiver;

    constructor(receiver: Receiver) {
        super();
        this.receiver = receiver;
    }

    public execute(): void {
        console.log("`execute` method of AddToWishList is being called!");
        this.receiver.action();
    }
}

export class Invoker {
    private commands: Command[];

    constructor() {
        this.commands = [];
    }

    public storeAndExecute(cmd: Command) {
        this.commands.push(cmd);
        cmd.execute();
    }
    
    public getCommands () {
        return this.commands;
    }
 }

export class Receiver {
    public action(): void {
        console.log("action is being called!");
    }
}

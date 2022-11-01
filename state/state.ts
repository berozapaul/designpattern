export interface State {
    handle(context: Context): void;
}

export class startOrder implements State {
    public handle(context: Context): void {
        console.log("`handle` method of startOrder is being called!");
    }
}

export class finishOrder implements State {
    public handle(context: Context): void {
        console.log("`handle` method of finishOrder is being called!");
    }
}

export class Context {
    private state: State;

    constructor(state: State) {
        this.state = state;
    }

    get State(): State {
        return this.state;
    }

    set State(state: State) {
        this.state = state;
    }

    public request(): void {
        console.log("request is being called!");
        this.state.handle(this);
    }
}
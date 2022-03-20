export class Singleton {
    // A variable which stores the singleton object. Initially,
    // the variable acts like a placeholder
    private static instance: Singleton;

    // private constructor so that no instance is created
    private constructor() {
    }

    // This is how we create a singleton object
    public static getInstance(): Singleton {
        // check if an instance of the class is already created
        if (!Singleton.instance) {
            // If not created create an instance of the class
            // store the instance in the variable
            Singleton.instance = new Singleton();
        }
        // return the singleton object
        return Singleton.instance;
    }
}

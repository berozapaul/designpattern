export default abstract class DataMiner {
    /**
     * The template method defines the skeleton of an algorithm.
     */
    public templateMethod(): void {
        this.openFile();
        this.extractData();
        this.processData();
        this.analyzeData();
        this.sendReport();
        this.closeFile();
    }

    /**
     * These operations already have implementations.
     */
    protected analyzeData(): void {
        console.log('AbstractClass says: I am doing the data analysis work ');
    }

    protected sendReport(): void {
        console.log('AbstractClass says: I will send the report after analyzing the data');
    }

    /**
     * These operations have to be implemented in subclasses.
     */
    protected abstract openFile(): void;
    protected abstract extractData(): void;
    protected abstract processData(): void;
    protected abstract closeFile(): void;
}
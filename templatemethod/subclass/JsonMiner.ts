import DataMiner from '../DataMiner'

export default class JsonMiner extends DataMiner {

    protected openFile(): void {
        console.log('JsonMiner says: I have implemented openFile');
    }

    protected extractData(): void {
        console.log('JsonMiner says: I have implemented extractData');
    }

    protected processData(): void {
        console.log('JsonMiner says: I have implemented processData');
    }

    protected closeFile(): void {
        console.log('JsonMiner says: I have implemented closeFile');
    }

}


import DataMiner from '../DataMiner'

export default class PdfMiner extends DataMiner {

    protected openFile(): void {
        console.log('PdfMiner says: I have implemented openFile');
    }

    protected extractData(): void {
        console.log('PdfMiner says: I have implemented extractData');
    }

    protected processData(): void {
        console.log('PdfMiner says: I have implemented processData');
    }

    protected closeFile(): void {
        console.log('PdfMiner says: I have implemented closeFile');
    }

}


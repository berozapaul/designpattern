import PdfMiner from './subclass/PdfMiner'
import JsonMiner from './subclass/JsonMiner'


const dataMiner = new PdfMiner();
dataMiner.templateMethod();


console.log("===========================================");

const jsonMiner = new JsonMiner();
jsonMiner.templateMethod();
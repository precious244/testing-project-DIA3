export class Buah {

    rasa: string = "";
    vitamin: string = "";
    manfaat: string = "";

    setRasa(rasa: string){
        this.rasa = rasa;        
    }

    setVitamin(vitamin: string){
        this.vitamin = vitamin;        
    }

    setManfaat(manfaat: string){
        this.manfaat = manfaat;        
    }

    getRasa(): string{
        return this.rasa;
    }

    getVitamin(): string{
        return this.vitamin;
    }

    getManfaat(): string{
        return this.manfaat;
    }
}


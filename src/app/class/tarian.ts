export class Tarian {

    jumlahpenari: number = 0;
    asal: string = "";
    alatmusik: string = "";

    setJumlahpenari(jumlahpenari: number){
        this.jumlahpenari = jumlahpenari;
    }   

    setAsal(asal: string) {
        this.asal = asal;        
    }  

    setAlatmusik(alatmusik: string) {
        this.alatmusik = alatmusik;        
    }

    getJumlahpenari(): number{
        return this.jumlahpenari;
    }
    
    getAsal(): string{
        return this.asal;
    }

    getAlatmusik(): string{
        return this.alatmusik;
    }
}

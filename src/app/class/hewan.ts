export class Hewan {

    berkaki: number = 0;
    kelas: string = "";
    habitat: string = "";

    setBerkaki(berkaki: number){
        this.berkaki = berkaki;
    }

    setKelas(kelas: string){
        this.kelas = kelas;        
    }

    setHabitat(habitat: string){
        this.habitat = habitat;        
    }
    getBerkaki(): number{
        return this.berkaki;
    }

    getKelas(): string{
        return this.kelas;
    }

    getHabitat(): string{
        return this.habitat;
    }
}

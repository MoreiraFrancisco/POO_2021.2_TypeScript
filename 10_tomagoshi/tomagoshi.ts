const readline = require('readline-sync');
let input = (): string => readline.question();
let write = (x : any) => process.stdout.write("" + x);

class Tomagoshi {
energia: number;
saciedade: number;
limpeza: number;
idade: number;
diamantes: number;
eneMax : number;
sacMax : number;
limMax : number;


    constructor (energia : number, saciedade : number,  limpeza : number) {
        this.energia = energia;
        this.eneMax = energia;
        this.saciedade = saciedade;
        this.sacMax = saciedade;
        this.limpeza = limpeza;
        this.limMax = limpeza;
        this.diamantes = 0;
        this.idade = 0;
    }

    public toString() {
        return (`E:${this.eneMax}/${this.energia}, S:${this.sacMax}/${this.saciedade}, L:${this.limMax}/${this.limpeza}, D:${this.diamantes}, I:${this.idade}`);
    }

    public setEne(novEne : number) {
        this.energia =  novEne + this.energia;
    }

    public setSac(novSac : number) {
        this.saciedade = novSac + this.saciedade;
    }

    public setLim(novLim : number) {
        this.limpeza = novLim + this.limpeza;
    }

}




class Board {
    ativo: Tomagoshi;

    constructor (energia : number, saciedade : number, limpeza : number) {
        this.ativo = new Tomagoshi(energia, saciedade, limpeza);
    }

    brincar() {
        this.ativo.energia -= 2;
        this.ativo.saciedade -= 1;
        this.ativo.limpeza -= 3;
        this.ativo.idade +=1;
        this.ativo.diamantes += 1;
        if (this.ativo.energia <= 0) {
            return console.log("seu amiguinho morreu de cansaço");
        }
        if (this.ativo.saciedade <= 0) {
            return console.log("seu amiguinho morreu de bucho vazio");
        }
        if (this.ativo.limpeza <= 0) {
            return console.log("seu amiguinho morreu de imundice");
        }

    
    }   
    
    comer() {
        this.ativo.energia -= 1;
        this.ativo.saciedade += 4;
        this.ativo.limpeza -= 2;
        this.ativo.idade +=1;
        if (this.ativo.energia > this.ativo.eneMax) {
            this.ativo.energia = this.ativo.eneMax;
        }
        if (this.ativo.saciedade > this.ativo.sacMax) {
            this.ativo.saciedade = this.ativo.sacMax;  
        }
        if (this.ativo.energia <= 0) {
            return console.log("seu amiguinho está morto");
        }
        if (this.ativo.limpeza <= 0) {
            return console.log("seu amiguinho morreu de imundice");
        }
    }   

    dormir() {
        let dorme : number = this.ativo.eneMax - this.ativo.energia; 
        if ( dorme < 5 ) {
           return ("seu amiguinho não está com sono");
        }
        this.ativo.energia += dorme;
        this.ativo.idade +=  dorme;
        this.ativo.saciedade -= dorme;
        if (this.ativo.saciedade <= 0) {
            return console.log("seu amiguinho morreu de bucho vazio");
        }
    }   
       
    banho() {
        this.ativo.limpeza = this.ativo.limMax;
        this.ativo.saciedade -= 1;
        this.ativo.energia -= 3;
        this.ativo.idade += 1;
        if (this.ativo.energia <= 0) {
            return console.log("seu amiguinho morreu de cansaço");
        }
        if (this.ativo.saciedade <= 0) {
            return console.log("seu amiguinho morreu de bucho vazio");
        } 
    }
    
    
    toString2() {
        return (`E:${this.ativo.energia}/${this.ativo.eneMax}, S:${this.ativo.saciedade}/${this.ativo.sacMax}, L:${this.ativo.limpeza}/${this.ativo.limMax}, D:${this.ativo.diamantes}, I:${this.ativo.idade}`);
    }
    
    



}

// let ash = new Tomagoshi (20, 20, 15);
// //ash.comer(); não funciona, ele nao encontra 
// //ash.comer();
// console.log(ash.toString());

let brok = new Board (20, 20, 20);
brok.comer();
brok.brincar();
//brok.brincar();
brok.comer();
brok.brincar();
console.log(brok.toString2());
brok.dormir();
brok.brincar();
brok.brincar();
brok.banho();
brok.brincar();
brok.brincar();
brok.brincar();
brok.brincar();
brok.brincar();
brok.brincar();
brok.brincar();
brok.brincar();
brok.brincar();
console.log(brok.toString2());

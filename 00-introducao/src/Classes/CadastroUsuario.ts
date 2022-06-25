import {Endereco} from "./Endereco";
import {Sexo} from "./Sexo";


export class CadastroUsuario{

    private _nome: string;
    private _cpf: number;
    private _rg: number;
    private _sexo: Sexo;
    private _endereco: Endereco;


    constructor(nome: string, cpf: number,rg: number,sexo: Sexo, endereco: Endereco) {
     this._nome = nome;
     this._cpf =  cpf;
     this._rg =  rg;
     this._sexo = sexo;
     this._endereco = endereco;
    }

    get nome(): string{
        return this._nome;
    }

    set nome(nome:string){
        this._nome = nome;
    }

    get cpf(): number{
        return this._cpf;
    }

    set cpf(cpf:number){
        this._cpf = cpf;
    }

    get rg(): number{
        return this._rg;
    }

    set rg(rg:number){
        this._rg = rg;
    }



}
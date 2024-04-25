import { Injectable } from '@nestjs/common';
import { ortographyCheckUseCase } from './gpt/use-cases/orthografhy.use-case';
import OpenAI from 'openai';
import { Marcador } from './airis/classes/marcador.class';


@Injectable()
export class AppService {

  marcadores:Marcador[]=[];
  marcador:any[]=[];
  marcadoresLocalStore:Mark[]=[];
  ventas: Ventas[]=[];

  constructor(){
     this.marcador=[{"lat": 4.790785260706295, "lng": -75.61841482044373}, 
                    {"lat": 4.819343065560166, "lng": -75.6816087981781}]   
  }

  getMarcadores () : Marcador[]  {
    return this.marcador;
  }


  guardarMarcador(marcador: Marcador[]){
    console.log('marcado a guardar '+ JSON.stringify(marcador));
    this.marcador=marcador;
    return this.marcador;
  }

  getVentas(){
    const venta= {mes:'Enero',cantInmuebles: 20, totalVentas:40000000}
    this.ventas.push(venta);
    return this.ventas;
  }


}

export interface Mark {
  lat:number;
  lng:number;
}

export interface Ventas {

  mes:string;
  cantInmuebles:number;
  totalVentas:number;
  
}
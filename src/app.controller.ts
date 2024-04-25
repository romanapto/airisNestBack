import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Marcador } from './airis/classes/marcador.class';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMarcadores(): Marcador[] {
    return this.appService.getMarcadores();
  }

  /*@Get()
  getMarcadores2(): Promise<Marcador[]> {
    return this.appService.getMarcadoresFire();
  }*/

  @Put('guardar-marcador')
  guardarMarcador(
    @Body() marcador:Marcador[]
  ){    
    return this.appService.guardarMarcador(marcador);
  }

  @Post('ventas')
  getVentas(){    
    return this.appService.getVentas()
  }


}

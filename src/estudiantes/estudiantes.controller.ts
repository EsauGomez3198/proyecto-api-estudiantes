import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Estudiantes } from './estudiantes.interface';
import { EstudiantesService } from './estudiantes.service';

@Controller('estudiantes')
export class EstudiantesController {
    constructor(private readonly servicio: EstudiantesService) {}

    @Get()
    ObtenerEstudiantes(): Promise<Estudiantes[]>{
        return this.servicio.list();
    }

    @Get(':_id')
    ObtenerEstudiante(@Param('_id') id): Promise<Estudiantes>{
        return this.servicio.get(id);
    }

    @Post()
    CrearEstudiante(@Body() body: Estudiantes): Promise<Estudiantes> {
        return this.servicio.create(body);
    }

    @Put(':_id')
    ActualizarEstudiante(@Param('_id') id, @Body() body: Estudiantes): Promise<Estudiantes> {
        return this.servicio.update(id,body);
    }

    @Delete(':_id')
    EliminarEstudiante(@Param('_id') id): Promise<Estudiantes>
    {
      return this.servicio.delete(id);
    }
}

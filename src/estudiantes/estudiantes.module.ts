import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EstudiantesController } from './estudiantes.controller';
import { EstudiantesService } from './estudiantes.service';
import { EstudianteSchema } from './schemas/estudiante.schema';

@Module({
    imports:[MongooseModule.forFeature([{name:'Estudiantes',schema:EstudianteSchema}])],
    providers: [EstudiantesService],
    controllers: [EstudiantesController],
})

export class EstudiantesModule {}

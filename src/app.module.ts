import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [EstudiantesModule, ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGO_DB)], //colocar la url de la base de datos en mongo enlinea
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

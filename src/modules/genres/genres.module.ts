import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { GenresService } from './genres.service';
import { GenresResolver } from './resolvers/genres.resolver';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [AuthModule, PassportModule],
  providers: [GenresService, GenresResolver],
  exports: [GenresService],
})
export class GenresModule {}

import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { GenresService } from '../genres/genres.service';
import { BandsService } from './bands.service';
import { BandsResolver } from './resolvers/bands.resolver';

@Module({
  imports: [AuthModule],
  providers: [BandsService, GenresService, BandsResolver],
  exports: [BandsService],
})
export class BandsModule {}

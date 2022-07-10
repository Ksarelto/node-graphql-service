import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { BandsService } from '../bands/bands.service';
import { ArtistsService } from './artists.service';
import { ArtistsResolver } from './resolvers/artists.resolver';

@Module({
  imports: [AuthModule],
  providers: [ArtistsService, BandsService, ArtistsResolver],
  exports: [ArtistsService],
})
export class ArtistsModule {}

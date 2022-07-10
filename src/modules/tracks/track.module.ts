import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { TracksResolver } from './resolvers/tracks.resolver';
import { TracksService } from './tracks.service';
import { PassportModule } from '@nestjs/passport';
import { GenresService } from '../genres/genres.service';
import { BandsService } from '../bands/bands.service';
import { ArtistsService } from '../artists/artists.service';
import { AlbumsService } from '../albums/albums.service';

@Module({
  imports: [AuthModule, PassportModule],
  providers: [
    TracksService,
    GenresService,
    BandsService,
    ArtistsService,
    AlbumsService,
    TracksResolver,
  ],
  exports: [TracksService],
})
export class TracksModule {}

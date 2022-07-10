import { Module } from '@nestjs/common';
import { ArtistsService } from '../artists/artists.service';
import { AuthModule } from '../auth/auth.module';
import { BandsService } from '../bands/bands.service';
import { GenresService } from '../genres/genres.service';
import { TracksService } from '../tracks/tracks.service';
import { AlbumsService } from './albums.service';
import { AlbumsResolver } from './resolvers/albums.resolver';

@Module({
  imports: [AuthModule],
  providers: [
    BandsService,
    AlbumsService,
    TracksService,
    GenresService,
    ArtistsService,
    AlbumsResolver,
  ],
  exports: [AlbumsService],
})
export class AlbumsModule {}

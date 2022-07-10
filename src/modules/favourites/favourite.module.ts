import { Module } from '@nestjs/common';
import { ArtistsService } from '../artists/artists.service';
import { AuthModule } from '../auth/auth.module';
import { BandsService } from '../bands/bands.service';
import { GenresService } from '../genres/genres.service';
import { TracksService } from '../tracks/tracks.service';
import { FavouritesService } from './favourites.service';
import { FavouritesResolver } from './resolvers/favourites.resolver';

@Module({
  imports: [AuthModule],
  providers: [
    FavouritesService,
    BandsService,
    GenresService,
    ArtistsService,
    TracksService,
    FavouritesResolver,
  ],
  exports: [FavouritesService],
})
export class FavouritesModule {}

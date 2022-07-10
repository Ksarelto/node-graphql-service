import { UseGuards } from '@nestjs/common';
import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/modules/auth/auth-guard';
import { FavouritesService } from '../favourites.service';
import { Favourite } from '../dto/favourite.model';
import { RequestToken } from 'src/common/request-token.decorator';
import { Band } from 'src/modules/bands/dto/band.model';
import { Artist } from 'src/modules/artists/dto/artist.module';
import { Track } from 'src/modules/tracks/dto/track.model';
import { Genre } from 'src/modules/genres/dto/genre.model';
import { FavouriteInput } from '../dto/favourite.input';
import { TracksService } from 'src/modules/tracks/tracks.service';
import { GenresService } from 'src/modules/genres/genres.service';
import { BandsService } from 'src/modules/bands/bands.service';
import { ArtistsService } from 'src/modules/artists/artists.service';

@Resolver(() => Favourite)
@UseGuards(JwtAuthGuard)
export class FavouritesResolver {
  constructor(
    private favouritesService: FavouritesService,
    private bandsService: BandsService,
    private artistsService: ArtistsService,
    private genresService: GenresService,
    private tracksService: TracksService,
  ) {}

  @Query(() => Favourite)
  async favourites(@RequestToken() token: string) {
    const favourite = await this.favouritesService.getFavourite(token);
    return favourite;
  }

  @Mutation(() => Favourite)
  async addTrackToFavourites(
    @RequestToken() token: string,
    @Args('trackId') id: string,
  ) {
    const favourite = await this.favouritesService.addTrackToFavourites(
      id,
      token,
    );
    return favourite;
  }

  @Mutation(() => Favourite)
  async addBandToFavourites(
    @RequestToken() token: string,
    @Args('bandId') id: string,
  ) {
    const favourite = await this.favouritesService.addBandToFavourites(
      id,
      token,
    );
    return favourite;
  }

  @Mutation(() => Favourite)
  async addArtistToFavourites(
    @RequestToken() token: string,
    @Args('artistId') id: string,
  ) {
    const favourite = await this.favouritesService.addArtistToFavourites(
      id,
      token,
    );
    return favourite;
  }

  @Mutation(() => Favourite)
  async addGenreToFavourites(
    @RequestToken() token: string,
    @Args('genreId') id: string,
  ) {
    const favourite = await this.favouritesService.addGenreToFavourites(
      id,
      token,
    );
    return favourite;
  }

  @ResolveField(() => [Band])
  async bands(@Parent() favourites: FavouriteInput) {
    const bands = await Promise.all(
      favourites.bandsIds.map((id) => {
        return this.bandsService.getBand(id);
      }),
    );

    return bands;
  }

  @ResolveField(() => [Artist])
  async artists(@Parent() favourites: FavouriteInput) {
    const artists = await Promise.all(
      favourites.artistsIds.map((id) => {
        return this.artistsService.getArtist(id);
      }),
    );

    return artists;
  }

  @ResolveField(() => [Track])
  async tracks(@Parent() favourites: FavouriteInput) {
    const tracks = await Promise.all(
      favourites.tracksIds.map((id) => {
        return this.tracksService.getTrack(id);
      }),
    );

    return tracks;
  }

  @ResolveField(() => [Genre])
  async genres(@Parent() favourites: FavouriteInput) {
    const genres = await Promise.all(
      favourites.genresIds.map((id) => {
        return this.genresService.getGenre(id);
      }),
    );

    return genres;
  }
}

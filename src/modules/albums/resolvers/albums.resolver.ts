import { UseGuards } from '@nestjs/common';
import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { QueryParams } from 'src/common/query.params';
import { RequestToken } from 'src/common/request-token.decorator';
import { ArtistsService } from 'src/modules/artists/artists.service';
import { Artist } from 'src/modules/artists/dto/artist.module';
import { JwtAuthGuard } from 'src/modules/auth/auth-guard';
import { BandsService } from 'src/modules/bands/bands.service';
import { Band } from 'src/modules/bands/dto/band.model';
import { Genre } from 'src/modules/genres/dto/genre.model';
import { GenresService } from 'src/modules/genres/genres.service';
import { Track } from 'src/modules/tracks/dto/track.model';
import { TracksService } from 'src/modules/tracks/tracks.service';
import { AlbumsService } from '../albums.service';
import { AlbumUpdateInput } from '../dto/album-update.input';
import { AlbumInput } from '../dto/album.input';
import { Album } from '../dto/album.model';

@Resolver(() => Album)
export class AlbumsResolver {
  constructor(
    private albumsService: AlbumsService,
    private bandsService: BandsService,
    private artistsService: ArtistsService,
    private genresService: GenresService,
    private tracksService: TracksService,
  ) {}

  @Query(() => Album)
  async album(@Args('id') id: string) {
    const album = await this.albumsService.getAlbum(id);
    return album;
  }

  @Query(() => [Album])
  async albums(@Args() args: QueryParams) {
    const albums = await this.albumsService.getAlbums(args);
    return albums;
  }

  @Mutation(() => Album)
  @UseGuards(JwtAuthGuard)
  async createAlbum(
    @RequestToken() token: string,
    @Args('albumInput') albumData: AlbumInput,
  ) {
    const album = await this.albumsService.createAlbum(albumData, token);
    return album;
  }

  @Mutation(() => Album)
  @UseGuards(JwtAuthGuard)
  async updateAlbum(
    @RequestToken() token: string,
    @Args('albumId') id: string,
    @Args('albumInput') albumData: AlbumUpdateInput,
  ) {
    const album = await this.albumsService.updateAlbum(id, albumData, token);
    return album;
  }

  @Mutation(() => String)
  @UseGuards(JwtAuthGuard)
  async deleteAlbum(
    @RequestToken() token: string,
    @Args('albumId') id: string,
  ) {
    const album = await this.albumsService.deleteAlbum(id, token);
    return album;
  }

  @ResolveField(() => [Band])
  async bands(@Parent() album: AlbumInput) {
    const bands = await Promise.all(
      album.bandsIds.map((id) => {
        return this.bandsService.getBand(id);
      }),
    );

    return bands;
  }

  @ResolveField(() => [Artist])
  async artists(@Parent() album: AlbumInput) {
    const artists = await Promise.all(
      album.artistsIds.map((id) => {
        return this.artistsService.getArtist(id);
      }),
    );

    return artists;
  }

  @ResolveField(() => [Track])
  async tracks(@Parent() album: AlbumInput) {
    const tracks = await Promise.all(
      album.trackIds.map((id) => {
        return this.tracksService.getTrack(id);
      }),
    );

    return tracks;
  }

  @ResolveField(() => [Genre])
  async genres(@Parent() album: AlbumInput) {
    const genres = await Promise.all(
      album.genresIds.map((id) => {
        return this.genresService.getGenre(id);
      }),
    );

    return genres;
  }
}

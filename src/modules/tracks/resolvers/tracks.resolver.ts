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
import { AlbumsService } from 'src/modules/albums/albums.service';
import { Album } from 'src/modules/albums/dto/album.model';
import { ArtistsService } from 'src/modules/artists/artists.service';
import { Artist } from 'src/modules/artists/dto/artist.module';
import { JwtAuthGuard } from 'src/modules/auth/auth-guard';
import { BandsService } from 'src/modules/bands/bands.service';
import { Band } from 'src/modules/bands/dto/band.model';
import { Genre } from 'src/modules/genres/dto/genre.model';
import { GenresService } from 'src/modules/genres/genres.service';
import { TrackUpdateInput } from '../dto/track-upddate.input';
import { TrackInput } from '../dto/track.input';
import { Track } from '../dto/track.model';
import { TracksService } from '../tracks.service';

@Resolver(() => Track)
export class TracksResolver {
  constructor(
    private tracksService: TracksService,
    private bandsService: BandsService,
    private artistsService: ArtistsService,
    private genresService: GenresService,
    private albumsService: AlbumsService,
  ) {}

  @Query(() => Track)
  async track(@Args('id') id: string) {
    const track = await this.tracksService.getTrack(id);
    return track;
  }

  @Query(() => [Track])
  async tracks(@Args() args?: QueryParams) {
    const tracks = await this.tracksService.getTracks(args);
    return tracks;
  }

  @Mutation(() => Track)
  @UseGuards(JwtAuthGuard)
  async createTrack(
    @RequestToken() token: string,
    @Args('trackInput') trackInput: TrackInput,
  ) {
    const track = await this.tracksService.createTrack(trackInput, token);
    return track;
  }

  @Mutation(() => Track)
  @UseGuards(JwtAuthGuard)
  async updateTrack(
    @RequestToken() token: string,
    @Args('trackId') id: string,
    @Args('trackInput') trackInput: TrackUpdateInput,
  ) {
    const track = await this.tracksService.updateTrack(id, trackInput, token);
    return track;
  }

  @Mutation(() => String)
  @UseGuards(JwtAuthGuard)
  async deleteTrack(
    @RequestToken() token: string,
    @Args('trackId') id: string,
  ) {
    const response = await this.tracksService.deleteTrack(id, token);
    return response;
  }

  @ResolveField(() => [Band])
  async bands(@Parent() track: TrackInput) {
    const bands = await Promise.all(
      track.bandsIds.map((id) => {
        return this.bandsService.getBand(id);
      }),
    );

    return bands;
  }

  @ResolveField(() => [Artist])
  async artists(@Parent() track: TrackInput) {
    const artists = await Promise.all(
      track.artistsIds.map((id) => {
        return this.artistsService.getArtist(id);
      }),
    );

    return artists;
  }

  @ResolveField(() => [Genre])
  async genres(@Parent() track: TrackInput) {
    const genres = await Promise.all(
      track.genresIds.map((id) => {
        return this.genresService.getGenre(id);
      }),
    );
    return genres;
  }

  @ResolveField(() => Album)
  async album(@Parent() track: TrackInput) {
    const album = await this.albumsService.getAlbum(track.albumId);
    return album;
  }
}

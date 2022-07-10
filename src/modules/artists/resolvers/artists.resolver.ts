import { UseGuards } from '@nestjs/common';
import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { RequestToken } from 'src/common/request-token.decorator';
import { JwtAuthGuard } from 'src/modules/auth/auth-guard';
import { BandsService } from 'src/modules/bands/bands.service';
import { Band } from 'src/modules/bands/dto/band.model';
import { ArtistsService } from '../artists.service';
import { ArtistUpdateInput } from '../dto/artist-update.input';
import { ArtistInput } from '../dto/artist.input';
import { Artist } from '../dto/artist.module';

@Resolver(() => Artist)
export class ArtistsResolver {
  constructor(
    private artistsService: ArtistsService,
    private bandsService: BandsService,
  ) {}

  @Query(() => Artist)
  async artist(@Args('id') id: string) {
    const artist = await this.artistsService.getArtist(id);
    return artist;
  }

  @Query(() => [Artist])
  async artists() {
    const artists = await this.artistsService.getArtists();
    return artists;
  }

  @Mutation(() => Artist)
  @UseGuards(JwtAuthGuard)
  async createArtist(
    @RequestToken() token: string,
    @Args('artistInput') artistData: ArtistInput,
  ) {
    const artist = await this.artistsService.createArtist(artistData, token);
    return artist;
  }

  @Mutation(() => Artist)
  @UseGuards(JwtAuthGuard)
  async updateArtist(
    @RequestToken() token: string,
    @Args('artistId') id: string,
    @Args('artistInput') artistData: ArtistUpdateInput,
  ) {
    const artist = await this.artistsService.updateArtist(
      id,
      artistData,
      token,
    );
    return artist;
  }

  @Mutation(() => String)
  @UseGuards(JwtAuthGuard)
  async deleteArtist(
    @RequestToken() token: string,
    @Args('artistId') id: string,
  ) {
    const artist = await this.artistsService.deleteArtist(id, token);
    return artist;
  }

  @ResolveField(() => [Band])
  async bands(@Parent() artist: ArtistInput) {
    const bands = await Promise.all(
      artist.bandsIds.map((id) => {
        return this.bandsService.getBand(id);
      }),
    );

    return bands;
  }
}

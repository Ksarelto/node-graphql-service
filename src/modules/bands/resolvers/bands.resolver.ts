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
import { JwtAuthGuard } from 'src/modules/auth/auth-guard';
import { Genre } from 'src/modules/genres/dto/genre.model';
import { GenresService } from 'src/modules/genres/genres.service';
import { BandsService } from '../bands.service';
import { BandUpdateInput } from '../dto/band-update.input';
import { BandInput } from '../dto/band.input';
import { Band } from '../dto/band.model';

@Resolver(() => Band)
export class BandsResolver {
  constructor(
    private bandsService: BandsService,
    private genresService: GenresService,
  ) {}

  @Query(() => Band)
  async band(@Args('bandId') id: string) {
    const band = await this.bandsService.getBand(id);
    return band;
  }

  @Query(() => [Band])
  async bands(@Args() args: QueryParams) {
    const bands = await this.bandsService.getBands(args);
    return bands;
  }

  @Mutation(() => Band)
  @UseGuards(JwtAuthGuard)
  async createBand(
    @RequestToken() token: string,
    @Args('bandInput') bandData: BandInput,
  ) {
    const band = await this.bandsService.createBand(bandData, token);
    return band;
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Band)
  async updateBand(
    @RequestToken() token: string,
    @Args('bandId') id: string,
    @Args('bandInput') bandData: BandUpdateInput,
  ) {
    const band = await this.bandsService.updateBand(id, bandData, token);
    return band;
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => String)
  async deleteBand(@RequestToken() token: string, @Args('bandId') id: string) {
    const response = await this.bandsService.deleteBand(id, token);
    return response;
  }

  @ResolveField(() => [Genre])
  async genres(@Parent() band: BandInput) {
    const genres = await Promise.all(
      band.genresIds.map((id) => {
        return this.genresService.getGenre(id);
      }),
    );

    return genres;
  }
}

import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { QueryParams } from 'src/common/query.params';
import { RequestToken } from 'src/common/request-token.decorator';
import { JwtAuthGuard } from 'src/modules/auth/auth-guard';
import { GenreUpdateInput } from '../dto/genre-update.input';
import { GenreInput } from '../dto/genre.input';
import { Genre } from '../dto/genre.model';
import { GenresService } from '../genres.service';

@Resolver('Genre')
export class GenresResolver {
  constructor(private genresService: GenresService) {}

  @Query(() => Genre)
  async genre(@Args('id') id: string) {
    const genre = await this.genresService.getGenre(id);
    return genre;
  }

  @Query(() => [Genre])
  async genres(@Args() args: QueryParams) {
    const genres = await this.genresService.getGenres(args);
    return genres;
  }

  @Mutation(() => Genre)
  @UseGuards(JwtAuthGuard)
  async createGenre(
    @RequestToken() token: string,
    @Args('genreInput') genreInput: GenreInput,
  ) {
    const genre = await this.genresService.createGenre(genreInput, token);
    return genre;
  }

  @Mutation(() => Genre)
  @UseGuards(JwtAuthGuard)
  async updateGenre(
    @RequestToken() token: string,
    @Args('genreId') id: string,
    @Args('genreData') genreInput: GenreUpdateInput,
  ) {
    const genre = await this.genresService.updateGenre(id, genreInput, token);
    return genre;
  }

  @Mutation(() => String)
  @UseGuards(JwtAuthGuard)
  async deleteGenre(
    @RequestToken() token: string,
    @Args('genreId') id: string,
  ) {
    const genre = await this.genresService.deleteGenre(id, token);
    return genre;
  }
}

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Artist } from 'src/modules/artists/dto/artist.module';
import { Band } from 'src/modules/bands/dto/band.model';
import { Genre } from 'src/modules/genres/dto/genre.model';
import { Track } from 'src/modules/tracks/dto/track.model';

@ObjectType()
export class Favourite {
  @Field(() => ID)
  id: string;

  @Field(() => ID, { nullable: true })
  userId: string;

  @Field(() => [Band], { nullable: 'itemsAndList' })
  bands: Band[];

  @Field(() => [Genre], { nullable: 'itemsAndList' })
  genres: Genre[];

  @Field(() => [Artist], { nullable: 'itemsAndList' })
  artists: Artist[];

  @Field(() => [Track], { nullable: 'itemsAndList' })
  tracks: Track[];
}

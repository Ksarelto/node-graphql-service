import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Artist } from 'src/modules/artists/dto/artist.module';
import { Band } from 'src/modules/bands/dto/band.model';
import { Genre } from 'src/modules/genres/dto/genre.model';
import { Track } from 'src/modules/tracks/dto/track.model';

@ObjectType()
export class Album {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field(() => Int, { nullable: true })
  released: number;

  @Field(() => [Artist], { nullable: 'itemsAndList' })
  artists: Artist[];

  @Field(() => [Band], { nullable: 'itemsAndList' })
  bands: Band[];

  @Field(() => [Track], { nullable: 'itemsAndList' })
  tracks: Track[];

  @Field(() => [Genre], { nullable: 'itemsAndList' })
  genres: Genre[];

  @Field({ nullable: true })
  image: string;
}

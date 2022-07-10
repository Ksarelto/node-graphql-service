import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Album } from 'src/modules/albums/dto/album.model';
import { Artist } from 'src/modules/artists/dto/artist.module';
import { Band } from 'src/modules/bands/dto/band.model';
import { Genre } from 'src/modules/genres/dto/genre.model';

@ObjectType()
export class Track {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  album: Album;

  @Field(() => [Band], { nullable: 'itemsAndList' })
  bands: Band[];

  @Field(() => [Artist], { nullable: 'itemsAndList' })
  artists: Artist[];

  @Field(() => Int, { nullable: true })
  duration: number;

  @Field(() => Int, { nullable: true })
  released: number;

  @Field(() => [Genre], { nullable: 'itemsAndList' })
  genres: Genre[];
}

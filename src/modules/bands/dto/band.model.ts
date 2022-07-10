import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Genre } from 'src/modules/genres/dto/genre.model';

@ObjectType()
class Member {
  @Field()
  artist: string;

  @Field()
  instrument: string;

  @Field(() => [String])
  years: string[];
}

@ObjectType()
export class Band {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  origin: string;

  @Field(() => [Member], { nullable: 'itemsAndList' })
  members: Member[];

  @Field({ nullable: true })
  website: string;

  @Field(() => [Genre], { nullable: 'itemsAndList' })
  genres: Genre[];
}

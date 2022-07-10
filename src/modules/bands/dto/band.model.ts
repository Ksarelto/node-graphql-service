import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Genre } from 'src/modules/genres/dto/genre.model';

@ObjectType()
class Member {
  @Field(() => ID)
  artist: string;

  @Field({ nullable: true })
  firstName: string;

  @Field({ nullable: true })
  secondName: string;

  @Field({ nullable: true })
  middleName: string;

  @Field({ nullable: true })
  country: string;

  @Field({ nullable: true })
  instrument: string;

  @Field(() => [String], { nullable: true })
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

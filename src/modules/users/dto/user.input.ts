import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  password: string;

  @Field()
  email: string;

  @Field(() => [String], { nullable: true })
  favouriteArtistIds: string[];

  @Field(() => [String], { nullable: true })
  favouriteSongsIds: string[];

  @Field(() => [String], { nullable: true })
  favouriteBandsIds: string[];

  @Field(() => [String], { nullable: true })
  favouriteGenresIds: string[];
}

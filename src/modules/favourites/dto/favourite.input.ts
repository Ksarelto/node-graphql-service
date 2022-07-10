import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FavouriteInput {
  @Field(() => String)
  userId: string;

  @Field(() => String)
  bandsIds: string[];

  @Field(() => String)
  genresIds: string[];

  @Field(() => [String])
  artistsIds: string[];

  @Field(() => [String])
  tracksIds: string[];
}

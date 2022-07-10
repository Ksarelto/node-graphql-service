import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AlbumInput {
  @Field(() => String)
  name: string;

  @Field(() => Int, { nullable: true })
  released: number;

  @Field(() => [String], { nullable: true })
  artistsIds: string[];

  @Field(() => [String], { nullable: true })
  bandsIds: string[];

  @Field(() => [String], { nullable: true })
  trackIds: string[];

  @Field(() => [String], { nullable: true })
  genresIds: string[];

  @Field(() => String, { nullable: true })
  image: string;
}

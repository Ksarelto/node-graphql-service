import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class TrackUpdateInput {
  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  albumId: string;

  @Field(() => [String], { nullable: true })
  bandsIds: string[];

  @Field(() => [String], { nullable: true })
  artistsIds: string[];

  @Field(() => Int, { nullable: true })
  duration: number;

  @Field(() => Int, { nullable: true })
  released: number;

  @Field(() => [String], { nullable: true })
  genresIds: string[];
}

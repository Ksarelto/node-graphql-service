import { Field, InputType } from '@nestjs/graphql';

@InputType()
class MemberInput {
  @Field()
  artist: string;

  @Field()
  instrument: string;

  @Field(() => [String])
  years: string[];
}

@InputType()
export class BandInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  origin: string;

  @Field(() => [MemberInput], { nullable: true })
  members: MemberInput[];

  @Field({ nullable: true })
  website: string;

  @Field(() => [String], { nullable: true })
  genresIds: string[];
}

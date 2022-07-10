import { Field, InputType } from '@nestjs/graphql';

@InputType()
class MemberUpdateInput {
  @Field()
  artist: string;

  @Field()
  instrument: string;

  @Field(() => [String])
  years: string[];
}

@InputType()
export class BandUpdateInput {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  origin: string;

  @Field(() => [MemberUpdateInput], { nullable: true })
  members: MemberUpdateInput[];

  @Field({ nullable: true })
  website: string;

  @Field(() => [String], { nullable: true })
  genresIds: string[];
}

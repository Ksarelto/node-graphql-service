import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
class MemberUpdateInput {
  @Field(() => ID, { nullable: true })
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

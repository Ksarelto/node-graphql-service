import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
class MemberInput {
  @Field(() => ID)
  artist: string;

  @Field()
  firstName: string;

  @Field()
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

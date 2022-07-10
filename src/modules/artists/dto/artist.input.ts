import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ArtistInput {
  @Field()
  firstName: string;

  @Field()
  secondName: string;

  @Field({ nullable: true })
  middleName: string;

  @Field({ nullable: true })
  birthDate: string;

  @Field({ nullable: true })
  birthPlace: string;

  @Field()
  country: string;

  @Field(() => [String], { nullable: true })
  bandsIds: string[];

  @Field(() => [String], { nullable: true })
  instruments: string[];
}

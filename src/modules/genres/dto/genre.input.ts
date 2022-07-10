import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GenreInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  country: string;

  @Field({ nullable: true })
  year: string;
}

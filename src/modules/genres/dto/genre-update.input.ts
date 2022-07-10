import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GenreUpdateInput {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  country: string;

  @Field({ nullable: true })
  year: string;
}

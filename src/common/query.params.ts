import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class QueryParams {
  @Field(() => Int, { nullable: true })
  offset: number;

  @Field(() => Int, { nullable: true })
  limit: number;
}
import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateDeviceDto 
{
  @Field()
  name: string;

  @Field()
  mobileNumber: string;

  @Field()
  lastConnection: Date;

  @Field(() => Float)
  latitude: number;

  @Field(() => Float)
  longitude: number;
}

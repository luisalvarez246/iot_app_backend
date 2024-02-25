import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeviceDocument = Document<Device>;

@Schema()
export class Device
{
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  mobileNumber: string;

  @Prop({ required: true, type: Date })
  lastConnection: Date;

  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);

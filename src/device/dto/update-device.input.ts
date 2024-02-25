import { CreateDeviceInput } from './create-device.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateDeviceInput extends PartialType(CreateDeviceInput) {
  id: number;
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeviceService } from './device.service';
import { DeviceResolver } from './device.resolver';
import { Device, DeviceSchema } from './schemas/device.schema';

@Module({
	imports: [MongooseModule.forFeature([{ name: Device.name, schema: DeviceSchema }])],
  	providers: [DeviceResolver, DeviceService],
})
export class DeviceModule {}

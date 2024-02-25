import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

@Resolver('Device')
export class DeviceResolver 
{
  constructor(private readonly deviceService: DeviceService) {}

  @Mutation('createDevice')
  async createDevice(@Args('createDeviceDto') createDeviceDto: CreateDeviceDto) 
  {
    return (await this.deviceService.create(createDeviceDto));
  }

  @Query('devices')
  async findAll() 
  {
    return (await this.deviceService.findAll());
  }

  @Query('device')
  async findOne(@Args('id') id: string) 
  {
    return (await this.deviceService.findOne(id));
  }

  @Mutation('updateDevice')
  update(@Args('updateDeviceDto') updateDeviceDto: UpdateDeviceDto) 
  {
    return this.deviceService.update(updateDeviceDto.id, updateDeviceDto);
  }

  @Mutation('removeDevice')
  remove(@Args('id') id: number) 
  {
    return this.deviceService.remove(id);
  }
}

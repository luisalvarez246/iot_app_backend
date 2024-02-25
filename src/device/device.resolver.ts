import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DeviceService } from './device.service';
import { CreateDeviceInput } from './dto/create-device.input';
import { UpdateDeviceInput } from './dto/update-device.input';

@Resolver('Device')
export class DeviceResolver 
{
  constructor(private readonly deviceService: DeviceService) {}

  @Mutation('createDevice')
  create(@Args('createDeviceInput') createDeviceInput: CreateDeviceInput) {
    return this.deviceService.create(createDeviceInput);
  }

  @Query('device')
  findAll() 
  {
    return this.deviceService.findAll();
  }

  @Query('device')
  findOne(@Args('id') id: number) 
  {
    return this.deviceService.findOne(id);
  }

  @Mutation('updateDevice')
  update(@Args('updateDeviceInput') updateDeviceInput: UpdateDeviceInput) 
  {
    return this.deviceService.update(updateDeviceInput.id, updateDeviceInput);
  }

  @Mutation('removeDevice')
  remove(@Args('id') id: number) 
  {
    return this.deviceService.remove(id);
  }
}

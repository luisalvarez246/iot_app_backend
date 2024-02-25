import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device } from './schemas/device.schema';
import { seedData } from 'seed.data';

@Injectable()
export class DeviceService 
{
	constructor(@InjectModel(Device.name) private deviceModel: Model<Device>,) {};

	async create(createDeviceDto: CreateDeviceDto): Promise<Device>
	{
		const createdDevice = new this.deviceModel(createDeviceDto);
		return (await createdDevice.save());
	}	

	async findAll() 
	{
	  return (this.deviceModel.find({}).exec());
	}	

	async findOne(id: string) 
	{
		return this.deviceModel.findOne({ _id: id }).exec();
	}	

	update(id: string, updateDeviceDto: UpdateDeviceDto) 
	{
	  return `This action updates a #${id} device`;
	}	

	remove(id: number) 
	{
	  return `This action removes a #${id} device`;
	}

	async initializeDevices()
	{
		const countDevices = await this.deviceModel.countDocuments().exec();

		if (countDevices < 10)
		{
			await this.deviceModel.insertMany(seedData);
		}
	}
}

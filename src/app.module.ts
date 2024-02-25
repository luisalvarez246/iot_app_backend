import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { DeviceModule } from './device/device.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLDateTime } from 'graphql-scalars';

@Module({
  imports: [
	ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
	  typePaths: ['./**/*.graphql'],
      resolvers: { Date: GraphQLDateTime },
    }),
	MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bhc6bmu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`),
    DeviceModule,
  ],
})
export class AppModule {}
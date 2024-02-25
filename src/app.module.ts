import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path'
import { DeviceModule } from './device/device.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
	  typePaths: ['./**/*.graphql'],
	  definitions: {
		path: join(process.cwd(), 'src/graphql.ts'),
	  },
    }),
    DeviceModule,
  ],
})
export class AppModule {}
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TracksModule } from './modules/tracks/track.module';
import { AlbumsModule } from './modules/albums/albums.module';
import { ArtistsModule } from './modules/artists/artists.module';
import { BandsModule } from './modules/bands/bands.module';
import { FavouritesModule } from './modules/favourites/favourite.module';
import { GenresModule } from './modules/genres/genres.module';
import { AuthModule } from './modules/auth/auth.module';
import { GraphQLError } from 'graphql';
import { errorMessage } from './common/error.parser';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      autoSchemaFile: true,
      formatError: (error: GraphQLError) => {
        return errorMessage(error);
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    TracksModule,
    AlbumsModule,
    ArtistsModule,
    BandsModule,
    FavouritesModule,
    GenresModule,
    TracksModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

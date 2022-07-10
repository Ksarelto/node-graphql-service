import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { idParser } from 'src/common/parseId';

@Injectable()
export class FavouritesService {
  private favourite: AxiosInstance;

  constructor() {
    this.favourite = axios.create({
      baseURL: process.env.FAVOURITES_URL,
    });
  }

  async getFavourite(token: string) {
    const response = await this.favourite.get('', {
      headers: {
        Authorization: token,
      },
    });

    const parsedData = idParser(response.data);
    return parsedData;
  }

  async addTrackToFavourites(id: string, token: string) {
    const trackObject = { id: id, type: 'tracks' };
    const response = await this.favourite.put(`/add`, trackObject, {
      headers: {
        Authorization: token,
      },
    });

    const parsedData = idParser(response.data);
    return parsedData;
  }

  async addBandToFavourites(id: string, token: string) {
    const bandObject = { id: id, type: 'bands' };
    const response = await this.favourite.put(`/add`, bandObject, {
      headers: {
        Authorization: token,
      },
    });

    const parsedData = idParser(response.data);
    return parsedData;
  }

  async addArtistToFavourites(id: string, token: string) {
    const artistObject = { id: id, type: 'artists' };
    const response = await this.favourite.put(`/add`, artistObject, {
      headers: {
        Authorization: token,
      },
    });

    const parsedData = idParser(response.data);
    return parsedData;
  }

  async addGenreToFavourites(id: string, token: string) {
    const genreObject = { id: id, type: 'genres' };
    const response = await this.favourite.put(`/add`, genreObject, {
      headers: {
        Authorization: token,
      },
    });

    const parsedData = idParser(response.data);
    return parsedData;
  }
}

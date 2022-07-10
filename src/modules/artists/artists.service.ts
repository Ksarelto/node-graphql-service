import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { idParser } from 'src/common/parseId';
import { ArtistInput } from './dto/artist.input';

@Injectable()
export class ArtistsService {
  private artist: AxiosInstance;

  constructor() {
    this.artist = axios.create({
      baseURL: process.env.ARTISTS_URL,
    });
  }

  async getArtist(id: string) {
    const response = await this.artist.get(`/${id}`);

    if (response.data === '') {
      throw new Error('Empty response');
    }

    const parsedData = idParser(response.data);
    return parsedData;
  }

  async getArtists() {
    const response = await this.artist.get('');
    const parsedData = idParser(response.data.items);
    return parsedData;
  }

  async createArtist(artistData: ArtistInput, token: string) {
    const response = await this.artist.post('', artistData, {
      headers: {
        Authorization: token,
      },
    });

    const parsedData = idParser(response.data);
    return parsedData;
  }

  async deleteArtist(id: string, token: string) {
    await this.artist.delete(`/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    return `Artist with id: ${id} was deleted`;
  }

  async updateArtist(id: string, artistData: ArtistInput, token: string) {
    const response = await this.artist.put(`/${id}`, artistData, {
      headers: {
        Authorization: token,
      },
    });

    if (response.data === '') {
      throw new Error('Empty response');
    }

    const parsedData = idParser(response.data);
    return parsedData;
  }
}

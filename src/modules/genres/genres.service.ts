import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { idParser } from 'src/common/parseId';
import { QueryParams } from 'src/common/query.params';
import { GenreInput } from './dto/genre.input';

@Injectable()
export class GenresService {
  private genre: AxiosInstance;

  constructor() {
    this.genre = axios.create({
      baseURL: process.env.GENRES_URL,
    });
  }

  async getGenre(id: string) {
    const response = await this.genre.get(`/${id}`);

    if (response.data === '') {
      throw new Error('Empty response');
    }

    const parsedData = idParser(response.data);
    return parsedData;
  }

  async getGenres(args: QueryParams) {
    const response = await this.genre.get('', {
      params: {
        offset: args.offset,
        limit: args.limit,
      },
    });

    const parsedData = idParser(response.data.items);
    return parsedData;
  }

  async createGenre(genreData: GenreInput, token: string) {
    const response = await this.genre.post('', genreData, {
      headers: {
        Authorization: token,
      },
    });

    const parsedData = idParser(response.data);
    return parsedData;
  }

  async deleteGenre(id: string, token: string) {
    await this.genre.delete(`/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    return `Band with id: ${id} was deleted`;
  }

  async updateGenre(id: string, genreData: GenreInput, token: string) {
    const response = await this.genre.post(`/${id}`, genreData, {
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

import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { idParser } from 'src/common/parseId';
import { QueryParams } from 'src/common/query.params';
import { AlbumInput } from './dto/album.input';

@Injectable()
export class AlbumsService {
  private album: AxiosInstance;

  constructor() {
    this.album = axios.create({
      baseURL: process.env.ALBUMS_URL,
    });
  }

  async getAlbum(id: string) {
    const response = await this.album.get(`/${id}`);

    if (response.data === '') {
      throw new Error('Empty response');
    }

    const parsedData = idParser(response.data);
    return parsedData;
  }

  async getAlbums(args: QueryParams) {
    const response = await this.album.get('', {
      params: {
        offset: args.offset,
        limit: args.limit,
      },
    });
    const parsedData = idParser(response.data.items);
    return parsedData;
  }

  async createAlbum(albumData: AlbumInput, token: string) {
    const response = await this.album.post('', albumData, {
      headers: {
        Authorization: token,
      },
    });

    const parsedData = idParser(response.data);
    return parsedData;
  }

  async deleteAlbum(id: string, token: string) {
    await this.album.delete(`/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    return `Album with id: ${id} was deleted`;
  }

  async updateAlbum(id: string, albumData: AlbumInput, token: string) {
    const response = await this.album.put(`/${id}`, albumData, {
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

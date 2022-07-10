import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { idParser } from 'src/common/parseId';
import { QueryParams } from 'src/common/query.params';
import { TrackInput } from './dto/track.input';

@Injectable()
export class TracksService {
  private track: AxiosInstance;

  constructor() {
    this.track = axios.create({
      baseURL: process.env.TRACKS_URL,
    });
  }

  async getTrack(id: string) {
    const response = await this.track.get(`/${id}`);

    if (response.data === '') {
      throw new Error('Empty response');
    }

    const parsedData = idParser(response.data);
    return parsedData;
  }

  async getTracks(args: QueryParams) {
    const response = await this.track.get('', {
      params: {
        offset: args.offset,
        limit: args.limit,
      },
    });

    const parsedData = idParser(response.data.items);
    return parsedData;
  }

  async createTrack(trackData: TrackInput, token: string) {
    const response = await this.track.post('', trackData, {
      headers: {
        Authorization: token,
      },
    });

    const parsedData = idParser(response.data);
    return parsedData;
  }

  async deleteTrack(id: string, token: string) {
    await this.track.delete(`/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    return `Track with id: ${id} was deleted`;
  }

  async updateTrack(id: string, trackData: TrackInput, token: string) {
    const response = await this.track.put(`/${id}`, trackData, {
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

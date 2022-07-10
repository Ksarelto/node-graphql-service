import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { idParser } from 'src/common/parseId';
import { QueryParams } from 'src/common/query.params';
import { BandInput } from './dto/band.input';

@Injectable()
export class BandsService {
  private band: AxiosInstance;

  constructor() {
    this.band = axios.create({
      baseURL: process.env.BANDS_URL,
    });
  }

  async getBand(id: string) {
    const response = await this.band.get(`/${id}`);

    if (response.data === '') {
      throw new Error('Empty response');
    }

    const parsedData = idParser(response.data);
    return parsedData;
  }

  async getBands(args: QueryParams) {
    const response = await this.band.get('', {
      params: {
        offset: args.offset,
        limit: args.limit,
      },
    });
    const parsedData = idParser(response.data.items);
    return parsedData;
  }

  async createBand(bandData: BandInput, token: string) {
    const response = await this.band.post('', bandData, {
      headers: {
        Authorization: token,
      },
    });
    const parsedData = idParser(response.data);
    return parsedData;
  }

  async deleteBand(id: string, token: string) {
    await this.band.delete(`/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    return `Band with id: ${id} was deleted`;
  }

  async updateBand(id: string, bandData: BandInput, token: string) {
    const response = await this.band.put(`/${id}`, bandData, {
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

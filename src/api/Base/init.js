import { API_KEY, BASE_URL } from '../../config/config';
import {Client} from './client';

export const client = new Client(BASE_URL, API_KEY);
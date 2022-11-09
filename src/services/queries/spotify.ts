import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import spotify from '../queryKeys/spotify';

const ACCESS_KEY = 'ACCESS_KEY';
const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || '';
const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET || '';
const refreshToken = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN || '';

const getData = async () => {
  const accessKey = localStorage.getItem(ACCESS_KEY);

  const res = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      Authorization: `Bearer ${accessKey}`,
    },
  });

  return res.data;
};

const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
};

const getAccessToken = async () => {
  const params = new URLSearchParams();

  params.append('grant_type', 'refresh_token');
  params.append('refresh_token', refreshToken);
  const response = await fetch(authOptions.url, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  });

  const res = await response.json();

  localStorage.setItem(ACCESS_KEY, res?.access_token);
};

const read = (options = {}) => {
  const accessKey = localStorage.getItem(ACCESS_KEY);
  if (!accessKey) {
    getAccessToken();
  }
  const response = useQuery([spotify.read], getData, {
    ...options,
    onSuccess: () => {},
    onError: () => {
      getAccessToken();
    },
    refetchInterval: localStorage.getItem(ACCESS_KEY) ? false : 3000,
  });

  return response;
};

const queries = { read };

export default queries;

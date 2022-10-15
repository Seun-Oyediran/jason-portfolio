import { useQuery } from '@tanstack/react-query';
import spotify from '../queryKeys/spotify';

const getData = async () => {
  const datajson = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization:
        'Bearer BQDSOdLX5BSCG0li66KfDKOLOOChsjYfLSZg57xA8VvizUSpKW_oq89qKzWn1OcnU_cp1xxHlpaAdGzSh0etlvkqXqSn89q1jo6s2ufefRXVTJH6VWVXqRqE2yhC2se0y-1eHyh7uges_rP4Dr-1a-XiuYcK9VAQHsDl5ambCEQ0FIEEBXFGdJ0xXYtjbQG2eoOHB7ge',
    },
  });

  const data = await datajson.json();

  return data;
};

const read = (options = {}) => {
  const response = useQuery([spotify.read], getData, {
    ...options,
    onSuccess: () => {},
    onError: () => {},
  });

  return response;
};

const queries = { read };

export default queries;

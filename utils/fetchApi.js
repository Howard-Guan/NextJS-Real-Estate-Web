import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '20ad4fe1d4mshaec5f8c355c9ff5p11d956jsn5d57e08a7260'
          }
    });

    return data;
}

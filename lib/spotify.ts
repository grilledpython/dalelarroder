const client_id = process.env.SPOTIFY_CLIENT_ID || '107b34307a1546d69f2e2d2ce1990a70';
const client_secret = process.env.SPOTIFY_CLIENT_SECRET || 'a00930c11ca94adb89d0aa9d02163afb';
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN || 'AQBvh7obPvu8zYwE4aa4gHMEuqmMjnLH8oUCokhvnRNQOe08k9t4aigrikP2yx5mpGCHME_i3MRbGh8Xe7rk0yEn9fCWogPKjjFFuY3Od8kxn6NbSJgr2llVAAUnb8UQFoghKo-zZ-uU_0w_ED4GULXSmIrIYuEbTQhr-JGUi9SxTAJrhI-yfJ0DFr9sa1qEoak2FQ4_T9mCt1JS_55xreow54PzCU3OL8CDKQhNUpNvOYKJ3LTYQutdEtEK5fGQbh7ks6JoamBIo3Hi7IXQZGZnoU0uzoE-TL5FvrAWUUKnmEbsk0mLt_bHd_9DWzapTUXZAZGTl5uUXsZaW-52TaD_b673GZFAd-zkA_9FMFwxqWwDzcuTG5-oeq6FaRmjBh-RwI4MFB2qo2AIDbbrAhhJFHMv_p9Gd5KNAB88gc3TYRD6ZPDM8wvRvdQFJJJgSrvCd1d6i0FzCRdkx1-ltIx12qEZXYkInTUT0m5ewfa9Vb7ct3lxXU-tIbLXUlwU38GO6QXHGCWFlqGGgXuI_1XQlEbOHh3pOmuJQwMGhL-_5MnKdxJkIRZN0_dwuqSwXRcxdFyf3wQXLU0QRVKPr4it0P0uQc4g-px765tPfRf-6Sc05lVit_02FoR2eeuMOq4cs2jbRyyDTHYnP7Zmv5VPhKEZy60d_S9MamMfNf4_0NekFBSmknU2Tbt3XEFenVHWzelYwZW7k3t6eTLWcVRhqMGC8HGlqbEaxMowIVo';

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
    next: {
      revalidate: 3600,
    },
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: {
      revalidate: 30,
    },
  });
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

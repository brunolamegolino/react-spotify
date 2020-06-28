const spotify = 
  {
    authorizationURL: 'https://accounts.spotify.com/authorize',
    clientId: 'adf499e0d7744252a7f602d9075f6246',
    redirectUrl: `${window.location.origin}/authorize`,
    webAPI: 'https://api.spotify.com/v1',
    scopes: [
      'user-read-email',
      'user-read-private',
      'streaming'
    ]
  }

const defaultOptions = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'method': 'GET',
};

export const endpoints = {
  getAuthorization: {
    url: `${spotify.authorizationURL}?client_id=${spotify.clientId}${(spotify.scopes ? '&scope=' + encodeURIComponent(spotify.scopes) : '')}&redirect_uri=${encodeURIComponent(spotify.redirectUrl)}&response_type=token&show_dialog=true`,
    options: {
      method: 'GET'
    }
  },
  getCategories: {
    url: `${spotify.webAPI}/browse/categories?country=BR&locale=pt_BR`,
    options: defaultOptions,
  },
  getCategoryPlaylists: {
    url: `${spotify.webAPI}/browse/categories/{categoryId}/playlists`,
    options: defaultOptions,
  },
  getPlaylistTracks: {
    url: `${spotify.webAPI}/playlists/{playlistId}/tracks`,
    options: defaultOptions,
  },
  getUserProfile: {
    url: `${spotify.webAPI}/me`,
    options: defaultOptions,
  },
}
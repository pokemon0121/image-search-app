// action creator for using axios to send http request
import jsonp from 'jsonp-promise';

const ROOT_URL =
  'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=';

export const FETCH_IMAGES = 'fetch_images';

function callback(data) {}
// return an action object
export function fetchImages(tags) {
  const url = `${ROOT_URL}${tags}`;
  // return a promise
  const request = jsonp(url, { name: 'jsonFlickrFeed' });
  return {
    type: FETCH_IMAGES,
    payload: request.promise
  };
}

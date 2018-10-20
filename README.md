# Getting Started

- To run this app:
- `git clone https://github.com/theodorewahle/dali-dashboard.git`
- `cd dali-dashboard`
- `npm install`
- `npm start`

# Google Maps API

- I used my Google Maps API key to get the embedded map to look good.
- If you don't use your own you key, your map will have the "for development purposes only" watermark on it.
- To create your API Key, go to [Google Maps API](https://developers.google.com/maps/documentation/javascript/get-api-key)
- Once you've created your key, create the file `config.js`
- In `config.js`, add one line: `export const googleMapsAPI = YOUR_API_KEY`
- Make sure your `config.js` file is in the `src` folder, on the same level as `App.js`

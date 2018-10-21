# Live Demo
- See it [here](https://dalisupp222444.appspot.com/).

# Preview

![alt text](https://github.com/theodorewahle/dali-dashboard/blob/master/Screen%20Shot%202018-10-20%20at%207.59.52%20PM.png)

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

# Quick Note on Data Sourcing

- The original data was provided here: 
- `http://mappy.dali.dartmouth.edu/members.json`
- That HTTP link didn't work well with `axios`
- So I wrapped it in a Cloud Function:
- In the source code, you can see me making requests to:
- `https://us-central1-dalidash-220021.cloudfunctions.net/wrap-data`
- That is just the URL of the wrapper function
- I including the source for this function in the `cloud_function` folder


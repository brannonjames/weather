# Awesome Weather

### [Live Preview](https://weather.jimmyb.me)

A cool mobile-first weather app that tells you the weather, and more! (well maybe not yet...). In future iterations I plan on displaying astronomical data
such a moon phases, sunrise/sunset, ISS location info. Also plan on adding PWA support.

This app also uses `redux-persist`, a library for persisting certain pieces of redux state between browser refreshes.
 

#### How to get running locally
1. Clone this repo
2. `npm install` or `yarn install`
2. In the project root add the following to a `.env` file
```
// Your developer API ket from weatherapi.com
REACT_APP_WEATHER_API_KEY=XXXX
```
4. `npm start` or `yarn start`
5. That's it! a development server should open the app in your default browser. Automatic changes will automatically update

#### Testing

To test run `npm test`

Tests will also be ran in Github Action anytime changes to 'main' branch is made (or when manually ran)

See [puppeteer](https://github.com/brannonjames/weather/tree/puppeteer) branch initial integration testing setup 


#### [TODO](https://github.com/brannonjames/weather/projects/1)



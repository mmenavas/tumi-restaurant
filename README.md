## TUMI RESTAURANT - Website
This repo contains the source code to build a restaurant website powered by React and Firebase.

### Pre-requisites
Install the software below:
- NodeJS - https://nodejs.org/en/download/
- Yarn - https://yarnpkg.com/en/docs/install
- Firebase CLI - https://firebase.google.com/docs/cli

### Set up
- Clone this repo.
- Install dependencies `npm install`.
- Create a firebase settings file `cp sample.firebase.js firebase.js` and fill in the needed firebase configuration.

### Develop
- Open source code in your favorite code editor (e.g. Visual Studio Code).
- Start a development environment  `yarn start`.
- Open a web browser and navigate to `http://localhost:3000`.
- Make code changes and watch your how your website is update via live reload.

### Customize the site
If you'd like to use this repo as the baseline for a new restaurant website, follow the steps below:
- Replace all icon images from the public directory and update the manifest and browser config files in `src/public`. You can generate these files by using a favicon generator (e.g. https://realfavicongenerator.net).
- Replace the logo in `src/public`.
- Update the global styles in `src/public/styles.css`.
- Create new react components or edit the existing ones in `src/Components`. 

### Build and Deploy
- Build artifact `yarn build`.
- Log in to firebase `firebase login`.
- Deploy `firebase deploy`.

### TODO:
- Add automated tests.
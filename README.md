# Graduo

## Getting Started

### Install Requirements

1. Install Visual Studio Code
   - VS Code is my favorite code editor. You could use any editor but most react devs use it.
   - Download and install from https://code.visualstudio.com/download
2. Install homebrew (mac only)
   - homebrew helps install other stuff you'll need later.
   - Open a terminal window and paste in `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` to install it.
3. Install yarn
   - yarn is what you use to install new libraries and run your app.
   - Open a terminal window and paste in `brew install yarn` to use homebrew to install it for you.
4. Install expo
   - Expo makes react-native apps really easy to create. It's what you'll use on your phone to view your app.
   - Open a terminal window and paste in `yarn global add expo-cli` this uses yarn to install expo so you can use it in any terminal window.
   - Download the expo mobile app. Go on the app store and search for Expo. Download it and make an account.
   - After you make the account you can type `expo login` in the terminal and login with the same account you just made.

### Set Up Project

1. Download the project folder
   - I'll provide the project via google drive or github. Download it and put it somewhere.
2. Open the project folder in VS Code
   - File -> Open Folder -> Choose the 'graduo' folder.
3. Open a new Terminal inside VS Code
   - Terminal -> New Terminal. This will open a terminal window in the bottom that is already located in the graduo folder.
4. Install the dependencies with yarn
   - Type `yarn` in the terminal. This will check what dependencies you need and install them.

### Run The App

1. Use yarn to start the app
   - Type `yarn start` to start the bundler. This will pop open a new tab in your browser with the app information.
2. Open the app on your phone
   - Open the expo app and you should see your app if you are logged in on both the terminal and mobile app. Tap graduo to launch it.

## Editing Code

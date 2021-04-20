# hfr-chopshop
Code needed to run ChopShop, a design interface for CarRacing cars

This repository contains snapshots of front-end and back-end code to run ChopShop, a platform for designing cars for RL agents in the OpenAI Gym environment CarRacing.

This repository is currently under construction (mainly cleaning up the code enough to be somewhat readable, as well as testing the docker bits).

## ChopShop Components
Chopshop consists of:
1. A Node/React app for the front-end
2. A Flask app that handles test drives and connects the front-end user to Gym
3. A slightly modified CarRacing environment in OpenAI Gym
4. An RL agent that runs in the Gym environment
5. A mongodb backend to log session data, etc.

## Installing and Running Chopshop
The recommended way to install and run chopshop is using our provided Docker-compose script:
`docker-compose up --build` should do it.

### If you want to develop/install from scratch
#### Install OpenAI Gym and Customize CarRacing
Due to a number of recent improvements and bug fixes in CarRacing, we suggest you install the most recent version of Gym:
`git clone https://github.com/openai/gym
 cd gym
 pip install -e .`
#### Install Flask App
#### Install the React App
You need to have NodeJS installed; if you do, just go into the chopshop directory and yarn or npm install.
Note that if you are running Windows, you need to use the windows_package.json.
#### Install MongoDB
If you don't have mongodb installed, I recommend using the docker image.

## Disclaimers
This is a prototype. The code has been cleaned up but is still quite messy. The code was not designed for nor has it been tested at any sort of scale. For example, we are currently spinning up a gym environment for every test drive. 

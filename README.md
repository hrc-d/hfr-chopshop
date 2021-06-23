# hfr-chopshop
Code needed to run ChopShop, a design interface for CarRacing cars

This repository contains snapshots of front-end and back-end code to run ChopShop, a platform for designing cars for RL agents in the OpenAI Gym environment CarRacing.

This repository is currently under construction. It has been tested with Ubuntu 20.04.

## ChopShop Components
Chopshop consists of:
1. A Node/React app for the front-end
2. A Flask app that handles test drives and connects the front-end user to Gym
3. A slightly modified CarRacing environment in OpenAI Gym
4. An RL agent that runs in the Gym environment
5. A mongodb backend to log session data, etc.

## Installing and Running Chopshop

Requires Python 3

#### Install OpenAI Gym and Customize CarRacing
Due to a number of recent improvements and bug fixes in CarRacing, we suggest you install the most recent version of Gym:
`git submodule init`
`git submodule update`
`cd gym`
`git fetch`
`git merge origin/master`
`pip install -e .`

 Once gym is installed, copy over the customized CarRacing files in `misc/copy_to_gym`.
 The `__init__.py` file should overwrite `__init.py__` in `gym/gym/envs` and the files in `box2d` should be copied to `gym/gym/envs/box2d`.
`cp misc/copy_to_gym/init gym/gym/envs`
`cp misc/copy_to_gym/box2d/* gym/gym/envs/box2d`


The modified files allow us to alter the car design in a CarRacing environment.

#### Install Flask App
`pip install -r requirements.txt`

#### Install the React App
You need to have NodeJS installed; if you do, just go into the chopshop directory and yarn or npm install.
Note that if you are running Windows, you need to use the windows_package.json.
#### Install MongoDB
If you don't have mongodb installed, I recommend using the docker image.
The database name and connection details are defined and configurable in `flaskapp/config.py`.

#### Train an agent
`python flaskapp/avg_dqn_agent --train <n episodes to train>`

#### Generate videos
`python flaskapp/avg_dqn_agent --videos <n videos to generate>`

#### Start everything
##### Flask App
`python flaskapp/app.py` will serve on localhost:5000
##### React App
`npm start` will serve on localhost:4242

## Disclaimers
This is a prototype. The code has been cleaned up but is still quite messy. The code was not designed for nor has it been tested at any sort of scale. For example, we are currently spinning up a gym environment for every test drive. 

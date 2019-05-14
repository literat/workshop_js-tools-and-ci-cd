#!/usr/bin/env bash

# directly binary in node_modules
./node_modules/.bin/rimraf temp

# via npx
npx rimraf temp

# via npm with defined script
npm run rimraf
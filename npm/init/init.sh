#!/usr/bin/env bash

# with interactive questionnaire
npm init

# skip questionnaire
npm init -y

# read .npmrc file
npm config list

# set .npmrc value
npm config set init-license "MIT"
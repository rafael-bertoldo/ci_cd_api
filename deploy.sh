#!/bin/bash

# Render Config
RENDER_TOKEN=$RENDER_TOKEN
RENDER_PROJECT=$RENDER_PROJECT

# TS compile
npm run build

# Render Login
echo "Logging into Render..."
render login --token $RENDER_TOKEN

# Render deploy
echo "Deploying to Render..."
render deploy --project $RENDER_PROJECT

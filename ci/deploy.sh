#!/bin/bash

set -ev

ng build --prod
firebase deploy --project firebase-plastikaweb --token $FIREBASE_TOKEN --non-interactive

exit 0

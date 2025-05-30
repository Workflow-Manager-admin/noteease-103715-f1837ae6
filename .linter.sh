#!/bin/bash
cd /home/kavia/workspace/code-generation/noteease-103715-f1837ae6/noteease
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


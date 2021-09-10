#!/bin/sh

curl $TASK_ENDPOINT/$TASK_ID/task > /runner/Taskfile.yml

task
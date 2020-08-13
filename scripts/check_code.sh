#!/usr/bin/env bash

npm run eslint:check | tee -a code_check_logs.log;
eslint_status=${PIPESTATUS[0]};
npm run prettier:check | tee -a code_check_logs.log;
prettier_status=${PIPESTATUS[0]}

if [ $eslint_status -ne 0 ]
then
  exit $eslint_status
fi

if [ $prettier_status -ne 0 ]
then
  exit $prettier_status
fi

exit 0

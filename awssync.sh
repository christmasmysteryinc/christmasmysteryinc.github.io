#!/bin/bash
DAY=$1
re='^[0-9]+$'
if ! [[ $DAY =~ $re ]] ; then
   echo "error: Please provide a day number" >&2; exit 1
fi

aws s3 sync --delete "day_${DAY}" "s3://christmasmysteryinc.org/day_${DAY}"

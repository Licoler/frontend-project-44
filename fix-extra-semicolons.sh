#!/bin/bash
# Script to remove extra semicolons from reported files

FILES=(
  "bin/brain-calc.js"
  "bin/brain-even.js"
  "bin/brain-gcd.js"
  "bin/brain-prime.js"
  "bin/brain-progression.js"
  "bin/brain-games.js"
  "src/cli.js"
  "src/index.js"
  "src/utils.js"
  "src/games/calc.js"
  "src/games/even.js"
  "src/games/gcd.js"
  "src/games/prime.js"
  "src/games/progression.js"
  "eslint.config.js"
)

for file in "${FILES[@]}"
do
  if [ -f "$file" ]; then
    echo "Fixing extra semicolons in $file"
    # Remove semicolons that are alone on a line or trailing semicolons after block statements
    # This sed command removes semicolons that are the only character on a line or trailing before a closing brace
    sed -i '' -E 's/;[[:space:]]*$//g' "$file"
    sed -i '' -E '/^[[:space:]]*;[[:space:]]*$/d' "$file"
  else
    echo "File $file not found, skipping"
  fi
done

echo "Extra semicolon fix completed."

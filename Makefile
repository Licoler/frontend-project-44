install:
	npm ci

setup:
	npm ci

test:
	npm test

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js

brain-prime:
	node bin/brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

fix:
	npx eslint --fix .

pretty:
	npx prettier --write .

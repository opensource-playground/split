.DEFAULT_GOAL = build

install:
	@npm install

lint:
	@npm run lint

build: install lint
	npm run build

publish: build
	npx changeset

test: build
	npm run test

.PHONY: help install dev test build preview check clean

PORT ?= 5173

help: ## Show available targets
	@awk 'BEGIN {FS = ":.*## "} /^[a-zA-Z_-]+:.*## / {printf "  %-12s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install locked npm dependencies
	npm ci

dev: install ## Start the development server
	npm run dev -- --port $(PORT)

test: ## Run content and structure tests
	npm test

build: ## Build the production site into dist/
	npm run build

preview: build ## Serve the production build locally
	npm run preview -- --port $(PORT)

check: test build ## Run all verification checks

clean: ## Remove generated and installed files
	rm -rf dist node_modules

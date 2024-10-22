.ONESHELL:

PROJECT_NAME    := Elevate
ROOT_DIR        := $(realpath $(dir $(abspath $(lastword $(MAKEFILE_LIST)))))
NODE_MODULE_DIR := $(realpath $(ROOT_DIR)/node_modules)
NODE_BIN_DIR    := $(realpath $(NODE_MODULE_DIR)/.bin)
DEV_PORT        := 3000
TEST_PORT       := 3001

react = $(NODE_BIN_DIR)/react-scripts $1


all: dev
.PHONY: all

dev: export PORT = $(DEV_PORT)
dev:
	@$(call react,start)
.PHONY: dev

prod:
	@$(call react,build)
.PHONY: prod

test: export PORT = $(TEST_PORT)
test: export CI = true
test:
	@$(call react,test)
.PHONY: test

install:
	@npm install
.PHONY: install

clean:
.PHONY: clean


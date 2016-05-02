# Ember-cli-visjs [![Build Status](https://travis-ci.org/Suven/ember-cli-visjs.svg?branch=master)](https://travis-ci.org/Suven/ember-cli-visjs) [![Ember Observer Score](https://emberobserver.com/badges/ember-cli-visjs.svg)](https://emberobserver.com/addons/ember-cli-visjs)

Simple ember-wrapper around [vis.js by almende](https://github.com/almende/vis).

See the [demo](http://suven.github.io/ember-cli-visjs/) for examples and usage-infos.

A big _thank you_ to [ember-leaflet](https://github.com/miguelcobain/ember-leaflet) for their container/child-mixins.

## Installation

Make sure you are using a somewhat recent version of nodejs when installing. Everything > 4 should be fine.

`ember install ember-cli-visjs`

## Usage

```handlebars
{{#visjs-network backgroundImage='wp.png'}}
  {{!-- Adding nodes is as simple as passing a unique id to a component. The rest is optional --}}
  {{visjs-node nId=1 label='A' select=(action 'nodeClicked') color='#ff0000'}}
  {{visjs-node nId=2 label='B'}}
  {{visjs-node nId=3 label='C' posX=100 posY=100}}

  {{!-- Node-Relations are given by edges --}}
  {{visjs-edge from=1 to=2}}
  {{visjs-edge from=1 to=3 arrows='to'}}

  {{!-- Feel free to use whatever nesting you wish. It's just hbs --}}
  {{#if fooIsTrue}}
    {{visjs-node nId=5 label='Optional'}}
  {{/if}}
  {{#each bars as |bar|}}
    {{visjs-node nId=bar.id}}
  {{/each}}
{{/visjs-network}}
```

For all supported options see the [demo](http://suven.github.io/ember-cli-visjs/).

## Running tests

The test-execution requires you to have phantomjs 2.x.x installed.

`ember test`

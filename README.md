# Elvis-network 

Simple ember-wrapper around [vis.js by almende](https://github.com/almende/vis).

Forked for the sole purpose of improving by adding more compatibility with the 
vis.js library while focusing only on its network features. Many kudos to Suven for
starting this in the first place.

Be aware that this addon will only support network visualisations available within vis.js. 
If you look for a more general purpose project, head to [Suven/ember-cli-visjs](https://github.com/Suven/ember-cli-visjs).

Name is inspired by the project starting this fork – 
[Elvis, a public procurements explorer](https://github.com/tenders-exposed/elvis-ember).

See original addon's [demo](http://suven.github.io/ember-cli-visjs/) for examples and usage-infos.

A big _thank you_ to [ember-leaflet](https://github.com/miguelcobain/ember-leaflet) for their container/child-mixins.

## Installation

Make sure you are using a somewhat recent version of nodejs when installing. Everything > 4 should be fine.

`ember install elvis-network`

**Note:** Component name hadn't changed following the forking, in order to preserve compatibility. In the event the 
current project diverges too much from its base or breaks functional compatibility, the name will be changed to 
`{{elvis-network}}`.

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

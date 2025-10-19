---
title: Security Audit
description: A description of the security threats recently encountered in NPM.
---
Over recent weeks, there have been two supply chain attacks on NPM. These are analysed and interpreted in this document, as well as the extent to which our system may be affected.

##### Shai-Hulud: Ongoing Package Supply Chain Worm Delivering Data-Stealing Malware

The attack chain began with a phishing email disguised as an NPM security alert, tricking a developer into revealing credentials. Attackers compromised the developer’s NPM account and uploaded a malicious package.
When installed, this package executed JavaScript and embedded Unix shell scripts to establish persistence and start stealing information.

They used stolen GitHub access tokens, the malware authenticated to the GitHub API, checked user permissions, and listed all the repositories that the victim could access, even the private repositories. All repos were cloned and deployed to malicious workflows to automate data theft.

###### The following packages were confirmed to be compromised by this worm:

- angulartics2@14.1.2
- @ctrl/deluge@7.2.2 
- @ctrl/golang-template@1.4.3
- @ctrl/magnet-link@4.0.4
- @ctrl/ngx-codemirror@7.0.2
- @ctrl/ngx-csv@6.0.2
- @ctrl/ngx-emoji-mart@9.2.2
- @ctrl/ngx-rightclick@4.0.2
- @ctrl/qbittorrent@9.7.2
- @ctrl/react-adsense@2.0.2
- @ctrl/shared-torrent@6.3.2
- @ctrl/tinycolor@4.1.1, @4.1.2
- @ctrl/torrent-file@4.1.2
- @ctrl/transmission@7.3.1
- @ctrl/ts-base32@4.0.2
- encounter-playground@0.0.5
- json-rules-engine-simplified@0.2.4, 0.2.1
- koa2-swagger-ui@5.11.2, 5.11.1
- @nativescript-community/gesturehandler@2.0.35
- @nativescript-community/sentry 4.6.43
- @nativescript-community/text@1.6.13
- @nativescript-community/ui-collectionview@6.0.6
- @nativescript-community/ui-drawer@0.1.30
- @nativescript-community/ui-image@4.5.6
- @nativescript-community/ui-material-bottomsheet@7.2.72
- @nativescript-community/ui-material-core@7.2.76
- @nativescript-community/ui-material-core-tabs@7.2.76
- ngx-color@10.0.2
- ngx-toastr@19.0.2
- ngx-trend@8.0.1
- react-complaint-image@0.0.35
- react-jsonschema-form-conditionals@0.3.21
- react-jsonschema-form-extras@1.0.4
- rxnt-authentication@0.0.6
- rxnt-healthchecks-nestjs@1.0.5
- rxnt-kue@1.0.7
- swc-plugin-component-annotate@1.9.2
- ts-gaussian@3.0.6

###### Our packages are listed below:

@angular-devkit/build-angular@20.1.6
| +-- @ampproject/remapping@2.3.0
| | +-- @jridgewell/gen-mapping@0.3.13
| | | +-- @jridgewell/sourcemap-codec@1.5.5 deduped
| | | `-- @jridgewell/trace-mapping@0.3.30 deduped
| | `-- @jridgewell/trace-mapping@0.3.30
| |   +-- @jridgewell/resolve-uri@3.1.2
| |   `-- @jridgewell/sourcemap-codec@1.5.5 deduped
| +-- @angular-devkit/architect@0.2001.6
| | +-- @angular-devkit/core@20.1.6 deduped
| | `-- rxjs@7.8.2 deduped
| +-- @angular-devkit/build-webpack@0.2001.6
| | +-- @angular-devkit/architect@0.2001.6 deduped
| | +-- rxjs@7.8.2 deduped
| | +-- webpack-dev-server@5.2.2 deduped
| | `-- webpack@5.99.9 deduped
| +-- @angular-devkit/core@20.1.6
| | +-- ajv-formats@3.0.1
| | | `-- ajv@8.17.1 deduped
| | +-- ajv@8.17.1
| | | +-- fast-deep-equal@3.1.3
| | | +-- fast-uri@3.0.6
| | | +-- json-schema-traverse@1.0.0
| | | `-- require-from-string@2.0.2
| | +-- chokidar@4.0.3 deduped
| | +-- jsonc-parser@3.3.1 deduped
| | +-- picomatch@4.0.2 deduped
| | +-- rxjs@7.8.2 deduped
| | `-- source-map@0.7.4
| +-- @angular/build@20.1.6 deduped
| +-- @angular/compiler-cli@20.1.7 deduped
| +-- @angular/core@20.1.7 deduped
| +-- UNMET OPTIONAL DEPENDENCY @angular/localize@^20.0.0
| +-- @angular/platform-browser@20.1.7 deduped
| +-- @angular/platform-server@20.1.7 deduped
| +-- UNMET OPTIONAL DEPENDENCY @angular/service-worker@^20.0.0
| +-- @angular/ssr@20.1.6 deduped
| +-- @babel/core@7.27.7
| | +-- @ampproject/remapping@2.3.0 deduped
| | +-- @babel/code-frame@7.27.1
| | | +-- @babel/helper-validator-identifier@7.27.1
| | | +-- js-tokens@4.0.0
| | | `-- picocolors@1.1.1 deduped
| | +-- @babel/generator@7.27.5 deduped
| | +-- @babel/helper-compilation-targets@7.27.2
| | | +-- @babel/compat-data@7.28.0 deduped
| | | +-- @babel/helper-validator-option@7.27.1 deduped
| | | +-- browserslist@4.25.2 deduped
| | | +-- lru-cache@5.1.1
| | | | `-- yallist@3.1.1
| | | `-- semver@6.3.1
| | +-- @babel/helper-module-transforms@7.28.3
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-module-imports@7.27.1 deduped
| | | +-- @babel/helper-validator-identifier@7.27.1 deduped
| | | `-- @babel/traverse@7.28.3 deduped
| | +-- @babel/helpers@7.28.3
| | | +-- @babel/template@7.27.2 deduped
| | | `-- @babel/types@7.28.2 deduped
| | +-- @babel/parser@7.28.3
| | | `-- @babel/types@7.28.2 deduped
| | +-- @babel/template@7.27.2
| | | +-- @babel/code-frame@7.27.1 deduped
| | | +-- @babel/parser@7.28.3 deduped
| | | `-- @babel/types@7.28.2 deduped
| | +-- @babel/traverse@7.28.3
| | | +-- @babel/code-frame@7.27.1 deduped
| | | +-- @babel/generator@7.28.3
| | | | +-- @babel/parser@7.28.3 deduped
| | | | +-- @babel/types@7.28.2 deduped
| | | | +-- @jridgewell/gen-mapping@0.3.13 deduped
| | | | +-- @jridgewell/trace-mapping@0.3.30 deduped
| | | | `-- jsesc@3.1.0 deduped
| | | +-- @babel/helper-globals@7.28.0
| | | +-- @babel/parser@7.28.3 deduped
| | | +-- @babel/template@7.27.2 deduped
| | | +-- @babel/types@7.28.2 deduped
| | | `-- debug@4.4.1 deduped
| | +-- @babel/types@7.28.2
| | | +-- @babel/helper-string-parser@7.27.1
| | | `-- @babel/helper-validator-identifier@7.27.1 deduped
| | +-- convert-source-map@2.0.0
| | +-- debug@4.4.1 deduped
| | +-- gensync@1.0.0-beta.2
| | +-- json5@2.2.3
| | `-- semver@6.3.1
| +-- @babel/generator@7.27.5
| | +-- @babel/parser@7.28.3 deduped
| | +-- @babel/types@7.28.2 deduped
| | +-- @jridgewell/gen-mapping@0.3.13 deduped
| | +-- @jridgewell/trace-mapping@0.3.30 deduped
| | `-- jsesc@3.1.0
| +-- @babel/helper-annotate-as-pure@7.27.3
| | `-- @babel/types@7.28.2 deduped
| +-- @babel/helper-split-export-declaration@7.24.7
| | `-- @babel/types@7.28.2 deduped
| +-- @babel/plugin-transform-async-generator-functions@7.27.1
| | +-- @babel/core@7.27.7 deduped
| | +-- @babel/helper-plugin-utils@7.27.1
| | +-- @babel/helper-remap-async-to-generator@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-annotate-as-pure@7.27.3 deduped
| | | +-- @babel/helper-wrap-function@7.28.3
| | | | +-- @babel/template@7.27.2 deduped
| | | | +-- @babel/traverse@7.28.3 deduped
| | | | `-- @babel/types@7.28.2 deduped
| | | `-- @babel/traverse@7.28.3 deduped
| | `-- @babel/traverse@7.28.3 deduped
| +-- @babel/plugin-transform-async-to-generator@7.27.1
| | +-- @babel/core@7.27.7 deduped
| | +-- @babel/helper-module-imports@7.27.1
| | | +-- @babel/traverse@7.28.3 deduped
| | | `-- @babel/types@7.28.2 deduped
| | +-- @babel/helper-plugin-utils@7.27.1 deduped
| | `-- @babel/helper-remap-async-to-generator@7.27.1 deduped
| +-- @babel/plugin-transform-runtime@7.27.4
| | +-- @babel/core@7.27.7 deduped
| | +-- @babel/helper-module-imports@7.27.1 deduped
| | +-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- babel-plugin-polyfill-corejs2@0.4.14
| | | +-- @babel/compat-data@7.28.0 deduped
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-define-polyfill-provider@0.6.5
| | | | +-- @babel/core@7.27.7 deduped
| | | | +-- @babel/helper-compilation-targets@7.27.2 deduped
| | | | +-- @babel/helper-plugin-utils@7.27.1 deduped
| | | | +-- debug@4.4.1 deduped
| | | | +-- lodash.debounce@4.0.8
| | | | `-- resolve@1.22.10 deduped
| | | `-- semver@6.3.1
| | +-- babel-plugin-polyfill-corejs3@0.11.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-define-polyfill-provider@0.6.5 deduped
| | | `-- core-js-compat@3.45.0 deduped
| | +-- babel-plugin-polyfill-regenerator@0.6.5
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-define-polyfill-provider@0.6.5 deduped
| | `-- semver@6.3.1
| +-- @babel/preset-env@7.27.2
| | +-- @babel/compat-data@7.28.0
| | +-- @babel/core@7.27.7 deduped
| | +-- @babel/helper-compilation-targets@7.27.2 deduped
| | +-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/helper-validator-option@7.27.1
| | +-- @babel/plugin-bugfix-firefox-class-in-computed-class-key@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-plugin-utils@7.27.1 deduped
| | | `-- @babel/traverse@7.28.3 deduped
| | +-- @babel/plugin-bugfix-safari-class-field-initializer-scope@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-bugfix-safari-id-destructuring-collision-in-function-expression@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-plugin-utils@7.27.1 deduped
| | | +-- @babel/helper-skip-transparent-expression-wrappers@7.27.1
| | | | +-- @babel/traverse@7.28.3 deduped
| | | | `-- @babel/types@7.28.2 deduped
| | | `-- @babel/plugin-transform-optional-chaining@7.27.1 deduped
| | +-- @babel/plugin-bugfix-v8-static-class-fields-redefine-readonly@7.28.3
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-plugin-utils@7.27.1 deduped
| | | `-- @babel/traverse@7.28.3 deduped
| | +-- @babel/plugin-proposal-private-property-in-object@7.21.0-placeholder-for-preset-env.2
| | | `-- @babel/core@7.27.7 deduped
| | +-- @babel/plugin-syntax-import-assertions@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-syntax-import-attributes@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-syntax-unicode-sets-regex@7.18.6
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-create-regexp-features-plugin@7.27.1
| | | | +-- @babel/core@7.27.7 deduped
| | | | +-- @babel/helper-annotate-as-pure@7.27.3 deduped
| | | | +-- regexpu-core@6.2.0
| | | | | +-- regenerate-unicode-properties@10.2.0
| | | | | | `-- regenerate@1.4.2 deduped
| | | | | +-- regenerate@1.4.2
| | | | | +-- regjsgen@0.8.0
| | | | | +-- regjsparser@0.12.0
| | | | | | `-- jsesc@3.0.2
| | | | | +-- unicode-match-property-ecmascript@2.0.0
| | | | | | +-- unicode-canonical-property-names-ecmascript@2.0.1
| | | | | | `-- unicode-property-aliases-ecmascript@2.1.0
| | | | | `-- unicode-match-property-value-ecmascript@2.2.0
| | | | `-- semver@6.3.1
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-arrow-functions@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-async-generator-functions@7.27.1 deduped
| | +-- @babel/plugin-transform-async-to-generator@7.27.1 deduped
| | +-- @babel/plugin-transform-block-scoped-functions@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-block-scoping@7.28.0
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-class-properties@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-create-class-features-plugin@7.28.3
| | | | +-- @babel/core@7.27.7 deduped
| | | | +-- @babel/helper-annotate-as-pure@7.27.3 deduped
| | | | +-- @babel/helper-member-expression-to-functions@7.27.1
| | | | | +-- @babel/traverse@7.28.3 deduped
| | | | | `-- @babel/types@7.28.2 deduped
| | | | +-- @babel/helper-optimise-call-expression@7.27.1
| | | | | `-- @babel/types@7.28.2 deduped
| | | | +-- @babel/helper-replace-supers@7.27.1 deduped
| | | | +-- @babel/helper-skip-transparent-expression-wrappers@7.27.1 deduped
| | | | +-- @babel/traverse@7.28.3 deduped
| | | | `-- semver@6.3.1
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-class-static-block@7.28.3
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-create-class-features-plugin@7.28.3 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-classes@7.28.3
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-annotate-as-pure@7.27.3 deduped
| | | +-- @babel/helper-compilation-targets@7.27.2 deduped
| | | +-- @babel/helper-globals@7.28.0 deduped
| | | +-- @babel/helper-plugin-utils@7.27.1 deduped
| | | +-- @babel/helper-replace-supers@7.27.1
| | | | +-- @babel/core@7.27.7 deduped
| | | | +-- @babel/helper-member-expression-to-functions@7.27.1 deduped
| | | | +-- @babel/helper-optimise-call-expression@7.27.1 deduped
| | | | `-- @babel/traverse@7.28.3 deduped
| | | `-- @babel/traverse@7.28.3 deduped
| | +-- @babel/plugin-transform-computed-properties@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-plugin-utils@7.27.1 deduped
| | | `-- @babel/template@7.27.2 deduped
| | +-- @babel/plugin-transform-destructuring@7.28.0
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-plugin-utils@7.27.1 deduped
| | | `-- @babel/traverse@7.28.3 deduped
| | +-- @babel/plugin-transform-dotall-regex@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-create-regexp-features-plugin@7.27.1 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-duplicate-keys@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-duplicate-named-capturing-groups-regex@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-create-regexp-features-plugin@7.27.1 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-dynamic-import@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-exponentiation-operator@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-export-namespace-from@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-for-of@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-plugin-utils@7.27.1 deduped
| | | `-- @babel/helper-skip-transparent-expression-wrappers@7.27.1 deduped
| | +-- @babel/plugin-transform-function-name@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-compilation-targets@7.27.2 deduped
| | | +-- @babel/helper-plugin-utils@7.27.1 deduped
| | | `-- @babel/traverse@7.28.3 deduped
| | +-- @babel/plugin-transform-json-strings@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-literals@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-logical-assignment-operators@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-member-expression-literals@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-modules-amd@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-module-transforms@7.28.3 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-modules-commonjs@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-module-transforms@7.28.3 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-modules-systemjs@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-module-transforms@7.28.3 deduped
| | | +-- @babel/helper-plugin-utils@7.27.1 deduped
| | | +-- @babel/helper-validator-identifier@7.27.1 deduped
| | | `-- @babel/traverse@7.28.3 deduped
| | +-- @babel/plugin-transform-modules-umd@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-module-transforms@7.28.3 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-named-capturing-groups-regex@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-create-regexp-features-plugin@7.27.1 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-new-target@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-nullish-coalescing-operator@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-numeric-separator@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-object-rest-spread@7.28.0
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-compilation-targets@7.27.2 deduped
| | | +-- @babel/helper-plugin-utils@7.27.1 deduped
| | | +-- @babel/plugin-transform-destructuring@7.28.0 deduped
| | | +-- @babel/plugin-transform-parameters@7.27.7 deduped
| | | `-- @babel/traverse@7.28.3 deduped
| | +-- @babel/plugin-transform-object-super@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-plugin-utils@7.27.1 deduped
| | | `-- @babel/helper-replace-supers@7.27.1 deduped
| | +-- @babel/plugin-transform-optional-catch-binding@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-optional-chaining@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-plugin-utils@7.27.1 deduped
| | | `-- @babel/helper-skip-transparent-expression-wrappers@7.27.1 deduped
| | +-- @babel/plugin-transform-parameters@7.27.7
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-private-methods@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-create-class-features-plugin@7.28.3 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-private-property-in-object@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-annotate-as-pure@7.27.3 deduped
| | | +-- @babel/helper-create-class-features-plugin@7.28.3 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-property-literals@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-regenerator@7.28.3
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-regexp-modifiers@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-create-regexp-features-plugin@7.27.1 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-reserved-words@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-shorthand-properties@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-spread@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-plugin-utils@7.27.1 deduped
| | | `-- @babel/helper-skip-transparent-expression-wrappers@7.27.1 deduped
| | +-- @babel/plugin-transform-sticky-regex@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-template-literals@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-typeof-symbol@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-unicode-escapes@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-unicode-property-regex@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-create-regexp-features-plugin@7.27.1 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-unicode-regex@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-create-regexp-features-plugin@7.27.1 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/plugin-transform-unicode-sets-regex@7.27.1
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-create-regexp-features-plugin@7.27.1 deduped
| | | `-- @babel/helper-plugin-utils@7.27.1 deduped
| | +-- @babel/preset-modules@0.1.6-no-external-plugins
| | | +-- @babel/core@7.27.7 deduped
| | | +-- @babel/helper-plugin-utils@7.27.1 deduped
| | | +-- @babel/types@7.28.2 deduped
| | | `-- esutils@2.0.3
| | +-- babel-plugin-polyfill-corejs2@0.4.14 deduped
| | +-- babel-plugin-polyfill-corejs3@0.11.1 deduped
| | +-- babel-plugin-polyfill-regenerator@0.6.5 deduped
| | +-- core-js-compat@3.45.0
| | | `-- browserslist@4.25.2 deduped
| | `-- semver@6.3.1
| +-- @babel/runtime@7.27.6
| +-- @discoveryjs/json-ext@0.6.3
| +-- @ngtools/webpack@20.1.6
| | +-- @angular/compiler-cli@20.1.7 deduped
| | +-- typescript@5.8.3 deduped
| | `-- webpack@5.99.9 deduped
| +-- UNMET OPTIONAL DEPENDENCY @web/test-runner@^0.20.0
| +-- ansi-colors@4.1.3
| +-- autoprefixer@10.4.21
| | +-- browserslist@4.25.2 deduped
| | +-- caniuse-lite@1.0.30001735
| | +-- fraction.js@4.3.7
| | +-- normalize-range@0.1.2
| | +-- picocolors@1.1.1
| | +-- postcss-value-parser@4.2.0
| | `-- postcss@8.5.6 deduped
| +-- babel-loader@10.0.0
| | +-- @babel/core@7.27.7 deduped
| | +-- find-up@5.0.0
| | | +-- locate-path@6.0.0
| | | | `-- p-locate@5.0.0
| | | |   `-- p-limit@3.1.0
| | | |     `-- yocto-queue@0.1.0
| | | `-- path-exists@4.0.0
| | `-- webpack@5.99.9 deduped
| +-- UNMET OPTIONAL DEPENDENCY browser-sync@^3.0.2
| +-- browserslist@4.25.2
| | +-- caniuse-lite@1.0.30001735 deduped
| | +-- electron-to-chromium@1.5.203
| | +-- node-releases@2.0.19
| | `-- update-browserslist-db@1.1.3
| |   +-- browserslist@4.25.2 deduped
| |   +-- escalade@3.2.0 deduped
| |   `-- picocolors@1.1.1 deduped
| +-- copy-webpack-plugin@13.0.0
| | +-- glob-parent@6.0.2
| | | `-- is-glob@4.0.3 deduped
| | +-- normalize-path@3.0.0
| | +-- schema-utils@4.3.2
| | | +-- @types/json-schema@7.0.15 deduped
| | | +-- ajv-formats@2.1.1

Our backend does not utilise any NPM packages (our backend is in Spring Boot), therefore we can confirm that our API has not been compromised by this attack.
We are pending an automated test on our frontend to investigate if our app has been compromised. The results will be added to this document as soon as they are available.

##### Security measures that can be taken include, but are not limited to:

###### Immediate Remediation
- Remove malicious versions (rm -rf node_modules && npm cache clean --force).
- Upgrade to a clean release (many of the malicious versions have been removed from npm, but as this is still unfolding it is advised to stay vigilant).

###### Audit & Detection
- Check for any evidence of GitHub repos created within your organization’s developers private accounts and user accounts, named Shai-Hulud, or private repositories with the suffix -migration and the description Shai-Hulud Migration.
- Use the following Github Query to search for public repositories named Shai-Hulud that were impacted from the first wave of the attack, specifying your org name. Successful compromise would exfiltrate double encoded base64 payload under data.json file path with secrets from the affected machine.
- Use the following Github Query to search for public repositories with the description Shai-Hulud Migration, specifying your org name, that were impacted from the second wave of the attack, successful compromise will result in publication of private repositories publicly, named with a -mitigation suffix.
- Review GitHub audit logs for anomalous API usage.
- Monitor developer endpoints and CI/CD pipelines for suspicious API calls and unexpected child processes.

###### Credential Rotation
- Revoke and regenerate all GitHub tokens, npm tokens, SSH keys, API keys, and environment variable secrets that may have been leaked in these repositories.
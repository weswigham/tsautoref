# tsautoref

## Usage

1. `npm i -g tsautoref`
2. `tsref [./path/to/monorepo]`
3. `tsc -b ./path/to/monoreop/tsconfig.build.json`

`tsref`, given a path (or failing that, the current working directory) will scan for all `package.json` files within that path. It will then use the `name` of the located packages and their dependencies (or, failing that, the dependencies derived from the ts files within them) to build `tsconfig` files with project references for every package located, along with a top-level tsconfig with references to all the component ones. If a root `tsconfig` is present, it will be used as the base for all component configs. Additionally, it will generally ignore items found within `node_modules` folders.

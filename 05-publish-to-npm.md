# Publish to npm

## Steps to follow

normally works with

- npm login
- npm publish

But in this case we have 3 packages:

**Publish packages with lerna**

- Sign up to npm
- Add organization e.g. `ds.e`

  - unlimited public repositories

- Add to all packages (`package.json`) publish config, playground is private

```
  "publishConfig": {
    "access": "public"
  }
```

- npm login
- yarn lerna publish

> Make sure to follow semantic versioning

Semantic versioning respects a specific convention for publishing our packages

- Patch (0.0.1)
- Minor (0.1.0)
- Major (1.0.0)

Lerna detects the version changes for each repository and shows us the new version (also auto **commits** the changes):

Changes:

- @ds.e/foundation: 1.0.0 => 0.1.0
- @ds.e/react: 1.0.0 => 0.1.0
- @ds.e/scss: 1.0.0 => 0.1.0
- @playgrounds/react: 1.0.0 => 0.1.0 (private)

When git remote origin is connected, in git a new tag `v0.1.0` is added

---

## Control published files

In `package.json` add files block which is a white list of the published files to npm:

```
  "files": [
    "lib"
  ],
```

Important to gitignore `lib/*` so that we do not push compiled code to github.

We want to push the **src code to github** and then we can **compile and publish to npm** (src will be completed ignored)

---

### Test

Create a new project `npm init -y` and add the packages:

```
yarn add @ds.e/scss @ds.e/foundation @ds.e/react
```

---

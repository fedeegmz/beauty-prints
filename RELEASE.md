# Publishing a New Release

Follow these steps to publish a new version of the **Beauty Prints** extension:

## 1. Update the Changelog

- Open `CHANGELOG.md`.
- Add a new entry for the upcoming version, including changes, fixes, or new features.
- Use the format:

```markdown
## [x.x.x] - YYYY-MM-DD

### Added

- New features...

### Changed

- Modifications...

### Fixed

- Bug fixes...
```

## 2. Update the Version in `package.json`

- Open `package.json`.
- Update the version field following semantic versioning (MAJOR.MINOR.PATCH):
  - MAJOR – Breaking changes.
  - MINOR – New features (backward-compatible).
  - PATCH – Bug fixes and small improvements.

Example:

```json
"version": "0.0.3"
```

## 3. Compile the Extension

Run the following command to package the extension into a .vsix file:

```sh
npx vsce package
```

This generates a file like beauty-prints-x.x.x.vsix.

## 4. Publish the Extension to the Marketplace

If it's your first time publishing:

1. Sign in to the Visual Studio Marketplace.
2. Install vsce if you haven't already:

   ```sh
   npm install -g @vscode/vsce
   ```

3. Create a Personal Access Token (PAT) with the necessary scopes:

   - Go to Azure DevOps Tokens → "Personal Access Tokens".
   - Generate a new token with Marketplace scopes:
     - Manage
     - Publish

4. Log in with vsce:

```sh
npx vsce login <publisher-name>
```

### To publish a new version:

```sh
npx vsce publish
```

Alternatively, specify a version directly:

```sh
npx vsce publish minor
```

(Replace minor with patch or major as needed.)

## 5. Verify the Release

- Visit your extension page in the Visual Studio Marketplace and ensure the new version is live.
- Test the extension by installing it via:

```sh
code --install-extension beauty-prints-x.x.x.vsix
```

## 6. Commit and Push the Changes

```sh
git add CHANGELOG.md package.json
git commit -m "Release vX.X.X"
git tag vX.X.X
git push origin main --tags
```

## Done! 🚀

Your new version is now available for users.

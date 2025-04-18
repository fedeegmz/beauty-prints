# Changelog

## [1.0.0] - 2025-04-18

### Added

- Added settings support for the `btprint` command, allowing users to configure output styles.

### Changed

- Refactored the codebase to follow Hexagonal Architecture principles, improving modularity and testability.

## [0.1.0] - 2025-03-04

### Added

- Added support for **Kotlin**. The `btprint` command now inserts `println("---------- Beauty Print ----------")` in Kotlin files.

## [0.0.2] - 2025-02-04

### Changed

- Updated the snippet for **Python**. Instead of `print("---------- Beauty Print ----------")`, it now inserts `print(f"---------- Beauty Print ----------")`, enabling f-strings.

## [0.0.1] - 2024-11-08

### Initial Release

- First release of **Beauty Prints**.
- The `btprint` command is available for inserting a `print` statement in the following languages:
  - **JavaScript / TypeScript** → `console.log("---------- Beauty Print ----------")`
  - **Python** → `print("---------- Beauty Print ----------")`
  - **Dart** → `print("---------- Beauty Print ----------");`
  - **Rust** → `println!("---------- Beauty Print ----------");`

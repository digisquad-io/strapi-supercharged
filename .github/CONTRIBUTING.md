# Strapi Supercharged

Yeay! You want to contribute to Strapi Supercharged. That's amazing!
To smoothen everyone's experience involved with the project please take note of the following guidelines and rules.

## Found an Issue?

Thank you for reporting any issues you find. We do our best to test and make commitlint as solid as possible, but any reported issue is a real help.

> Strapi Supercharged issues

Please follow these guidelines when reporting issues:

- Provide a title in the format of `<Error> when <Task>`
- Tag your issue with the tag `bug`
- Provide a short summary of what you are trying to do
- Provide the log of the encountered error if applicable
- Be awesome and consider contributing a [pull request](#want-to-contribute)

## Want to contribute?

You consider contributing changes to Strapi Supercharged – we dig that!
Please consider these guidelines when filing a pull request:

> Strapi Supercharged pull requests

- Follow the [Coding Rules](#coding-rules)
- Follow the [Commit Rules](#commit-rules)
- Make sure you rebased the current master branch when filing the pull request
- Squash your commits when filing the pull request
- Provide a short title with a maximum of 100 characters
- Provide a more detailed description containing
  _ What you want to achieve
  _ What you changed
  _ What you added
  _ What you removed

## Coding Rules

To keep the code base of Strapi Supercharged neat and tidy the following rules apply to every change

> Coding standards

- `prettier` is king
- Favor micro library over swiss army knives (rimraf, ncp vs. fs-extra)
- Be awesome

## Commit Rules

To help everyone with understanding the commit history of Strapi Supercharged the following commit rules are enforced.
To make your life easier Strapi Supercharged is commitizen-friendly and provides the npm run-script `commit`.

> Commit standards

- [conventional-changelog](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/prompt)
- yorkie commit message hook available
- present tense
- maximum of 100 characters
- message format of `$type($scope): $message`

# docstring-checker-javascript
> Check that all docstrings in a project have been updated to match latest changes, written in Javascript.

Install node from [this](https://nodejs.org/en/download/package-manager) link.

Update npm with `npm install npm@latest`.

If you'd rather use Yarn, install it from [this](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) link (if you have npm installed you only have to do `npm install yarn`.)

## ⚡ Example usage

run the file with node, `node bin/index.js`, if you have no outdated docstrings in your javascript files, you will see:

```
❯ node bin/index.js .

 🎉 You have no outdated docstrings. Great job!
```

and if you have outdated docstrings you will see:

```
❯ node bin/index.js .

 🧸 You have 2 outdated docstring(s) in total. Resolve these files:
    - src/VerifyFile.js
    - src/DocstringChecker.js
```

## Thoughts after doing this

Javascript, npm, and nodejs might be the worst fucking ecosystem in the universe. Its mindboggling to me how the world is working considering the amount of js bloat going around. AND WHY ARE PEOPLE WRITING PACKAGES THAT ARE 1 LINES OF CODE AND PEOPLE RATHER INTRODUCE THOSE DEPENDENCIES INTO THEIR PROGRAM INSTEAD OF WRITING THE SINGLE LINE OF CODE?????? are JS devs allergic to not having abstractions??? or is it like a d*ck-measuring competition on who can have the most bloated package with the most dependencies???

javascript people, get your shit together, please...

not coming back to this ecosystem. thanks, and bye.

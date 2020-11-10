# scanpiler-cli

A command line tool that combines all of the separate `scanpiler` tooling into a single CLI.

To get started, after installing [deno](https://deno.land), there is no further installation required.  The following console shows an interaction

```
$ deno run --allow-read --allow-write "https://raw.githubusercontent.com/littlelanguages/scanpiler-cli/main/mod.ts" help
Validate and compile a scanner definition into executable code

USAGE:
    scanpiler {OPTION} [COMMAND]

OPTION:
    -h, --help
            Prints help information

COMMAND:
    deno                    Create a scanner for the passed lexical definition in Deno Typescript
    viz                     Create a graphviz state diagram of the token NFA and DFA
    help                    Provides detail help on a specific command
```

## Building Source

The directory `~/.devcontainer` contains a Dockerfile used by [Visual Studio Code](https://code.visualstudio.com) to issolate the editor and build tools from being installed on the developer's workstation.

The Dockerfile is straightforward with the interesting piece being [entr](https://github.com/eradman/entr/) which is used by the `etl.sh` to run `test.sh` whenever a source file has changed.

## Scripts

Two script can be found inside `~/.bin`

| Name   | Purpose |
|--------|----------------------------------|
| etl.sh | Runs an edit-test-loop - loops indefinately running all of the tests whenever a source file has changed. |
| test.sh | Runs lint on the source code and executes the automated tests. |

These scripts must be run out of the project's root directory which, when using [Visual Studio Code](https://code.visualstudio.com), is done using a shell inside the container.
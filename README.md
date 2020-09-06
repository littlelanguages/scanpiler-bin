# scanpiler-cli

A command line tool that combines all of the separate `scanpiler` tooling into a single CLI.

To get started, after installing [deno](https://deno.land), there is no further installation required.  The following console shows an interaction

```bash
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
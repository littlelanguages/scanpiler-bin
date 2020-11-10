import * as CLI from "https://raw.githubusercontent.com/littlelanguages/deno-lib-console-cli/0.1.2/mod.ts";

import { denoCommand } from "https://raw.githubusercontent.com/littlelanguages/scanpiler-tool-deno/0.2.3/mod.ts";
import { command as kotlinCommand } from "https://raw.githubusercontent.com/littlelanguages/scanpiler-tool-kotlin/0.0.3/mod.ts";
import { vizCommand } from "https://raw.githubusercontent.com/littlelanguages/scanpiler-tool-viz/0.1.2/mod.ts";

const denoCmd = new CLI.ValueCommand(
  "deno",
  "Create a scanner for the passed lexical definition in Deno Typescript",
  [
    new CLI.ValueOption(
      ["--directory", "-d"],
      "Value is the directory into which the generated Typesecript code is placed.  Defaults to the source file's directory.",
    ),
    new CLI.FlagOption(
      ["--force", "-f"],
      "Ignore all the file dates and force a regeneration of all generated sources.",
    ),
    new CLI.FlagOption(
      ["--verbose", "-v"],
      "Lists all the files as they are created.",
    ),
  ],
  {
    name: "FileName",
    optional: false,
    help: "The name of the file the is to be processed.",
  },
  (
    _: CLI.Definition,
    file: string | undefined,
    vals: Map<String, unknown>,
  ) => {
    denoCommand(
      file!,
      {
        directory: vals.get("directory") as string | undefined,
        force: vals.get("force") as boolean | false,
        verbose: vals.get("verbose") as boolean | false,
      },
    );
  },
);

const kotlinCmd = new CLI.ValueCommand(
  "kotlin",
  "Create a scanner for the passed lexical definition in Kotlin",
  [
    new CLI.ValueOption(
      ["--directory", "-d"],
      "Value is the directory into which the generated Kotlin and library code is placed.  Defaults to the source file's directory.",
    ),
    new CLI.ValueOption(
      ["--package", "-p"],
      "Value is the package name into which the generated Kotlin code is to be placed.",
    ),
    new CLI.FlagOption(
      ["--force", "-f"],
      "Ignore all the file dates and force a regeneration of all generated sources.",
    ),
    new CLI.FlagOption(
      ["--verbose", "-v"],
      "Lists all the files as they are created.",
    ),
  ],
  {
    name: "FileName",
    optional: false,
    help: "The name of the file the is to be processed.",
  },
  (
    _: CLI.Definition,
    file: string | undefined,
    vals: Map<String, unknown>,
  ) => {
    kotlinCommand(
      file!,
      {
        directory: vals.get("directory") as string | undefined,
        name: vals.get("package") as string,
        force: vals.get("force") as boolean | false,
        verbose: vals.get("verbose") as boolean | false,
      },
    );
  },
);

const vizCmd = new CLI.ValueCommand(
  "viz",
  "Create a graphviz state diagram of the token NFA and DFA",
  [
    new CLI.ValueOption(
      ["--directory", "-d"],
      "Value is the directory into which the generated dot files are placed.  Defaults to the source file's directory.",
    ),
  ],
  {
    name: "FileName",
    optional: false,
    help: "The name of the file the is to be processed.",
  },
  (
    _: CLI.Definition,
    file: string | undefined,
    vals: Map<String, unknown>,
  ) => {
    vizCommand(
      file!,
      { directory: vals.get("directory") as string | undefined },
    );
  },
);

const cli = {
  name: "scanpiler",
  help: "Validate and compile a scanner definition into executable code",
  options: [CLI.helpFlag],
  cmds: [denoCmd, kotlinCmd, vizCmd, CLI.helpCmd],
};

CLI.process(cli);

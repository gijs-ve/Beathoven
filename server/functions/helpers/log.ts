import chalk from "chalk";

const _log = console.log;
export const log = (message: string, color?: "red" | "blue" | "yellow") => {
  if (!color) {
    _log(chalk.white(new Date() + " || " + message));
    return;
  }
  _log(chalk[color](new Date() + " || " + message));
};

import { Command } from './command.interface';
import ping from './ping';

const mapOfCommands = new Map([
  [ping.data.name, ping],
]) as Map<string, Command>;

export default mapOfCommands;

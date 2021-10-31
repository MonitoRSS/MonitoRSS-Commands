import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import config from './config';

const { clientId, token } = {
  token: config.BOT_TOKEN,
  clientId: config.BOT_CLIENT_ID,
};

const commands = [
  new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
  // new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
  // new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]
  .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    await rest.put(
      Routes.applicationCommands(clientId),
      { body: commands },
    );

    console.log('Successfully registered application commands.');
  } catch (error) {
    console.error(error);
  }
})();

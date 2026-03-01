module.exports = {
  config: {
    name: "inbox",
    aliases: ["in"],
    version: "1.7",
    author: "𝐄𝐯𝐚𝐧 𝐕𝐚𝐢",
    countDown: 5,
    role: 0,
    category: "system"
  },
  onStart: async function({ api, event, args, message }) {
    try {
      const obfuscatedAuthor = String.fromCharCode(77, 97, 104, 77, 85, 68); 
      if (this.config.author !== obfuscatedAuthor) {
      return api.sendMessage("You are not authorized to change the author name.\n", event.threadID, event.messageID);
    }

      const query = encodeURIComponent(args.join(' '));
      message.reply("𝐍𝐚 𝐄𝐯𝐚𝐧 𝐂𝐡𝐚𝐮𝐝𝐡𝐚𝐫𝐲 𝐌𝐚𝐫𝐛𝐞 𝐀𝐦𝐤𝐞🥺 🐤", event.threadID);
      api.sendMessage("𝐄𝐯𝐚𝐧 𝐂𝐡𝐚𝐮𝐝𝐡𝐚𝐫𝐲 𝐤 𝐧𝐨𝐤 𝐝𝐚😾😘", event.senderID);
    } catch (error) {
      console.error("error baby: " + error);
    }
  }
};

const config = require("./config.json");
const Discord = require("discord.js");

const client = new Discord.Client();

//client.config = config;

prefix = "!";

client.on("ready", () =>{
  console.log("I am ready Master!");
  client.user.setActivity("Destiny Child");
});

client.on("message", (message) => {
    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd === "help") {
        message.channel.send("type !child [Child Name]");
    }

    if (cmd === "info") {
        message.channel.send("I am still in development, there will be some improvement from time to time. Thank you.")
    }

    if (cmd === "child") {
        let [front, back] = args; 
        
        var name;
        name = args.join(""); 
        name = name.toLowerCase();

        //console.log(front);
        //console.log(back);
        //console.log(name);
        

        // wood Child 5*

        if (name === "abaddon") {
            const embed = new Discord.RichEmbed()

                .addField("Villainous **Abaddon**", ":star::star::star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/KlizU6h.jpg")
                .setThumbnail("https://i.imgur.com/mRmqQeb.png")
                .addField("Role", "Attacker")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }

        if (name === "mammon") {
            const embed = new Discord.RichEmbed()

                .addField("Ambitious **Mammon**", ":star::star::star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/LEnRCHn.jpg")
                .setThumbnail("https://i.imgur.com/sNibHlC.png")
                .addField("Role", "Defender")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }

        if (name === "krampus") {
            const embed = new Discord.RichEmbed()

                .addField("Deceptive **Krampus**", ":star::star::star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/44rCmb4.jpg")
                .setThumbnail("https://i.imgur.com/BuZ3Zmp.png")
                .addField("Role", "Attacker")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }

        if (name === "midas") {
            const embed = new Discord.RichEmbed()

                .addField("Composed **Midas**", ":star::star::star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/jMLdeTL.jpg")
                .setThumbnail("https://i.imgur.com/KerlXww.png")
                .addField("Role", "Debuffer")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }

        if (name === "gchange" || name === "guardianchange") {
            const embed = new Discord.RichEmbed()

                .addField("Guardian **Chang'e**", ":star::star::star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/KoCSMJW.jpg")
                .setThumbnail("https://i.imgur.com/cAeSjF4.png")
                .addField("Role", "Attacker")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }

        if (name === "hera") {
            const embed = new Discord.RichEmbed()

                .addField("Conceited **Hera**", ":star::star::star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/iDZQW9a.jpg")
                .setThumbnail("https://i.imgur.com/9A3sUSI.png")
                .addField("Role", "Defender")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }

        if (name === "siren") {
            const embed = new Discord.RichEmbed()

                .addField("Underground **Siren**", ":star::star::star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/QOXC3BU.jpg")
                .setThumbnail("https://i.imgur.com/oLn6hWd.png")
                .addField("Role", "Attacker")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }

        if (name === "epona") {
            const embed = new Discord.RichEmbed()

                .addField("Adventurer **Epona**", ":star::star::star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/9Nrp8WF.jpg")
                .setThumbnail("https://i.imgur.com/bsL33pf.png")
                .addField("Role", "Supporter")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }

        if (name === "syrinx") {
            const embed = new Discord.RichEmbed()

                .addField("Naive **Syrinx**", ":star::star::star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/4YnFyx9.jpg")
                .setThumbnail("https://i.imgur.com/tDjgoQM.png")
                .addField("Role", "Healer")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }

        // water Child 5*

        if (name === "change") {
            const embed = new Discord.RichEmbed()

                .addField("Sunny **Chang'e**", ":star::star::star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/4VbyKfl.jpg")
                .setThumbnail("https://i.imgur.com/U0Nl7Sm.png")
                .addField("Role", "Supporter")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }

        if (name === "eve") {
            const embed = new Discord.RichEmbed()

                .addField("Forbidden **Eve**", ":star::star::star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/Y7IQXVZ.jpg")
                .setThumbnail("https://i.imgur.com/LjsiNZ5.png")
                .addField("Role", "Attacker")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }



        if (name === "mars") {
            const embed = new Discord.RichEmbed()

                .addField("Zooming **Mars**", ":star::star::star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/TrXiRPM.jpg")
                .setThumbnail("https://i.imgur.com/nzpfesb.png")
                .addField("Role", "Defender")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }

        if (name === "myrina") {
            const embed = new Discord.RichEmbed()

                .addField("Glorious **Myrina**", ":star::star::star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/FTRm2HW.jpg")
                .setThumbnail("https://i.imgur.com/XHzyRJA.png")
                .addField("Role", "Supporter")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }

        if (name === "naias") {
            const embed = new Discord.RichEmbed()

                .addField("Dreaming **Naias**", ":star::star::star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/Hi67QaP.jpg")
                .setThumbnail("https://i.imgur.com/oLkgaNY.png")
                .addField("Role", "Supporter")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }

        if (name === "olga") {
            const embed = new Discord.RichEmbed()

                .addField("Blue Shadow **Olga**", ":star::star::star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/g5GtjpB.jpg")
                .setThumbnail("https://i.imgur.com/3P2itUd.png")
                .addField("Role", "Debuffer")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }

        if (name === "rusalka") {
            const embed = new Discord.RichEmbed()

                .addField("Indecisive **Rusalka**", ":star::star::star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/dubs3pY.jpg")
                .setThumbnail("https://i.imgur.com/Sr7vkPX.png")
                .addField("Role", "Healer")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }

        if (name === "santaclaus") {
            const embed = new Discord.RichEmbed()

                .addField("Memorable **Santa Claus**", ":star::star::star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/rYvJtPk.jpg")
                .setThumbnail("https://i.imgur.com/Y8VHKDO.png")
                .addField("Role", "Debuffer")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }

        if (name === "thanatos") {
            const embed = new Discord.RichEmbed()

                .addField("Unknown **Thanatos**", ":star::star::star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/Wjq0aja.jpg")
                .setThumbnail("https://i.imgur.com/jF51WWd.png")
                .addField("Role", "Attacker")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }

        // miku section

        if (name === "miku") {
            message.channel.send("What Miku are you trying to find? \n- Hatsune Miku\n- Priestess Snow Miku\n- Princess Snow Miku");

            const filter = m => m.author.id === message.author.id;
            message.reply("Enter any Miku that you want to find. Expire in 10 seconds. . .").then(r => r.delete(10000));
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 10000
            }).then(collected => {

                if (collected.first().content === "cancel") {
                    return message.reply("Canceled!");
                }

                let mikus = collected.first().content;

                if (mikus === "priestesssnowmiku" || mikus === "priestessmiku" || mikus === "priestess") {
                    const embed = new Discord.RichEmbed()

                        .addField("Snow Priestess **SNOW MIKU**", ":star::star::star::star::star:")
                        .setColor("#3a7ce8")
                        .setImage("https://i.imgur.com/pefiDLv.jpg")
                        .setThumbnail("https://i.imgur.com/RXcVEK9.png")
                        .addField("Role", "Healer")
                        .addField("Element", "Water")

                    message.channel.send({ embed });

                }

                if (mikus === "hmiku" || mikus === "hatsunemiku" || mikus === "hatsune") {
                    const embed = new Discord.RichEmbed()

                        .addField("Diva **HATSUNE MIKU**", ":star::star::star::star::star:")
                        .setColor("#3a7ce8")
                        .setImage("https://i.imgur.com/KvNz9JK.jpg")
                        .setThumbnail("https://i.imgur.com/3hQSeHN.png")
                        .addField("Role", "Supporter")
                        .addField("Element", "Water")

                    message.channel.send({ embed });

                }

                if (mikus === "princesssnowmiku" || mikus === "princessmiku" || mikus === "princess") {
                    const embed = new Discord.RichEmbed()

                        .addField("PRINCESS **SNOW MIKU**", ":star::star::star::star::star:")
                        .setColor("#3a7ce8")
                        .setImage("https://i.imgur.com/0NdXSJC.jpg")
                        .setThumbnail("https://i.imgur.com/A8FgOfQ.png") // need thumbnail here
                        .addField("Role", "Supporter")
                        .addField("Element", "Water")

                    message.channel.send({ embed });

                }

                }).catch(err => {
                    console.log(err);
                })



        }



        // fire Child 5*

        if (name === "aurora") {
            const embed = new Discord.RichEmbed()

                .addField("Western **Aurora**", ":star::star::star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/HdMLxih.jpg")
                .setThumbnail("https://i.imgur.com/B1P4368.png")
                .addField("Role", "Healer")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "dao" || name === "daoine" || name === "daoinesidhe") {
            const embed = new Discord.RichEmbed()

                .addField("Small **Daoine Sidhe**", ":star::star::star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/QESwUyy.jpg")
                .setThumbnail("https://i.imgur.com/0YKcLQv.png")
                .addField("Role", "Defender")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "hades") {
            const embed = new Discord.RichEmbed()

                .addField("Seething **Hades**", ":star::star::star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/8RbSMCD.jpg")
                .setThumbnail("https://i.imgur.com/zQwGw8h.png")
                .addField("Role", "Defender")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "hermes") {
            const embed = new Discord.RichEmbed()

                .addField("Squandering **Hermes**", ":star::star::star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/HsdrCPX.jpg")
                .setThumbnail("https://i.imgur.com/4FvGFNc.png")
                .addField("Role", "Supporter")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "hestia") {
            const embed = new Discord.RichEmbed()

                .addField("Smoldering **Hestia**", ":star::star::star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/XB7GfpW.jpg")
                .setThumbnail("https://i.imgur.com/iA518vj.png")
                .addField("Role", "Attacker")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "jupiter") {
            const embed = new Discord.RichEmbed()

                .addField(" **Jupiter**", ":star::star::star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/b2TSgbX.jpg")
                .setThumbnail("https://i.imgur.com/p7tumx7.png")
                .addField("Role", "Debuffer")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "medb") {
            const embed = new Discord.RichEmbed()

                .addField("Harmony **Medb**", ":star::star::star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/epEVgih.jpg")
                .setThumbnail("https://i.imgur.com/ewK65oG.png")
                .addField("Role", "Attacker")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "morgan") {
            const embed = new Discord.RichEmbed()

                .addField("Maid **Morgan**", ":star::star::star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/FSD3QKC.jpg")
                .setThumbnail("https://i.imgur.com/LVdhF4W.png")
                .addField("Role", "Attacker")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "verdelet") {
            const embed = new Discord.RichEmbed()

                .addField("Waiting **Verdelet**", ":star::star::star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/yNtpKo0.jpg")
                .setThumbnail("https://i.imgur.com/1FZu4ak.png")
                .addField("Role", "Supporter")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        // light child 5*

        if (name === "aria") {
            const embed = new Discord.RichEmbed()

                .addField("Singing **Aria**", ":star::star::star::star::star:")
                .setColor("#f7ee6c")
                .setImage("https://i.imgur.com/Jq7EFKl.jpg")
                .setThumbnail("https://i.imgur.com/H96uZ2e.png")
                .addField("Role", "Supporter")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }

        if (name === "charlotte") {
            const embed = new Discord.RichEmbed()

                .addField("**Charlotte**", ":star::star::star::star::star:") // check here
                .setColor("#f7ee6c")
                .setImage("https://i.imgur.com/0MfvDup.jpg")
                .setThumbnail("https://i.imgur.com/lR0mgUm.png")
                .addField("Role", "Attacker")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }

        if (name === "bastet") {
            const embed = new Discord.RichEmbed()

                .addField("Wild **Bastet**", ":star::star::star::star::star:")
                .setColor("#f7ee6c")
                .setImage("https://i.imgur.com/GCfpFhk.jpg")
                .setThumbnail("https://i.imgur.com/6sjQDbM.png")
                .addField("Role", "Attacker")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }

        if (name === "diablo") {
            const embed = new Discord.RichEmbed()

                .addField("White Winged **Diablo**", ":star::star::star::star::star:")
                .setColor("#f7ee6c")
                .setImage("https://i.imgur.com/tFaq2RL.jpg")
                .setThumbnail("https://i.imgur.com/2SenOA4.png")
                .addField("Role", "Defender")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }

        // maat section
        if (name === "maat") {
            message.channel.send("What Maat are you trying to find? \n- Lost Maat\n- Liberated Maat");

            const filter = m => m.author.id === message.author.id;
            message.reply("Enter any Maat that you want to find. Expire in 10 seconds. . .").then(r => r.delete(10000));
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 10000
            }).then(collected => {
              if(collected.first().content === "cancel"){
                return message.reply("Canceled!");
              }

              let meat = collected.first().content;

              if (meat === "lost" || meat === "light") {
                  const embed = new Discord.RichEmbed()

                      .addField("Lost **Maat**", ":star::star::star::star::star:")
                      .setColor("#f7ee6c")
                      .setImage("https://i.imgur.com/Vg9sNlC.jpg")
                      .setThumbnail("https://i.imgur.com/tQOHhj6.png")
                      .addField("Role", "Healer")
                      .addField("Element", "Light")

                  message.channel.send({ embed });

              }

              if (meat === "dmaat" || meat === "dark" || meat === "liberated") {
                  const embed = new Discord.RichEmbed()

                      .addField("Liberated **Maat**", ":star::star::star::star::star:")
                      .setColor("#8659ba")
                      .setImage("https://i.imgur.com/YcwUyIa.jpg")
                      .setThumbnail("https://i.imgur.com/GClZZdi.png")
                      .addField("Role", "Attacker")
                      .addField("Element", "Dark")

                  message.channel.send({ embed });

              }
            }).catch(err => {
              console.log(err);
            })

          }






        // end maat section

        if (name === "mafdet") {
            const embed = new Discord.RichEmbed()

                .addField("Righteous **Mafdet**", ":star::star::star::star::star:")
                .setColor("#f7ee6c")
                .setImage("https://i.imgur.com/mD5U54u.jpg")
                .setThumbnail("https://i.imgur.com/66KN1Bb.png")
                .addField("Role", "Attacker")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }

        if (name === "moa") {
            const embed = new Discord.RichEmbed()

                .addField("Cube **Moa**", ":star::star::star::star::star:")
                .setColor("#f7ee6c")
                .setImage("https://i.imgur.com/cdKoIgp.jpg")
                .setThumbnail("https://i.imgur.com/I2oOiuz.png")
                .addField("Role", "Debuffer")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }

        if (name === "nirrti") {
            const embed = new Discord.RichEmbed()

                .addField("Exorcist **Nirrti**", ":star::star::star::star::star:")
                .setColor("#f7ee6c")
                .setImage("https://i.imgur.com/elmZSHx.jpg")
                .setThumbnail("https://i.imgur.com/ABaevZX.png")
                .addField("Role", "Debuffer")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }

        if (name === "dana") {
            const embed = new Discord.RichEmbed()

                .addField("Preacher **Dana**", ":star::star::star::star::star:")
                .setColor("#f7ee6c")
                .setImage("https://i.imgur.com/55IwvYu.jpg")
                .setThumbnail("https://i.imgur.com/2ErovsD.png")
                .addField("Role", "Defender")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }

        // dark child 5*

        if (name === "ai") {
            const embed = new Discord.RichEmbed()

                .addField("**A.I**", ":star::star::star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/u6zNhD1.jpg")
                .setThumbnail("https://i.imgur.com/xdWrEYP.png")
                .addField("Role", "Defender")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }

        if (name === "elizabeth") {
            const embed = new Discord.RichEmbed()

                .addField("Autocratic **Elizabeth**", ":star::star::star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/3EGdovg.jpg")
                .setThumbnail("https://i.imgur.com/wlzGABV.png")
                .addField("Role", "Attacker")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }

        if (name === "frej") {
            const embed = new Discord.RichEmbed()

                .addField("**Frej**", ":star::star::star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/0lxDDmI.jpg")
                .setThumbnail("https://i.imgur.com/QADsBdw.png")
                .addField("Role", "Attacker")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }

        if (name === "lanfei") {
            const embed = new Discord.RichEmbed()

                .addField("Blackstar **Lan Fei**", ":star::star::star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/6ATEhlL.jpg")
                .setThumbnail("https://i.imgur.com/LaLKqUK.png")
                .addField("Role", "Debuffer")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }

        if (name === "metis") {
            const embed = new Discord.RichEmbed()

                .addField("Hesitant **Metis**", ":star::star::star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/0Sp8Xhv.jpg")
                .setThumbnail("https://i.imgur.com/RjdZFmz.png")
                .addField("Role", "Healer")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }

        if (name === "pantheon") {
            const embed = new Discord.RichEmbed()

                .addField("Aimless **Pantheon**", ":star::star::star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/oFfFCbr.jpg")
                .setThumbnail("https://i.imgur.com/RkXUnRv.png")
                .addField("Role", "Supporter")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }

        if (name === "redcross") {
            const embed = new Discord.RichEmbed()

                .addField("Guardian **Red Cross**", ":star::star::star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/BMdUeot.jpg")
                .setThumbnail("https://i.imgur.com/mkHlkWP.png")
                .addField("Role", "Defender")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }



        // ----------------- 4* child section ----------------------------

        // wood 4*

        if (name === "hattrick") {
            const embed = new Discord.RichEmbed()

                .addField("Fake **Hat-Trick**", ":star::star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/bmgZBAZ.png")
                .setThumbnail("https://i.imgur.com/QI4zxoS.png")
                .addField("Role", "Defender")
                .addField("Element", "Wind")

            message.channel.send({ embed });

        }

        if (name === "amor") {
            const embed = new Discord.RichEmbed()

                .addField("Monolouging **Amor**", ":star::star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/CVNFTeA.jpg")
                .setThumbnail("https://i.imgur.com/A6RA6Co.png")
                .addField("Role", "Attacker")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }

        if (name === "tisiphone") {
            const embed = new Discord.RichEmbed()

                .addField("Counterattack **Tisiphone**", ":star::star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/UB4Kohm.jpg")
                .setThumbnail("https://i.imgur.com/5vAkKpF.png")
                .addField("Role", "Attack")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }

        if (name === "muse") {
            const embed = new Discord.RichEmbed()

                .addField("Night **Muse**", ":star::star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/jqpipST.jpg")
                .setThumbnail("https://i.imgur.com/BmFxtF1.png")
                .addField("Role", "Debuffer")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }

        if (name === "rednose") {
            const embed = new Discord.RichEmbed()

                .addField("Silent **Rednose**", ":star::star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/kC1L10d.jpg")
                .setThumbnail("https://i.imgur.com/E2bBPSy.png")
                .addField("Role", "Supporter")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }

        if (name === "ambrosia") {
            const embed = new Discord.RichEmbed()

                .addField("Challenger **Ambrosia**", ":star::star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/aMYIZC8.jpg")
                .setThumbnail("https://i.imgur.com/ex1JwVI.png")
                .addField("Role", "Attacker")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }

        if (name === "flora") {
            const embed = new Discord.RichEmbed()

                .addField("Meadow **Flora**", ":star::star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/HBjEV9c.jpg")
                .setThumbnail("https://i.imgur.com/VIGdIcB.png")
                .addField("Role", "Supporter")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }

        if (name === "europa") {
            const embed = new Discord.RichEmbed()

                .addField("Fragant **Europa**", ":star::star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/JoPqa0H.jpg")
                .setThumbnail("https://i.imgur.com/nswpTec.png")
                .addField("Role", "Defender")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }

        if (name === "selene") {
            const embed = new Discord.RichEmbed()

                .addField("Night **Selene**", ":star::star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/tvP1XLD.jpg")
                .setThumbnail("https://i.imgur.com/4Nm8hIn.png")
                .addField("Role", "Healer")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }

        if (name === "korra") {
            const embed = new Discord.RichEmbed()

                .addField("Little **Korra**", ":star::star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/857SIdf.jpg")
                .setThumbnail("https://i.imgur.com/WLDTrS0.png")
                .addField("Role", "Attacker")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }

        // water 4*

        if (name === "mayahuel" || name === "maya") {
            const embed = new Discord.RichEmbed()

                .addField("Lazy **Mayahuel**", ":star::star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/68x5waP.jpg")
                .setThumbnail("https://i.imgur.com/n3AnIEG.png")
                .addField("Role", "Supporter")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }

        if (name === "thoth") {
            const embed = new Discord.RichEmbed()

                .addField("Stern **Thoth**", ":star::star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/enFEdjq.jpg")
                .setThumbnail("https://i.imgur.com/T7gpsmC.png")
                .addField("Role", "Defender")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }

        if (name === "isis") {
            const embed = new Discord.RichEmbed()

                .addField("Actress **Isis**", ":star::star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/iaOVXNT.jpg")
                .setThumbnail("https://i.imgur.com/8Zz5Pbs.png")
                .addField("Role", "Healer")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }

        if (name === "yaga") {
            const embed = new Discord.RichEmbed()

                .addField("Loyal **Yaga**", ":star::star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/m07JnrR.jpg")
                .setThumbnail("https://i.imgur.com/h6gMQur.png")
                .addField("Role", "Debuffer")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }

        if (name === "halloween") {
            const embed = new Discord.RichEmbed()

                .addField("Dream **Halloween**", ":star::star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/uUFknWZ.jpg")
                .setThumbnail("https://i.imgur.com/GiHdEcE.png")
                .addField("Role", "Defender")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }

        if (name === "sonnet") {
            const embed = new Discord.RichEmbed()

                .addField("Sorrowful **Sonnet**", ":star::star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/vaeW1ZQ.jpg")
                .setThumbnail("https://i.imgur.com/3winCih.png")
                .addField("Role", "Attacker")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }

        if (name === "danu") {
            const embed = new Discord.RichEmbed()

                .addField("Explosive **Danu**", ":star::star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/TK6qKLH.jpg")
                .setThumbnail("https://i.imgur.com/FQxFEXw.png")
                .addField("Role", "Attacker")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }

        if (name === "arges") {
            const embed = new Discord.RichEmbed()

                .addField("Lightning **Arges**", ":star::star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/Si5dDN6.jpg")
                .setThumbnail("https://i.imgur.com/YQN0VuP.png")
                .addField("Role", "Debuffer")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }

        if (name === "quirinus") {
            const embed = new Discord.RichEmbed()

                .addField("Cheerful **Quirinus**", ":star::star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/XVZiCO0.jpg")
                .setThumbnail("https://i.imgur.com/Mi6K7M0.png")
                .addField("Role", "Supporter")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }

        if (name === "elysion" || name === "ely") {
            const embed = new Discord.RichEmbed()

                .addField("Paradise **Elysion**", ":star::star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/R0gEO2B.jpg")
                .setThumbnail("https://i.imgur.com/f78AiI6.png")
                .addField("Role", "Attacker")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }

        // fire 4*

        if (name === "neith") {
            const embed = new Discord.RichEmbed()

                .addField("Battlefield **Neith**", ":star::star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/T04UjOw.jpg")
                .setThumbnail("https://i.imgur.com/zAjbQjv.pngg")
                .addField("Role", "Attacker")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "fenrir") {
            const embed = new Discord.RichEmbed()

                .addField("Explorer **Fenrir**", ":star::star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/sGGtLys.jpg")
                .setThumbnail("https://i.imgur.com/VS3j0Ha.png")
                .addField("Role", "Attacker")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "daphne") {
            const embed = new Discord.RichEmbed()

                .addField("Fantasy **Daphne**", ":star::star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/Gnfd2yI.jpg")
                .setThumbnail("https://i.imgur.com/IsLO1bK.png")
                .addField("Role", "Healer")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "fortuna") {
            const embed = new Discord.RichEmbed()

                .addField("Dangerous **Fortuna**", ":star::star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/J4L79X9.jpg")
                .setThumbnail("https://i.imgur.com/sKkQWLV.png")
                .addField("Role", "Supporter")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "eldorado") {
            const embed = new Discord.RichEmbed()

                .addField("Hipnotic **El-Dorado**", ":star::star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/b5OM8D6.jpg")
                .setThumbnail("https://i.imgur.com/1Fxb5EP.png")
                .addField("Role", "Defender")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "hector") {
            const embed = new Discord.RichEmbed()

                .addField("Mercenary **Hector**", ":star::star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/fLQ6Asx.jpg")
                .setThumbnail("https://i.imgur.com/NxIXBmq.png")
                .addField("Role", "Attacker")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "rudolph") {
            const embed = new Discord.RichEmbed()

                .addField("Uninvited **Rudolph**", ":star::star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/HHxdKel.jpg")
                .setThumbnail("https://i.imgur.com/2vwIeEE.png")
                .addField("Role", "Supporter")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "lady") {
            const embed = new Discord.RichEmbed()

                .addField("Bound **Lady**", ":star::star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/qnAwq9k.jpg")
                .setThumbnail("https://i.imgur.com/kxgbqim.png")
                .addField("Role", "Defender")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "yuna") {
            const embed = new Discord.RichEmbed()

                .addField("Shining **Yuna**", ":star::star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/9j9X1xi.jpg")
                .setThumbnail("https://i.imgur.com/nO3kAU8.png")
                .addField("Role", "Attacker")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "chimera") {
            const embed = new Discord.RichEmbed()

                .addField("Silent **Chimera**", ":star::star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/6j2EuGG.jpg")
                .setThumbnail("https://i.imgur.com/CkvdPji.png")
                .addField("Role", "Defender")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "fairy") {
            const embed = new Discord.RichEmbed()

                .addField("Silent **Fairy**", ":star::star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/CwBT79w.jpg")
                .setThumbnail("https://i.imgur.com/qutjSBN.png")
                .addField("Role", "Defender")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "freesia") {
            const embed = new Discord.RichEmbed()

                .addField("Timid **Freesia**", ":star::star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/FrSVXN7.jpg")
                .setThumbnail("https://i.imgur.com/eu2ll9a.png")
                .addField("Role", "Debuffer")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        // light 4*

        if (name === "titania") {
            const embed = new Discord.RichEmbed()

                .addField("Armageddon **Titania**", ":star::star::star::star:")
                .setColor("#f7ee6c")
                .setImage("https://i.imgur.com/5bE8NIV.jpg")
                .setThumbnail("https://i.imgur.com/ILHZshe.png")
                .addField("Role", "Attacker")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }

        if (name === "calchas") {
            const embed = new Discord.RichEmbed()

                .addField("Artisanal **Calchas**", ":star::star::star::star:")
                .setColor("#f7ee6c")
                .setImage("https://i.imgur.com/x1gbFxz.jpg")
                .setThumbnail("https://i.imgur.com/LlHbBbR.png")
                .addField("Role", "Attacker")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }

        if (name === "erato") {
            const embed = new Discord.RichEmbed()

                .addField("Blooming **Erato**", ":star::star::star::star:")
                .setColor("#f7ee6c")
                .setImage("https://i.imgur.com/oJMPyMq.jpg")
                .setThumbnail("https://i.imgur.com/vnUyX6r.png")
                .addField("Role", "Supporter")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }

        if (name === "ishtar") {
            const embed = new Discord.RichEmbed()

                .addField("Bound **Ishtar**", ":star::star::star::star:")
                .setColor("#f7ee6c")
                .setImage("https://i.imgur.com/ucLoHch.jpg")
                .setThumbnail("https://i.imgur.com/bTwz4xn.png")
                .addField("Role", "Debuffer")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }

        if (name === "pomona") {
            const embed = new Discord.RichEmbed()

                .addField("Floral **Pomona**", ":star::star::star::star:")
                .setColor("#f7ee6c")
                .setImage("https://i.imgur.com/nvR53p3.jpg")
                .setThumbnail("https://i.imgur.com/mugRADx.png")
                .addField("Role", "Healer")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }

        if (name === "eos") {
            const embed = new Discord.RichEmbed()

                .addField("Delightful **Eos**", ":star::star::star::star:")
                .setColor("#f7ee6c")
                .setImage("https://i.imgur.com/g1wUiW5.jpg")
                .setThumbnail("https://i.imgur.com/tqC0oes.png")
                .addField("Role", "Attacker")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }

        if (name === "victorix") {
            const embed = new Discord.RichEmbed()

                .addField("Mirror **Victorix**", ":star::star::star::star:")
                .setColor("#f7ee6c")
                .setImage("https://i.imgur.com/GTe8UtN.jpg")
                .setThumbnail("https://i.imgur.com/jbW1kox.png")
                .addField("Role", "Attacker")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }

        if (name === "detectivegirl") {
            const embed = new Discord.RichEmbed()

                .addField("Roaming **Detective Girl**", ":star::star::star::star:")
                .setColor("#f7ee6c")
                .setImage("https://i.imgur.com/GRwAIwC.png")
                .setThumbnail("https://i.imgur.com/UoV21sm.png")
                .addField("Role", "Attacker")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }

        if (name === "merlin") {
            const embed = new Discord.RichEmbed()

                .addField("Otherwordly **Merlin**", ":star::star::star::star:")
                .setColor("#f7ee6c")
                .setImage("https://i.imgur.com/ELP16fU.jpg")
                .setThumbnail("https://i.imgur.com/WwISR8R.png")
                .addField("Role", "Healer")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }

        if (name === "leda") {
            const embed = new Discord.RichEmbed()

                .addField("Successful **Leda**", ":star::star::star::star:")
                .setColor("#f7ee6c")
                .setImage("https://i.imgur.com/5uYf4J6.jpg")
                .setThumbnail("https://i.imgur.com/szfyXll.png")
                .addField("Role", "Supporter")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }

        if (name === "hercules") {
            const embed = new Discord.RichEmbed()

                .addField("Militant **Hercules**", ":star::star::star::star:")
                .setColor("#f7ee6c")
                .setImage("https://i.imgur.com/dDhDgq5.jpg")
                .setThumbnail("https://i.imgur.com/KQHTQwn.png")
                .addField("Role", "Defender")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }

        if (name === "frigga") {
            const embed = new Discord.RichEmbed()

                .addField("Warrior **Frigga**", ":star::star::star::star:")
                .setColor("#f7ee6c")
                .setImage("https://i.imgur.com/rXLR7rQ.jpg")
                .setThumbnail("https://i.imgur.com/eGXnpOI.png")
                .addField("Role", "Defender")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }

        // dark 4*

        if (name === "artemis") {
            const embed = new Discord.RichEmbed()

                .addField("Moonless **Artemis**", ":star::star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/sZWrGBY.jpg")
                .setThumbnail("https://i.imgur.com/JaSulqG.png")
                .addField("Role", "Attacker")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }

        if (name === "aten") {
            const embed = new Discord.RichEmbed()

                .addField("Self-Righteous **Aten**", ":star::star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/41buCLK.jpg")
                .setThumbnail("https://i.imgur.com/6P8beHO.png")
                .addField("Role", "Defender")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }

        if (name === "morrigan") {
            const embed = new Discord.RichEmbed()

                .addField("Furious **Morrigan**", ":star::star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/jeOnoBp.jpg")
                .setThumbnail("https://i.imgur.com/q7HmudS.png")
                .addField("Role", "Attacker")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }

        if (name === "inanna") {
            const embed = new Discord.RichEmbed()

                .addField("Harlequin **Inanna**", ":star::star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/OmC4Lx1.jpg")
                .setThumbnail("https://i.imgur.com/AAogQhL.png")
                .addField("Role", "Attacker")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }

        if (name === "persephone") {
            const embed = new Discord.RichEmbed()

                .addField("Dawn **Persephone**", ":star::star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/jZOzJdC.jpg")
                .setThumbnail("https://i.imgur.com/EEYBcu4.png")
                .addField("Role", "Debuffer")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }

        if (name === "guillotine") {
            const embed = new Discord.RichEmbed()

                .addField("Dawn **Guillotine**", ":star::star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/4WNFZZi.jpg")
                .setThumbnail("https://i.imgur.com/sJWdLFx.png")
                .addField("Role", "Attacker")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }

        if (name === "melpomene" || name === "melp") {
            const embed = new Discord.RichEmbed()

                .addField("Bored **Melpomene**", ":star::star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/TggDlwN.jpg")
                .setThumbnail("https://i.imgur.com/8Lk4GRC.png")
                .addField("Role", "Supporter")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }

        if (name === "cybele") {
            const embed = new Discord.RichEmbed()

                .addField("Little Princess **Cybele**", ":star::star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/Y0DOi09.jpg")
                .setThumbnail("https://i.imgur.com/tWS6gFN.png")
                .addField("Role", "Defender")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }

        if (name === "neamhain") {
            const embed = new Discord.RichEmbed()

                .addField("Melancholy **Neamhain**", ":star::star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/ke0fs5Y.jpg")
                .setThumbnail("https://i.imgur.com/5IHY3lS.png")
                .addField("Role", "Debuffer")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }

        if (name === "skull") {
            const embed = new Discord.RichEmbed()

                .addField("Old **Skull**", ":star::star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/Nw5R6aK.jpg")
                .setThumbnail("https://i.imgur.com/W4IOQFc.png")
                .addField("Role", "Defender")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }

        if (name === "pietas") {
            const embed = new Discord.RichEmbed()

                .addField("Beloved **Pietas**", ":star::star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/Xj5xziI.jpg")
                .setThumbnail("https://i.imgur.com/qdUpRg7.png")
                .addField("Role", "Attacker")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }

        if (name === "zelos") {
            const embed = new Discord.RichEmbed()

                .addField("Silent **Zelos**", ":star::star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/U00v9Xa.jpg")
                .setThumbnail("https://i.imgur.com/nl8m0m6.png")
                .addField("Role", "Healer")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }

        // 3 star child region

        // since there are some 3* have same name, need give guide to Seething

        if (name === "revengegirl") {
            message.channel.send("There are some other Revenge Girl with different element, so you need to be specific. \n- Red\n- Blue\n- Green\n- Light\n- Purple");

            const filter = m => m.author.id === message.author.id;
            message.reply("Please choose any of the element you wanted for Revenge Girl. Will expire in 10 seconds. . .").then(r => r.delete(10000));
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 10000
            }).then(collected => {

                if (collected.first().content === "cancel") {
                    return message.reply("Canceled!");
                }

                // where the input for revenge girl Element
                let rvele = collected.first().content;

                if (rvele === "red") {
                    const embed = new Discord.RichEmbed()

                        .addField("Red **Revenge Girl**", ":star::star::star:")
                        .setColor("#f43a3a")
                        .setImage("https://i.imgur.com/zMz4Tmf.png")
                        .setThumbnail("https://i.imgur.com/wpqbGzE.png")
                        .addField("Role", "Debuffer")
                        .addField("Element", "Fire")

                    message.channel.send({ embed });
                }


                if (rvele === "blue") {
                    const embed = new Discord.RichEmbed()

                        .addField("Blue **Revenge Girl**", ":star::star::star:")
                        .setColor("#3a7ce8")
                        .setImage("https://i.imgur.com/GruZwwJ.png")
                        .setThumbnail("https://i.imgur.com/oCqF2At.png")
                        .addField("Role", "Debuffer")
                        .addField("Element", "Blue")

                    message.channel.send({ embed });

                }


                if (rvele === "green") {
                    const embed = new Discord.RichEmbed()

                        .addField("Green **Revenge Girl**", ":star::star::star:")
                        .setColor("#0eb216")
                        .setImage("https://i.imgur.com/SRpQRe0.png")
                        .setThumbnail("https://i.imgur.com/fBBsDdf.png")
                        .addField("Role", "Debuffer")
                        .addField("Element", "Green")

                    message.channel.send({ embed });

                }


                if (rvele === "light") {
                    const embed = new Discord.RichEmbed()

                        .addField("Light **Revenge Girl**", ":star::star::star:")
                        .setColor("#f7ee6c")
                        .setImage("https://i.imgur.com/wZ5wDSy.png")
                        .setThumbnail("https://i.imgur.com/nYR3ZP6.png")
                        .addField("Role", "Debuffer")
                        .addField("Element", "Light")

                    message.channel.send({ embed });

                }


                if (rvele === "purple") {
                    const embed = new Discord.RichEmbed()

                        .addField("Purple **Revenge Girl**", ":star::star::star:")
                        .setColor("#8659ba")
                        .setImage("https://i.imgur.com/J3MM0Gj.png")
                        .setThumbnail("https://i.imgur.com/CcjJBiG.png")
                        .addField("Role", "Debuffer")
                        .addField("Element", "Dark")

                    message.channel.send({ embed });

                }

            }).catch(err => {
                console.log(err)
            });

        }

        if (name === "watcher") {
            message.channel.send("There are some other Watcher with different element, so you need to be specific. \n- Red\n- Blue\n- Green\n- Light\n- Darkness");

            const filter = m => m.author.id === message.author.id;
            message.reply("Please choose any of the element you wanted for Watcher. Will expire in 10 seconds. . .").then(r => r.delete(10000));
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 10000
            }).then(collected => {

                if (collected.first().content === "cancel") {
                    return message.reply("Canceled!");
                }

                // where the input for revenge girl Element
                let watchele = collected.first().content;

                if (watchele === "red") {
                    const embed = new Discord.RichEmbed()

                        .addField("Red **Watcher**", ":star::star::star:")
                        .setColor("#f43a3a")
                        .setImage("https://i.imgur.com/DAo5sLd.png")
                        .setThumbnail("https://i.imgur.com/UdVO2qR.png")
                        .addField("Role", "Defender")
                        .addField("Element", "Fire")

                    message.channel.send({ embed });
                }


                if (watchele === "blue") {
                    const embed = new Discord.RichEmbed()

                        .addField("Blue **Watcher**", ":star::star::star:")
                        .setColor("#3a7ce8")
                        .setImage("https://i.imgur.com/YMUpIkj.png")
                        .setThumbnail("https://i.imgur.com/JzahQ24.png")
                        .addField("Role", "Defender")
                        .addField("Element", "Blue")

                    message.channel.send({ embed });

                }


                if (watchele === "green") {
                    const embed = new Discord.RichEmbed()

                        .addField("Green **Watcher**", ":star::star::star:")
                        .setColor("#0eb216")
                        .setImage("https://i.imgur.com/shglFmC.png")
                        .setThumbnail("https://i.imgur.com/qtQnS0a.png")
                        .addField("Role", "Defender")
                        .addField("Element", "Green")

                    message.channel.send({ embed });

                }


                if (watchele === "light") {
                    const embed = new Discord.RichEmbed()

                        .addField("Light **Watcher**", ":star::star::star:")
                        .setColor("#f7ee6c")
                        .setImage("https://i.imgur.com/c20sbJk.png")
                        .setThumbnail("https://i.imgur.com/kYMxcXo.png")
                        .addField("Role", "Defender")
                        .addField("Element", "Light")

                    message.channel.send({ embed });

                }


                if (watchele === "darkness") {
                    const embed = new Discord.RichEmbed()

                        .addField("Darkness **Watcher**", ":star::star::star:")
                        .setColor("#8659ba")
                        .setImage("https://i.imgur.com/aWAW0Ce.png")
                        .setThumbnail("https://i.imgur.com/42lsOja.png")
                        .addField("Role", "Defender")
                        .addField("Element", "Dark")

                    message.channel.send({ embed });

                }

            }).catch(err => {
                console.log(err)
            });
        }

        // fire 3* child

        if (name === "bazooka") {
            const embed = new Discord.RichEmbed()

                .addField("Green Helmet **Bazooka**", ":star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/ZWUCloZ.png")
                .setThumbnail("https://i.imgur.com/uTap0EY.png")
                .addField("Role", "Attacker")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "blooddragon") {
            const embed = new Discord.RichEmbed()

                .addField("Flame King **Blood Dragon**", ":star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/4sSU5Wa.png")
                .setThumbnail("https://i.imgur.com/IAjrIoN.png")
                .addField("Role", "Defender")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "davi") {
            const embed = new Discord.RichEmbed()

                .addField("Battlesuit **Davi**", ":star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/xC2absr.png")
                .setThumbnail("https://i.imgur.com/KeBPQao.png")
                .addField("Role", "Attacker")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "demeter") {
            const embed = new Discord.RichEmbed()

                .addField("Bluffing **Demeter**", ":star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/Viz5o8U.png")
                .setThumbnail("https://i.imgur.com/cdA29Wd.png")
                .addField("Role", "Healer")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "fighter") {
            const embed = new Discord.RichEmbed()

                .addField("Sneaker **Fighter**", ":star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/a1FLZla.png")
                .setThumbnail("https://i.imgur.com/stbpd8O.png")
                .addField("Role", "Attacker")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "firedragon") {
            const embed = new Discord.RichEmbed()

                .addField("Furious **Fire Dragon**", ":star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/7X9jJH5.png")
                .setThumbnail("https://i.imgur.com/B9FiY1y.png")
                .addField("Role", "Defender")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "firo") {
            const embed = new Discord.RichEmbed()

                .addField("Hot **Firo**", ":star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/RTsLSsu.png")
                .setThumbnail("https://i.imgur.com/mDLJww1.png")
                .addField("Role", "Attacker")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "firon") {
            const embed = new Discord.RichEmbed()

                .addField("Red-Feathered **Firon**", ":star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/gvHWfyp.png")
                .setThumbnail("https://i.imgur.com/Lg4Ym8u.png")
                .addField("Role", "Defender")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "hypnos") {
            const embed = new Discord.RichEmbed()

                .addField("Night Maiden **Hypnos**", ":star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/rirWGPd.png")
                .setThumbnail("https://i.imgur.com/xbGGmXc.png")
                .addField("Role", "Supporter")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "judas") {
            const embed = new Discord.RichEmbed()

                .addField("**Judas**", ":star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/vqz7vpu.png")
                .setThumbnail("https://i.imgur.com/6WVdf3E.png")
                .addField("Role", "Defender")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "mimic") {
            const embed = new Discord.RichEmbed()

                .addField("Startling **Mimic**", ":star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/VaLKzoF.png")
                .setThumbnail("https://i.imgur.com/OqejsDb.png")
                .addField("Role", "Debuffer")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "phoenix") {
            const embed = new Discord.RichEmbed()

                .addField("Hot **Phoenix**", ":star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/rxfZkqN.png")
                .setThumbnail("https://i.imgur.com/YdPESYh.png")
                .addField("Role", "Defender")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "shamash") {
            const embed = new Discord.RichEmbed()

                .addField("Lawful **Shamash**", ":star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/0OPMrVU.png")
                .setThumbnail("https://i.imgur.com/jWX72GU.png")
                .addField("Role", "Attacker")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "sekhmet") {
            const embed = new Discord.RichEmbed()

                .addField("Destructive **Sekhmet**", ":star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/y9pk4IB.png")
                .setThumbnail("https://i.imgur.com/pqu1jim.png")
                .addField("Role", "Attacker")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "tartarus") {
            const embed = new Discord.RichEmbed()

                .addField("Abyssal **Tartarus**", ":star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/3L3CZ5V.png")
                .setThumbnail("https://i.imgur.com/2sLvLjS.png")
                .addField("Role", "Defender")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "tiamat") {
            const embed = new Discord.RichEmbed()

                .addField("Abyssal **Tiamat**", ":star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/FNoNlPs.png")
                .setThumbnail("https://i.imgur.com/g9QCHlm.png")
                .addField("Role", "Debuffer")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        if (name === "vesta") {
            const embed = new Discord.RichEmbed()

                .addField("Hotblooded **Vesta**", ":star::star::star:")
                .setColor("#f43a3a")
                .setImage("https://i.imgur.com/guc7SS8.png")
                .setThumbnail("https://i.imgur.com/EBNp1Av.png")
                .addField("Role", "Attacker")
                .addField("Element", "Fire")

            message.channel.send({ embed });

        }

        // water 3*

        if (name === "atalanta") {
            const embed = new Discord.RichEmbed()

                .addField("Charging **Atalanta**", ":star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/RWYTGpV.png")
                .setThumbnail("https://i.imgur.com/XycAnEc.png")
                .addField("Role", "Attacker")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }

        if (name === "baphomet") {
            const embed = new Discord.RichEmbed()

                .addField("Creative **Baphomet**", ":star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/YqBLpZa.png")
                .setThumbnail("https://i.imgur.com/coo80p2.png")
                .addField("Role", "Defender")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }


        if (name === "charonn") {
            const embed = new Discord.RichEmbed()

                .addField("Water-Feathered **Charonn**", ":star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/p1Taz2Y.png")
                .setThumbnail("https://i.imgur.com/E2HAimn.png")
                .addField("Role", "Defender")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }


        if (name === "deino") {
            const embed = new Discord.RichEmbed()

                .addField("Volunteer **Deino**", ":star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/uyxkRpr.png")
                .setThumbnail("https://i.imgur.com/NC3z4SQ.png")
                .addField("Role", "Healer")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }


        if (name === "azuredragon") {
            const embed = new Discord.RichEmbed()

                .addField("Ice King **Azure Dragon**", ":star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/PXUaQJV.png")
                .setThumbnail("https://i.imgur.com/t5vMuZ7.png")
                .addField("Role", "Defender")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }


        if (name === "euros") {
            const embed = new Discord.RichEmbed()

                .addField("Happy **Euros**", ":star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/aI8If4I.png")
                .setThumbnail("https://i.imgur.com/N4HTPjx.png")
                .addField("Role", "Supporter")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }


        if (name === "goga") {
            const embed = new Discord.RichEmbed()

                .addField("Flavoured **Goga**", ":star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/HSe1dpF.png")
                .setThumbnail("https://i.imgur.com/oAyEK9d.png")
                .addField("Role", "Attacker")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }


        if (name === "hecate") {
            const embed = new Discord.RichEmbed()

                .addField("Dreaming **Hecate**", ":star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/BwlosUu.png")
                .setThumbnail("https://i.imgur.com/t1IaGxw.png")
                .addField("Role", "Debuffer")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }


        if (name === "hertz") {
            const embed = new Discord.RichEmbed()

                .addField("DJ **Hertz**", ":star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/PfMiBYw.png")
                .setThumbnail("https://i.imgur.com/FmLMCCR.png")
                .addField("Role", "Supporter")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }


        if (name === "icedragon") {
            const embed = new Discord.RichEmbed()

                .addField("Cold-Blooded **Ice Dragon**", ":star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/Vuomm5e.png")
                .setThumbnail("https://i.imgur.com/Xu0tTDX.png")
                .addField("Role", "Defender")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }


        if (name === "jeanne" || name === "jeannedarc") {
            const embed = new Discord.RichEmbed()

                .addField("Martyr **Jeanne d' Arc**", ":star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/EI3hdld.png")
                .setThumbnail("https://i.imgur.com/KjHacRp.png")
                .addField("Role", "Attacker")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }


        if (name === "lisa") {
            const embed = new Discord.RichEmbed()

                .addField("Battlesuit **Lisa**", ":star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/6mjitNo.png")
                .setThumbnail("https://i.imgur.com/2oSGyE0.png")
                .addField("Role", "Supporter")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }


        if (name === "mnemosyne") {
            const embed = new Discord.RichEmbed()

                .addField("Lazy **Mnemosyne**", ":star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/AXsGbFy.png")
                .setThumbnail("https://i.imgur.com/vdW6E1g.png")
                .addField("Role", "Debuffer")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }


        if (name === "seshat") {
            const embed = new Discord.RichEmbed()

                .addField("Running **Seshat**", ":star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/f7iiFy3.png")
                .setThumbnail("https://i.imgur.com/ozmoGTy.png")
                .addField("Role", "Attacker")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }


        if (name === "vulcan") {
            const embed = new Discord.RichEmbed()

                .addField("Resurgent **Vulcan**", ":star::star::star:")
                .setColor("#3a7ce8")
                .setImage("https://i.imgur.com/C1kocfg.png")
                .setThumbnail("https://i.imgur.com/my39JvK.png")
                .addField("Role", "Attacker")
                .addField("Element", "Water")

            message.channel.send({ embed });

        }

        // wood 3*

        if (name === "ampoule") {
            const embed = new Discord.RichEmbed()

                .addField("Poison **Ampoule**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/BUx71bY.png")
                .setThumbnail("https://i.imgur.com/OeSjGqB.png")
                .addField("Role", "Healer")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }


        if (name === "apollo") {
            const embed = new Discord.RichEmbed()

                .addField("Glittering **Apollo**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/RYLiKJo.png")
                .setThumbnail("https://i.imgur.com/RzgU3I7.png")
                .addField("Role", "Healer")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }


        if (name === "atropos") {
            const embed = new Discord.RichEmbed()

                .addField("Zooming **Atropos**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/m1LPTI0.png")
                .setThumbnail("https://i.imgur.com/wegvRlG.png")
                .addField("Role", "Attacker")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }


        if (name === "basilisk") {
            const embed = new Discord.RichEmbed()

                .addField("Desert **Basilisk**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/AU9oYq5.png")
                .setThumbnail("https://i.imgur.com/Hd1I7OK.png")
                .addField("Role", "Defender")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }


        if (name === "bellboy") {
            const embed = new Discord.RichEmbed()

                .addField("Bowtie **Bellboy**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/jz7WqIy.png")
                .setThumbnail("https://i.imgur.com/M6ShnTJ.png")
                .addField("Role", "Defender")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }


        if (name === "diana") {
            const embed = new Discord.RichEmbed()

                .addField("Tranquil **Diana**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/r61olGc.png")
                .setThumbnail("https://i.imgur.com/8k7eDiw.png")
                .addField("Role", "Supporter")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }


        if (name === "eris") {
            const embed = new Discord.RichEmbed()

                .addField("Frenzied **Eris**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/0j7ppG1.png")
                .setThumbnail("https://i.imgur.com/vB9rH7B.png")
                .addField("Role", "Defender")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }


        if (name === "freyja") {
            const embed = new Discord.RichEmbed()

                .addField("Innocent **Freyja**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/gA9XIxw.png")
                .setThumbnail("https://i.imgur.com/gFOH4MZ.png")
                .addField("Role", "Attacker")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }


        if (name === "gron") {
            const embed = new Discord.RichEmbed()

                .addField("Green-Feathered **Gron**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/iOEC5QM.png")
                .setThumbnail("https://i.imgur.com/ITnE7PJ.png")
                .addField("Role", "Defender")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }


        if (name === "manti") {
            const embed = new Discord.RichEmbed()

                .addField("Bad Dream **Manti**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/0Z1X7QE.png")
                .setThumbnail("https://i.imgur.com/4gMH9bD.png")
                .addField("Role", "Attacker")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }


        if (name === "pompons") {
            const embed = new Discord.RichEmbed()

                .addField("Yackety **Pompons**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/UWVfYCm.png")
                .setThumbnail("https://i.imgur.com/YzJ2ElC.png")
                .addField("Role", "Supporter")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }


        if (name === "ptah") {
            const embed = new Discord.RichEmbed()

                .addField("Restorative **Ptah**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/ui1rflt.png")
                .setThumbnail("https://i.imgur.com/Xh5okC7.png")
                .addField("Role", "Supporter")
                .addField("Element", "Wood")

            message.channel.send({ embed });

        }

        // light 3*

        if (name === "arms") {
            const embed = new Discord.RichEmbed()

                .addField("Mad Bunny **Arms**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/N3oTP6J.png")
                .setThumbnail("https://i.imgur.com/lbbonUe.png")
                .addField("Role", "Defender")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }


        if (name === "berit") {
            const embed = new Discord.RichEmbed()

                .addField("Dramatic **Berit**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/4uSiJKc.png")
                .setThumbnail("https://i.imgur.com/Xe9BAS6.png")
                .addField("Role", "Healer")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }


        if (name === "bouquet") {
            const embed = new Discord.RichEmbed()

                .addField("Lonely **Bouquet**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/yN6agQv.png")
                .setThumbnail("https://i.imgur.com/MQkPUpC.png")
                .addField("Role", "Debuffer")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }


        if (name === "boxer") {
            const embed = new Discord.RichEmbed()

                .addField("Hot-Blooded **Boxer**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/M40nKs3.png")
                .setThumbnail("https://i.imgur.com/GmMMNxy.png")
                .addField("Role", "Attacker")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }


        if (name === "cheoyong") {
            const embed = new Discord.RichEmbed()

                .addField("Neighborly **Cheoyong**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/6tWCt7x.png")
                .setThumbnail("https://i.imgur.com/ZVZ8qM6.png")
                .addField("Role", "Attacker")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }


        if (name === "cusith") {
            const embed = new Discord.RichEmbed()

                .addField("Guard Dog **Cu Sith**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/Kr0HPSN.png")
                .setThumbnail("https://i.imgur.com/VuN3xWK.png")
                .addField("Role", "Defender")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }


        if (name === "jana") {
            const embed = new Discord.RichEmbed()

                .addField("Full Moon **Jana**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/mjtcbE0.png")
                .setThumbnail("https://i.imgur.com/jHxGEus.png")
                .addField("Role", "Attacker")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }


        if (name === "kaliyuga") {
            const embed = new Discord.RichEmbed()

                .addField("Destructive **Kali Yuga**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/2HnSp5J.png")
                .setThumbnail("https://i.imgur.com/SzKKjgm.png")
                .addField("Role", "Defender")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }


        if (name === "leuce") {
            const embed = new Discord.RichEmbed()

                .addField("Lowly Nymph **Leuce**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/y1S658E.png")
                .setThumbnail("https://i.imgur.com/4MZmhu2.png")
                .addField("Role", "Supporter")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }


        if (name === "liron") {
            const embed = new Discord.RichEmbed()

                .addField("Light-Feathered **Liron**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/JdSWbM1.png")
                .setThumbnail("https://i.imgur.com/yHutRE2.png")
                .addField("Role", "Defender")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }


        if (name === "morgana") {
            const embed = new Discord.RichEmbed()

                .addField("Mirage **Morgana**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/7QU7AjN.png")
                .setThumbnail("https://i.imgur.com/qHzsRXM.png")
                .addField("Role", "Supporter")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }


        if (name === "salmacis") {
            const embed = new Discord.RichEmbed()

                .addField("Your Exclusive **Salmacis**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/6ZMCVde.png")
                .setThumbnail("https://i.imgur.com/E8TLzjI.png")
                .addField("Role", "Healer")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }


        if (name === "teddy") {
            const embed = new Discord.RichEmbed()

                .addField("Tattered **Teddy**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/G4VRtRH.png")
                .setThumbnail("https://i.imgur.com/ArVigyZ.png")
                .addField("Role", "Defender")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }


        if (name === "won") {
            const embed = new Discord.RichEmbed()

                .addField("Noise **Won**", ":star::star::star:")
                .setColor("#0eb216")
                .setImage("https://i.imgur.com/CR1FnSL.png")
                .setThumbnail("https://i.imgur.com/htzvFx4.png")
                .addField("Role", "Debuffer")
                .addField("Element", "Light")

            message.channel.send({ embed });

        }


        // dark 3*

        if (name === "alecto") {
            const embed = new Discord.RichEmbed()

                .addField("Lively **Alecto**", ":star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/6CUxGHB.png")
                .setThumbnail("https://i.imgur.com/krEn4Lx.png")
                .addField("Role", "Healer")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }


        if (name === "baal") {
            const embed = new Discord.RichEmbed()

                .addField("Frenzied **Baal**", ":star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/E8jo5ow.png")
                .setThumbnail("https://i.imgur.com/sr6xDiB.png")
                .addField("Role", "Defender")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }


        if (name === "chainkiller") {
            const embed = new Discord.RichEmbed()

                .addField("Standard **Chain Killer**", ":star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/M8K6FAy.png")
                .setThumbnail("https://i.imgur.com/uyqvR9i.png")
                .addField("Role", "Defender")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }


        if (name === "chaser") {
            const embed = new Discord.RichEmbed()

                .addField("Dark Night **Chaser**", ":star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/hp08eav.png")
                .setThumbnail("https://i.imgur.com/e7UhIEb.png")
                .addField("Role", "Healer")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }


        if (name === "cynthia") {
            const embed = new Discord.RichEmbed()

                .addField("Genuine **Cynthia**", ":star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/4ZZys0I.png")
                .setThumbnail("https://i.imgur.com/kDiERTt.png")
                .addField("Role", "Supporter")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }


        if (name === "daron") {
            const embed = new Discord.RichEmbed()

                .addField("Black-Feathered **Daron**", ":star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/SlToGSe.png")
                .setThumbnail("https://i.imgur.com/0UcULOI.png")
                .addField("Role", "Defender")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }


        if (name === "elias") {
            const embed = new Discord.RichEmbed()

                .addField("Truth-Seeker **Elias**", ":star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/VaubTmk.png")
                .setThumbnail("https://i.imgur.com/F2xt9nG.png")
                .addField("Role", "Supporter")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }


        if (name === "genius") {
            const embed = new Discord.RichEmbed()

                .addField("Truth-Seeker **Genius**", ":star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/tlgcOsM.png")
                .setThumbnail("https://i.imgur.com/hBprDLt.png")
                .addField("Role", "Supporter")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }


        if (name === "giftbag") {
            const embed = new Discord.RichEmbed()

                .addField("Good Kid's **Gift Bag**", ":star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/IzVM2XM.png")
                .setThumbnail("https://i.imgur.com/sWEmo2d.png")
                .addField("Role", "Attacker")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }


        if (name === "idun") {
            const embed = new Discord.RichEmbed()

                .addField("Floral **Idun**", ":star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/IQzKpXV.png")
                .setThumbnail("https://i.imgur.com/QFOapJw.png")
                .addField("Role", "Attacker")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }


        if (name === "kratos") {
            const embed = new Discord.RichEmbed()

                .addField("Bound **Kratos**", ":star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/cDosh01.png")
                .setThumbnail("https://i.imgur.com/lL8zqRb.png")
                .addField("Role", "Attacker")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }


        if (name === "legend") {
            const embed = new Discord.RichEmbed()

                .addField("Guardian **Legend**", ":star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/Ll5eni8.png")
                .setThumbnail("https://i.imgur.com/i6aocRI.png")
                .addField("Role", "Attacker")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }


        if (name === "medeia") {
            const embed = new Discord.RichEmbed()

                .addField("Vengeful **Medeia**", ":star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/IfALKQC.png")
                .setThumbnail("https://i.imgur.com/99Oq0hr.png")
                .addField("Role", "Attacker")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }


        if (name === "messenger") {
            const embed = new Discord.RichEmbed()

                .addField("Voice **Messenger**", ":star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/D9ZPyWB.png")
                .setThumbnail("https://i.imgur.com/d4ub1xk.png")
                .addField("Role", "Defender")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }


        if (name === "mona") {
            const embed = new Discord.RichEmbed()

                .addField("Battlesuit **Mona**", ":star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/LI9EUUX.png")
                .setThumbnail("https://i.imgur.com/yyerowh.png")
                .addField("Role", "Defender")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }


        if (name === "skuld") {
            const embed = new Discord.RichEmbed()

                .addField("Cursed **Skuld**", ":star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/W30mntc.png")
                .setThumbnail("https://i.imgur.com/H3NeH3l.png")
                .addField("Role", "Debuffer")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }


        if (name === "valkryie") {
            const embed = new Discord.RichEmbed()

                .addField("Warrior **Valkryie**", ":star::star::star:")
                .setColor("#8659ba")
                .setImage("https://i.imgur.com/loGwcZS.png")
                .setThumbnail("https://i.imgur.com/sHvXObS.png")
                .addField("Role", "Attacker")
                .addField("Element", "Dark")

            message.channel.send({ embed });

        }

        // end of all child


    }

    client.on("error", (e) => console.error(e));
    client.on("warn", (e) => console.warn(e));
    client.on("debug", (e) => console.info(e));
});

client.login(process.env.BOT_TOKEN);

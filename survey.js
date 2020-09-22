const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (nickname) => {

  rl.question('What\'s an activity you like doing? ', (hobby) => {

    rl.question('What do you listen to while doing that? ', (music) => {

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {

        rl.question('What\'s your favourite thing to eat for that meal? ', (favoriteFood) => {

          rl.question('Which sport is your absolute favourite? ', (sports) => {

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {

              console.log(`Just to confirm, your nickname is ${nickname}, your hobbies include ${hobby}, you enjoy listening to ${music}, your favourite meal is ${meal}, your favourite food is ${favoriteFood}, ${sports} is your favourite sport and your super power is ${superpower}! Thank you so much for your time today.`)
              
              rl.close();
            });
          });
        });
      });
    });  
  });
}); 
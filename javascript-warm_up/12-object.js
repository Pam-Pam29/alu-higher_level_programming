#!/usr/bin/node
function replaceValue (args) {
  if (args.length === 0) {
    console.log(0);
  } else {
    for (let i = 0; i < args.length; i++) {
      const num = parseInt(args[i]);
      if (args[i] === '12') {
        args[i] = '89';
      }
    }
    console.log(args.join(' '));
  }
}

replaceValue(process.argv.slice(2));

#!/usr/bin/node
function replaceValue(args) {
  if (args.length === 0) {
    console.log(0);
  } else {
    for (let i = 0; i < args.length; i++) {
      let num = parseInt(args[i]);
      if (num === 12) {
        args[i] = '89';
      }
    }
    console.log(args.join(' '));
  }
}

replaceValue(process.argv.slice(2));

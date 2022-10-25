process.stdout.write('hello from spinner1.js... \rheyyy\n');
let spinner = ['|', '/', '-', '\\', '/', '-', '|'];
let delay = 100;
for (let item of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${item}   `);
  }, delay);
  delay += 1000;
}

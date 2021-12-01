const sentence = "hello there from lighthouse labs";
let i = 0;

const typeWriter = () => setTimeout(() => {
  if (i === sentence.length - 1) {
    process.stdout.write(sentence[i++] + "\n")
  } else {
    process.stdout.write(sentence[i++]);
}
  if (i < sentence.length)
    typeWriter();
}, 50);

typeWriter();
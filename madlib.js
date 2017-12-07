function startGame() {
  console.log('starting game');
  let adjective1 = prompt('Type and adjective.');
  let adjective2 = prompt('Type and adjective');
  let name = prompt('Type a name');
  let animal = prompt('Type an animal');
  let herb = prompt('Type a kind of herb');
  let metal = prompt('Type a kind of metal');
  let animal2 = prompt('Type a cute animal');
  let number = prompt('Type a number');
  let tree = prompt('Type a kind of tree');
  let noise = prompt('Type a terrible noise');
  const output = '<p>There once was a very ' + adjective1 + ' old woman. Who lived in a '
  + adjective2 + ' house, deep in the woods. Her name was ' + name + ', and no one ever came to see her. Her only firend was her pet '
  + animal + '. Even though no one came to see her she could see them. In her cauldron she would boil '
  + herb + ' and ' + metal + ' shavings with the eye of ' + animal2 + '. In the water she would watch the villagers. As the years went by '
  + number + ' of children went missing.... People began to suspect that '
  + name + ' was a witch carrying their children away. If only she had had '
  + metal + ' the night they came she might have seen the villagers gathering '
  + tree + ' branches and piling them in the village center. People say she sounded like a '
  + noise + ' as she burned alive. </p>';
  $('.story').replaceWith(output);
}

$('.startGame').click(function() {
  startGame();
});

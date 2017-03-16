const getRandomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random()*16)];
  }
  return color;
}

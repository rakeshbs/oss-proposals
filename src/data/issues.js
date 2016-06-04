export default class Issues {
  data() {
    return(
      [
        {link: 'https://github.com/Sketch-Chest/chest/issues/5' },
        {link: 'https://github.com/JikkuJose/chest/issues/7' },
        {link: 'https://github.com/Rajes/chest/issues/87' },
        {link: 'https://github.com/Juil/chest/issues/70' },
        {link: 'https://github.com/Nikhi/chest/issues/37' },
      ]
    );
  }

  enumerate() {
    let o = this.data().map(function(item, index) {
      let words = item.link.replace('//', '').split('/');

      item.owner = words[1];
      item.project = words[2];
      item.number = words[4];
      item.id = index;

      return item;
    });

    return o;
  }
}

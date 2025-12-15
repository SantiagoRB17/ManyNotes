



export default class Note {
  
  //Constructor recibe objeto '{title: 'a', content: ''} parecido a json'
  constructor({title, content}) {
    this.title = title;
    this.content = content;
  }

  async getTitle() {
    return this.title;
  }

  getContent() {
    return this.content;
  }

}

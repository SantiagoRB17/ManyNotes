export default class Note {
  // Constructor recibe objeto '{title: 'a', content: ''} parecido a json'
  constructor ({ id, title, content, createdAt }) {
    this.id = id
    this.title = title
    this.content = content
    this.createdAt = createdAt
  }

  async getTitle () {
    return this.title
  }

  getContent () {
    return this.content
  }
}

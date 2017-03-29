export class BlogPost {
  id: string;
  lastChange: string;
  title: string;
  author: string;
  authorEmail: string;
  body: string;
  tags: number[];

  constructor(item){
    let { id, lastChange, title, author, authorEmail, tags, body } = item;

    this.id = id;
    this.lastChange = lastChange;
    this.title = title;
    this.author = author;
    this.authorEmail = authorEmail;
    this.body = body;
    this.tags = tags;
  }
}

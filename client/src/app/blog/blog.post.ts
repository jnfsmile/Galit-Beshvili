export class BlogPost {
  id: string;
  lastChange: string;
  title: string;
  author: string;
  authorEmail: string;
  body: string;
  tags: string[];

  constructor(item: any = { _id:null, lastChange:"", title:"", author:"גלית פרידמן", authorEmail:"galit@be-shvili.co.il", tags:[], body:"" }){
    let { _id, lastChange, title, author, authorEmail, tags, body } = item;

    this.id = _id;
    this.lastChange = lastChange;
    this.title = title;
    this.author = author;
    this.authorEmail = authorEmail;
    this.body = body;
    this.tags = tags;
  }
}

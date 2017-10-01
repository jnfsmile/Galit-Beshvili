export class Tag {
  id: string;
  name: string;

  constructor(item: any = {_id:null, name:""}) {
    let { _id, name } = item;
    this.id = _id;
    this.name = name;
  }
}

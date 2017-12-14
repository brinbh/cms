export class Document{
  id: string;
  name: string;
  description: string;
  url: string;
  children: string;

  constructor(id: string,
              name: string,
              description: string,
              url: string,
              children: string){
      this.id = id;
      this.name = name;
      this.description = description;
      this.url = url;
      this.children = children;
  }
}



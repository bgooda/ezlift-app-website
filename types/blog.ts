export interface Author {
  name: string;
  image: string;
  role: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: Author;
  content: string;
}
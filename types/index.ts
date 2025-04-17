// 核心成员
export interface IMember {
  name: string;
  role: string;
  avatar: string;
  description: string;
  social_links: string;
  avatar_links: string;
}

// 开源项目
export interface IProject {
  id: number;
  documentId: string;
  name: string;
  logo_link: string;
  description: string;
  tags: string[];
  url: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
// 上架作品
export interface IApplication {
  id: number;
  documentId: string;
  name: string;
  logo_link: string;
  description: string;
  tags: string[];
  url: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
// 技术文章
export interface IArticle {
  id: number;
  documentId: string;
  title: string;
  description: string;
  tags: string[];
  author: string;
  content?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

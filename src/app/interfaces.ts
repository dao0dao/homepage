export interface HtmlObjectData {
  [key: string]: string;
}

export interface Project {
  name: string;
  description: string;
  techStach: string;
  thumbnailUrl: string;
  liveLink: string;
  isActive: boolean;
}
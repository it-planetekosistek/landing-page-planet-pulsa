export interface ContentfulImage {
  sys: { id: string };
  fields: {
    file: {
      url: string;
      details: {
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
    title?: string;
  };
}

export interface artikelpulsa {
  sys: { id: string };
  fields: {
    title: string;
    slug: string;
    summary?: string;
    thumbnail?: ContentfulImage;
    publishDate?: string;
    category?: string;
    brand?: string;
    content?: any;
  };
}
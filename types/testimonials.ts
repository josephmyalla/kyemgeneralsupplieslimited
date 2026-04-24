export interface Testimonial {
  _id: string;
  author: string;
  excerpt: string | null;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  publishedAt: string;
  slug: {
    _type: string;
    current: string;
  };
  title: string;
}



// TypeScript interface for Book
type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: Date;
  description: string;
  price: number;
  totalSale: number;
  inStock: boolean;
  quantity: number;
  reviews: string[];
  img: string;
  sellerID: string;
}

export type SearchFieldType = {
  searchTerm?: string;
};

export default IBook ;

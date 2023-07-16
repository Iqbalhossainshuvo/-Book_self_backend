import { Request, Response } from "express";
import { booksService } from "./Books.service";
import pick from "./pick";
import { bookSearchKey } from "./book.const";

const createBooks = async (req: Request, res: Response) => {
  try {
    const { ...booksData } = req.body;
    console.log(booksData);
    const results = await booksService.createBooks(booksData);
    console.log(results);
    res.status(200).json({
      success: true,
      message: "Books created successfully",
      data: results,
    });
  } catch (error) {
    console.log("Error creating books", error);
  }
};
const topSellBook = async(req: Request<any, any, Record<string, any>>, res: Response<any, Record<string, any>>)=>{
  try {
   const results = await booksService.topSellBook();
   res.status(200).json({
     success: true,
     message: "top sell get book successfully",
     data: results,
   });
  } catch (error) {
   console.log('not found top sell book', error);
  }
 }

const getSingleBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    console.log(id);
    const results = await booksService.getSingleBook(id);
    console.log(results);
    res.status(200).json({
      success: true,
      message: "get book successfully",
      data: results,
    });
  } catch (error) {
    console.log("Error get books", error);
  }
};

const deleteBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    console.log(id);
    const results = await booksService.deleteBook(id);
    console.log(results);
    res.status(200).json({
      success: true,
      message: "delete book successfully",
      data: results,
    });
  } catch (error) {
    console.log("Error delete books", error);
  }
};

const updateBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const {...book} = req.body;
    console.log(id, book);
    const results = await booksService.updateBook(id, book);
    console.log(results);
    res.status(200).json({
      success: true,
      message: "update book successfully",
      data: results,
    });
  } catch (error) {
    console.log("Error update books", error);
  }
};
// const getAllBook = async (req: Request, res: Response) => {
//   try {
//     const filter = pick(req.query, bookSearchKey);
//     const results = await booksService.getAllBook(filter);
//     console.log(results);
//     res.status(200).json({
//       success: true,
//       message: "get all book successfully",
//       data: results,
//     });
//   } catch (error) {
//     console.log("Error all books", error);
//   }
// };

// const getAllBook = async (req: Request, res: Response) => {
//   try {
//     const filter = pick(req.query, bookSearchKey);
//     const results = await booksService.getAllBook(filter); // Assuming this function is defined elsewhere
//     console.log(results);
//     res.status(200).json({
//       success: true,
//       message: "get all book successfully",
//       data: results,
//     });
//   } catch (error) {
//     console.log("Error all books", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to retrieve books",
//     });
//   }
// };
const getAllBook = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm || ''; // Extract the searchTerm query parameter or set it to an empty string if not provided
    console.log(searchTerm);
    const filter = pick(req.query, bookSearchKey);
    console.log(filter);
    filter.searchTerm = searchTerm; // Add the searchTerm to the filter
    const results = await booksService.getAllBook(filter); // Assuming this function is defined elsewhere
    console.log(results);
    res.status(200).json({
      success: true,
      message: "get all book successfully",
      data: results,
    });
  } catch (error) {
    console.log("Error all books", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve books",
    });
  }
};





export const createBooksController = {
  createBooks,
  getSingleBook,
  deleteBook,
  updateBook,
  getAllBook,
  topSellBook
};



import IBook, { SearchFieldType } from "./Books.interface";
import { BookModel } from "./Books.modal"
import { bookSearchKey } from "./book.const";



const createBooks = async(books:IBook)=>{
    const data = await BookModel.create(books)
    console.log(data);
    return data;
}

const getSingleBook = async(id:string)=>{
    const data = await BookModel.findById(id);
    return data;
}

const deleteBook = async(id:string)=>{
    const data = await BookModel.findByIdAndDelete(id);
    return data;
}

const updateBook = async (id:string, book:IBook)=>{
    const data= await BookModel.findOneAndUpdate({_id:id},book);
    return data;
}
const getAllBook = async(filter:SearchFieldType)=>{

    const { searchTerm, ...filterData } = filter;
  
    const andCondition = [];
  
    // search term
    if (searchTerm) {
      andCondition.push({
        $or: bookSearchKey.map(field => ({
          [field]: { $regex: searchTerm, $options: 'i' },
        })),
      });
    }
  
    // extract matching
    if (Object.keys(filterData).length) {
      andCondition.push({
        $and: Object.entries(filterData).map(([field, value]) => ({
          [field]: value,
        })),
      });
    }
  
    // solve searching problem
    const whereCondition = andCondition.length > 0 ? { $and: andCondition } : {};


    const data= await BookModel.find({whereCondition: whereCondition})
    console.log(data);
    const total = await BookModel.countDocuments()
    return {
        meta: {
          total,
        },
        data: data,
      };;
}

  


const topSellBook = async()=>{
    const data = await BookModel.find().sort('-totalSale').limit(10).exec()
    console.log(data);
    const total = await BookModel.countDocuments()
    return {
        data,
        total
    };
}


export const booksService ={
    createBooks,
    getSingleBook,
    deleteBook,
    updateBook,
    getAllBook,
    topSellBook
}



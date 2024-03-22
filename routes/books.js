const express = require("express")

const{books} = require("../data/books.json")
const{users} = require("../data/users.json")
const{route} = require("./books")

const{UserModel,BookModel} = require("../models")
const { getAllBooks,getSingleBookbyId,addNewBook, updateBookById} = require("../controllers/book-controller")

const router = express.Router()

/**
 * ROUTE: /books
 * Method: GET
 * Description: Get all books
 * Access: Public
 * Parameter:None
 **/

router.get("/",getAllBooks)

/**
 * ROUTE: /books/:id
 * Method: GET
 * Description: Get a book by their Id
 * Access: Public
 * Parameter:Id
 **/

router.get("/:id",getSingleBookbyId)
/**
 * ROUTE: /books/issued/by-user
 * Method: GET
 * Description: Get all the books issued
 * Access: Public
 * Parameter:Id
 **/
router.get("/issued/by-user",getSingleBookbyId)

/**
 * ROUTE: /books
 * Method: POST
 * Description: Create a new Book
 * Access: Public
 * Parameter:None
 * Data:author,name,genre,price,publisher,id
 **/

router.post("/",addNewBook)
/**
 * ROUTE: /books/:id
 * Method: PUT
 * Description: Update a Book by their Id
 * Access: Public
 * Parameter:None
 * Data:author,name,genre,price,publisher,id
 **/
router.put("/:id",updateBookById)
module.exports = router
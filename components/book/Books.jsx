import React from "react";

function BooksPage() {
  const books = [
    { name: "A thousand splendid suns", author: "Khaled Hosseini" },
    { name: "Atomic Habits", author: "James Clear" },
    { name: "Object Oriented Programming in C++", author: "David Jons" },
    {
      name: "We shall never see again how the killed the UI/UX of Google on an awful day",
      author: "David John Miller Lorem",
    },
    { name: "A thousand splendid suns", author: "Khaled Hosseini" },
    { name: "Atomic Habits", author: "James Clear" },
    { name: "Object Oriented Programming in C++", author: "David Jons" },
    {
      name: "We shall never see again how the killed the UI/UX of Google on an awful day",
      author: "David John Miller Lorem",
    },
    { name: "A thousand splendid suns", author: "Khaled Hosseini" },
    { name: "Atomic Habits", author: "James Clear" },
    { name: "Object Oriented Programming in C++", author: "David Jons" },
    {
      name: "We shall never see again how the killed the UI/UX of Google on an awful day",
      author: "David John Miller Lorem",
    },
    {
      name: "The Story",
      author: "nabeel",
    },
  ];
  return (
    <div className="flex  gap-28 flex-wrap justify-center ">
      {books.map((book, index) => {
        return (
          <div
            key={index}
            className="flex flex-col w-64 h-96 bg-[#8dd384] rounded-tl-lg rounded-bl-lg rounded-tr-2xl rounded-br-2xl x items-center  justify-center cursor-pointer shadow-[0px_0px_15px_2px_#8dd384] gap-12"
          >
            <h1 className="font-bold text-3xl h-[65%] w-[80%] text-white overflow-hidden mx-auto leading-snug line-clamp-6">
              {book.name}
            </h1>
            <p className="text-[#275121] font-semibold"> {book.author}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BooksPage;

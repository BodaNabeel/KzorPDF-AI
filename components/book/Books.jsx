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
            className="flex flex-col w-64 h-96 bg-gradient-to-r from-primary-700 to-primary-300 rounded-tl-lg rounded-bl-lg rounded-tr-[2.5rem] rounded-br-[2.5rem] x items-center  justify-center cursor-pointer  gap-12"
          >
            <h1 className="font-bold text-3xl h-[65%] w-[80%] text-white overflow-hidden mx-auto leading-snug line-clamp-6">
              {book.name}
            </h1>
            <p className="text-[#111c31] font-semibold"> {book.author}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BooksPage;

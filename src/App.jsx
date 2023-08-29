import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

const Python = [
  "Python",
  "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",
  "https://pythonbooks.org/free-books/"
];

const Java = [
  "Java",
  "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
  "https://gfgc.kar.nic.in/sirmv-science/GenericDocHandler/138-a2973dc6-c024-4d81-be6d-5c3344f232ce.pdf"
];

const C = [
  "C",
  "C is a general-purpose programming language created by Dennis Ritchie at  the Bell Laboratories in 1972. It is a very popular language. C is strongly associated with UNIX.",
  "https://www.e-booksdirectory.com/listing.php?category=371"
];

const Cpp = [
  "Cpp",
  "C++ is one of the world's most popular programming languages. It can be found in today's operating systems and Graphical User Interfaces.",
  "https://riptutorial.com/ebook/cplusplus"
];

function App() {
  return (
    <div>
      <Header />
      <Note NObject={Python} />
      <Note NObject={Java} />
      <Note NObject={C} />
      <Note NObject={Cpp} />
      <Footer />
    </div>
  );
}

export default App;

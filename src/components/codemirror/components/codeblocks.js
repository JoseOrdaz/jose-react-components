// eslint-disable-next-line import/no-anonymous-default-export
export default {
	bash: `echo Hello World`,
	c: `int main(void)
{
  puts("Hello World!");
  return EXIT_SUCCESS;
}
`,
	clojure: `(defn hello []
  (println "Hello world!"))
(hello)
`,
	cpp: `#include <iostream.h>
main() {
  cout << "Hello World!" << endl;
  return 0;
}`,
	csharp: `class HelloWorld {
 static void Main() {
  System.Console.WriteLine("Hello, World!");
 }
}`,
	dart: `main() {
  print("Hello world!");
}
`,
	elixir: `defmodule Greetings do
  def hello_world, do:
    hello("world" )


  defp  hello(recipient) do
  IO.puts(
  "hello #{recipient}"
  )
  end
end`,
	elm: `import Text
main = Text.plainText "Hello, world!"
`,
	erlang: `
-module(hello).
-export([hello/0]).
hello() ->
io:format("Hello World!~n", []).
`,
	fsharp: `printf "Hello World!\n"`,
	graphql: `query FirstSevenStarShips {
  allStarships(first: 7) {
    edges {
      node {
        id
        name
        model
        costInCredits
      }
    }
}
`,
	go: `package main
import "fmt"
func main() {
  fmt.Printf("Hello World\n")
}
`,
	groovy: `println "Hello World"`,
	haskell: `main = putStrLn "Hello World"`,
	html: `<html>
<!-- Hello World in HTML -->
<head>
<title>Hello World!</title>
</head>
<body>
Hello World!
</body>
</html>
`,
	java: `class HelloWorld {
  static public void main( String args[] ) {
    System.out.println( "Hello World!" );
  }
}`,
	javascript: `var sys = require("sys");
sys.puts("Hello World");
`,
	jsx: `class HelloMessage extends React.Component {
  handlePress = () => {
    alert('Hello')
  }
  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>
        <button onClick={this.handlePress}>Say Hello</button>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  mountNode
);`,
	julia: `println("Hello, World!")

  for i=1:9001
    if i > 9000
      println("It's over 9000!!")
    end
  end
  # this will eventually print "It's over 9000!" `,
	kotlin: `fun main(args : Array<String>) {
  println("Hello, world!")
}
`,
	lisp: `(defun hello-world()
"Display the string hello world."
  (interactive)
  (message "hello world"))
`,
	makefile: `all:
  @echo "Hello world!"
`,
	matlab: `disp("Hello World");`,
	objectivec: `#include <stdio.h>
#include <objpak.h>
int
main (int argc, char **argv)
{
  id set =[Set new];
  argv++;
  while (--argc)
  [set add: [String str:*argv++]];
  [set
   do
  :{
    :each | printf ("hello, %s!\n",[each str]);
   }
  ];
  return 0;
  }
`,
	ocaml: `print_string "Hello World!\n";;`,
	php: `<?php
  echo "Hello World!";
?>
`,
	python: `# Hello world in Python 2
print "Hello World"

# Hello world in Python 3 (aka Python 3000)
print("Hello World")
`,
	r: `cat("Hello world\n")`,
	ruby: `puts "Hello World!"`,
	rust: `fn main() {
  println!("Hello World!");
}
`,
	scala: `object HelloWorld extends App {
  println("Hello world!")
}
`,
	sql: `SELECT "Hello World";`,
	swift: `println("Hello, world!")`,
	tsx: `import * as React from "react";

export class HelloWorld extends React.Component<any, any> {
    render() {
        return <div>Hello world!It's from Helloword Component.</div>;
    }
}`,
	typescript: `var exclamation: string = "Hello";
var noun: string = "World";
console.log(exclamation + noun);
`,
carrusel: `import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

function Slider() {
  const imagenes = ["/foto.jpg", "/foto1.jpg", "/foto2.jpg"];

  const [imagenActual, setImagenActual] = useState(0);
  const cantidad = imagenes?.length;

  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        siguienteImagen();
      }, 3500);
  });
  // console.log(imagenActual, cantidad)

  if (!Array.isArray(imagenes) || cantidad === 0) return;

  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };

  return (
    <>
      <div className="relative transform overflow-hidden min-w-xl rounded-lg bg-white text-left shadow-xl border-[#7843E6] border p-12 transition-all sm:w-full">
        <div className="mx-auto max-w-xl text-center py-12">
          <h2 className="text-4xl font-bold sm:text-5xl">Carrusel React</h2>

          <p className="mt-4 text-gray-300">
            Un componente hecho en react para un carrusel de imagenes.
          </p>
        </div>
        <div
          className="carrusel"
          onMouseEnter={() => {
            setAutoPlay(false);
            clearTimeout(timeOut);
          }}
          onMouseLeave={() => {
            setAutoPlay(true);
          }}
        >
          {imagenes.map((imagen, index) => {
            return (
              <div
                key={index}
                className={imagenActual === index ? "slide active" : "slide"}
              >
                {imagenActual === index && (
                  <Image
                    className="rounded-xl"
                    key={index}
                    width={900}
                    height={900}
                    src={imagen}
                    alt="imagen"
                  />
                )}
              </div>
            );
          })}
          <button
            className="absolute left-8 top-52  w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
            onClick={anteriorImagen}
          >
            <svg
              className=" w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            className="absolute right-8 top-52 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200"
            onClick={siguienteImagen}
          >
            <svg
              className=" w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>

          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button
              className={
                imagenActual === 0
                  ? "w-3 h-3 rounded-full shadow-md bg-[#7843E6] hover:bg-gray-200"
                  : "w-3 h-3 rounded-full shadow-md bg-gray-100 hover:bg-gray-200"
              }
              onClick={() => setImagenActual(0)}
            ></button>
            <button
              className={
                imagenActual === 1
                  ? "w-3 h-3 rounded-full shadow-md bg-[#7843E6] hover:bg-gray-200"
                  : "w-3 h-3 rounded-full shadow-md bg-gray-100 hover:bg-gray-200"
              }
              onClick={() => setImagenActual(1)}
            ></button>
            <button
              className={
                imagenActual === 2
                  ? "w-3 h-3 rounded-full shadow-md bg-[#7843E6] hover:bg-gray-200"
                  : "w-3 h-3 rounded-full shadow-md bg-gray-100 hover:bg-gray-200"
              }
              onClick={() => setImagenActual(2)}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
`
};

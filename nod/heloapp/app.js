//Первое приложение на Node.js
// const http = require("http");
// http
//   .createServer(function (request, response) {
//     response.end("Hello NodeJS!");
//   })
//   .listen(3000, "127.0.0.1", function () {
//     console.log("Сервер начал прослушивание запросов на порту 3000");
//   });



//Модули
// const os = require("os");
// const greeting = require("./greeting");
// let userName = os.userInfo().username;
 
 
// console.log(`Дата запроса: ${greeting.date}`);
// console.log(greeting.getMessage(userName));
// const User = require("./user.js");
 
// let ega = new User("Ega", 19);
// ega.sayHi();



//Работа с модулями
// var greeting1 = require("./greeting.js");
// console.log(`Hello ${greeting1.name}`); //Hello Alice
 
// var greeting2 = require("./greeting.js");
// greeting2.name= "Bob";
 
// console.log(`Hello ${greeting2.name}`); //Hello Bob
// // greeting1.name тоже изменилось
// console.log(`Hello ${greeting1.name}`); //Hello Bob
// const welcome = require("./welcome");
 
// welcome.getMorningMessage();
// welcome.getEveningMessage();



//Объект global и глобальные переменные
// const greeting = require("./greeting");
 
// global.name = "Ega";
 
// global.console.log(date);
// console.log(greeting.getMessage());



//Передача параметров приложению
// let nodePath = process.argv[0];
// let appPath = process.argv[1];
// let name = process.argv[2];
// let age = process.argv[3];
 
// console.log("nodePath: " + nodePath);
// console.log("appPath: " + appPath);
// console.log();
// console.log("name: " + name);
// console.log("age: " + age);



//NPM. Package.json. Установка модулей. Определение команд
// // получаем модуль Express
// const express = require("express");
// // создаем приложение
// const app = express();
 
// // устанавливаем обработчик для маршрута "/"
// app.get("/", function(request, response){
 
//     response.end("Hello from Express!");
// });
// // начинаем прослушивание подключений на 3000 порту
// app.listen(3000);
// let name = process.argv[2];
// let age = process.argv[3];
 
// console.log("name: " + name);
// console.log("age: " + age);



//Nodemon
// const http = require("http");
 
// let message = "Hello World!";
// http.createServer(function(request,response){
     
//     console.log(message);
//     response.end(message);
     
// }).listen(3000, "127.0.0.1",()=>{
//     console.log("Сервер начал прослушивание запросов");
// });



//Асинхронность в Node.js
// function displaySync(callback){
//     callback();
// }
 
// console.log("Начало работы программы");
 
// setTimeout(function(){
         
//         console.log("timeout 500");
// }, 500);
 
// setTimeout(function(){
         
//         console.log("timeout 100");
// }, 100);
 
// displaySync(function(){console.log("without timeout")});
// console.log("Завершение работы программы");



//Работа с файлами
// const fs = require("fs");
 
// fs.appendFileSync("hello.txt", "Привет ми ми ми!");
 
// fs.appendFile("hello.txt", "Привет МИД!", function(error){
//     if(error) throw error; // если возникла ошибка
                 
//     console.log("Запись файла завершена. Содержимое файла:");
//     let data = fs.readFileSync("hello.txt", "utf8");
//     console.log(data);  // выводим считанные данные
// });



//События
// const EventEmitter = require("events");
  
// let eventName = "greet";
 
// class User extends EventEmitter {
//     sayHi(data) {
//         this.emit(eventName, data);
//     }
// }
 
// let user = new User();
// // добавляем к объекту user обработку события "greet"
// user.on(eventName, function(data){
//     console.log(data);
// });
  
// user.sayHi("Мне нужна твоя одежда...");



//Stream
// const fs = require("fs");
 
// let writeableStream = fs.createWriteStream("hello.txt");
// writeableStream.write("Привет мир!");
// writeableStream.write("Продолжение записи \n");
// writeableStream.end("Завершение записи");
// let readableStream = fs.createReadStream("hello.txt", "utf8");
 
// readableStream.on("data", function(chunk){ 
//     console.log(chunk);
// });






//Pipe
// const fs = require("fs");
// const zlib = require("zlib");
  
// let readableStream = fs.createReadStream("hello.txt", "utf8");
  
// let writeableStream = fs.createWriteStream("hello.txt.gz");
  
// let gzip = zlib.createGzip();
  
// readableStream.pipe(gzip).pipe(writeableStream);



//Сервер
// const http = require("http");
  
// http.createServer(function(request, response){
     
//     response.setHeader("Content-Type", "text/html; charset=utf-8;");
     
//     if(request.url === "/"){
//         response.statusCode = 302; // временная переадресация
//         // на адрес localhost:3000/newpage
//         response.setHeader("Location", "/newpage");
//     }
//     else if(request.url == "/newpage"){
//         response.write("New address");
//     }
//     else{
//         response.statusCode = 404; // адрес не найден
//         response.write("Not Found");
//     }
//     response.end();
// }).listen(3000);



//Отправка файлов
// const http = require("http");
// const fs = require("fs");
  
// http.createServer(function(request, response){
      
//     console.log(`Запрошенный адрес: ${request.url}`);
//     // получаем путь после слеша
//     const filePath = request.url.substr(1);
//     fs.readFile(filePath, function(error, data){
              
//         if(error){
                  
//             response.statusCode = 404;
//             response.end("Resourse not found!");
//         }   
//         else{
//             response.end(data);
//         }
//     });
// }).listen(3000, function(){
//     console.log("Server started at 3000");
// });



//Получение данных от клиента
// const http = require("http");
// const fs = require("fs");
 
// http.createServer(async (request, response) => {
      
//      if (request.url === "/user") {
         
//         const buffers = []; // буфер для получаемых данных
 
//         for await (const chunk of request) {
//             buffers.push(chunk);        // добавляем в буфер все полученные данные
//         }
 
//         const user = JSON.parse(Buffer.concat(buffers).toString());
//         console.log(user.name,"-", user.age);
//         response.end("Данные успешно получены");
//     }
//     else{
//         fs.readFile("index.html", (error, data) => response.end(data));
//     }
// }).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));



//Шаблоны
// const http = require("http");
// const fs = require("fs");
 
// http.createServer(function(request, response){
     
//     fs.readFile("index.html", "utf8", function(error, data){
                 
//         let message = "Изучаем Node.js"; 
//         let header = "Главная страница";
//         data = data.replace("{header}", header).replace("{message}", message);
//         response.end(data);
//     })
// }).listen(3000);
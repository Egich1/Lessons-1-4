//Express
// const express = require("express");
 
// const app = express();
// app.get("/", function(request, response){
     
//     response.send("<h1>Главная страница</h1>");
// });
// app.get("/about", function(request, response){
     
//     response.send("<h1>О сайте</h1>");
// });
// app.get("/contact", function(request, response){
     
//     response.send("<h1>Контакты</h1>");
// });
// app.listen(3000);



//Конвейер обработки запроса и middleware
// const express = require("express");
// const fs = require("fs");
 
// const app = express();
// app.use(function(request, response, next){
     
//     let now = new Date();
//     let hour = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     let data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
//     console.log(data);
//     fs.appendFile("server.log", data + "\n", function(){});
//     next();
// });
 
// app.get("/", function(request, response){
//     response.send("Hello");
// });
// app.listen(3000);



//Отправка ответа
// const express = require("express");
// const app = express();
 
// app.use("/home/foo/bar",function (request, response) {
//   response.status(404).send(`Ресурс не найден`);
// });
 
// app.listen(3000);



//Статические файлы
// const express = require("express");
 
// const app = express();
 
// app.use("/static", express.static(__dirname + "/public"));
 
// app.use("/", function(request, response){
     
//     response.send("<h1>Главная страница</h1>");
// });
 
// app.listen(3000);



//Маршрутизация
// const express = require("express");
// const app = express();
 
// // обработка запроса по адресу /about
// app.get("/about", function(request, response){
     
//     response.send("<h1>О сайте</h1>");
// });
 
// // обработка запроса по адресу /contact
// app.use("/contact", function(request, response){
     
//     response.send("<h1>Контакты</h1>");
// });
 
// // обработка запроса к корню веб-сайта
// app.get("/", function(request, response){
     
//     response.send("<h1>Главная страница</h1>");
// });
// app.get("/book(.html)?", function (request, response) {
//     response.send(request.url)
// });
// app.listen(3000);



//Переадресация
// const express = require("express");
// const app = express();
 
// app.use("/home/bar",function (request, response) {
//   response.redirect("/about")
// });
// app.use("/about", function (request, response) {
//   response.send("<h1>About</h1>");
// });
 
// app.listen(3000);



//Передача данных приложению. Параметры строки запроса
// const express = require("express");
  
// const app = express();
 
// app.use("/about", function(request, response){
      
//     console.log(request.query);
//     let id = request.query.user.id;
//     let name = request.query.user.name;
     
//     response.send("<h3>id:" + id + "<br>name: " + name +"</h3>");
// });
 
// app.listen(3000);



//POST-запросы и отправка форм
// const express = require("express");
   
// const app = express();
   
// // создаем парсер для данных application/x-www-form-urlencoded
// const urlencodedParser = express.urlencoded({extended: false});
  
// app.get("/", function (request, response) {
//     response.sendFile(__dirname + "/index.html");
// });
// app.post("/", urlencodedParser, function (request, response) {
//     if(!request.body) return response.sendStatus(400);
//     console.log(request.body);
//     response.send(`${request.body.userName} - ${request.body.userAge}`);
// });
   
// app.listen(3000, ()=>console.log("Сервер запущен..."));



//Параметры маршрута
// const express = require("express");
// const app = express();
 
// app.get("/book/:pageName.:pageExt", function (request, response) {
//     let pageName = request.params["pageName"];
//     let pageExt = request.params["pageExt"];
//     response.send(`Запрошенный файл: ${pageName}.${pageExt}`);
// });
 
// app.listen(3000);



//Router
// const express = require("express");
// const app = express();
 
// // определяем Router
// const productRouter = express.Router();
 
// // определяем маршруты и их обработчики внутри роутера
// productRouter.use("/create", function(request, response){
//   response.send("Добавление товара");
// });
// productRouter.use("/:id", function(request, response){
//   response.send(`Товар ${request.params.id}`);
// });
// productRouter.use("/", function(request, response){
//   response.send("Список товаров");
// });
// // сопотавляем роутер с конечной точкой "/products"
// app.use("/products", productRouter);
 
// app.use("/about", function (request, response) {
//   response.send("О сайте");
// });
 
// app.use("/", function (request, response) {
//   response.send("Главная страница");
// });
// app.listen(3000);



//JSON и AJAX
// const express = require("express");
  
// const app = express();
// // создаем парсер для данных в формате json
// const jsonParser = express.json();
  
// app.post("/user", jsonParser, function (request, response) {
//     console.log(request.body);
//     if(!request.body) return response.sendStatus(400);
     
//     response.json(request.body); // отправляем пришедший ответ обратно
// });
  
// app.get("/", function(request, response){
      
//     response.sendFile(__dirname + "/index.html");
// });
  
// app.listen(3000);



//Представления и движок представлений Handlebars
// const express = require("express");
  
// const app = express();
  
// app.set("view engine", "hbs");
// app.set("views", "templates"); // установка пути к представлениям
 
// app.use("/contact", function(request, response){
      
//     response.render("contact");
// }); 
 
// app.listen(3000);



//Частичные представления в Handlebars
// const express = require("express");
// const hbs = require("hbs");
// const app = express();
  
// app.set("view engine", "hbs");
// hbs.registerPartials(__dirname + "/views/partials");
 
// app.use("/contact", function(request, response){
      
//     response.render("contact", {
//         title: "Мои контакты",
//         email: "gavgav@mycorp.com",
//         phone: "+1234567890"
//     });
// }); 
 
// app.use("/", function(request, response){
      
//     response.render("home.hbs");
// });
// app.listen(3000);



//Layout в Handlebars
// const express = require("express");
// const expressHbs = require("express-handlebars");
// const hbs = require("hbs");
// const app = express();
   
// // устанавливаем настройки для файлов layout
// app.engine("hbs", expressHbs.engine(
//     {
//         layoutsDir: "views/layouts", 
//         defaultLayout: "layout",
//         extname: "hbs"
//     }
// ))
// app.set("view engine", "hbs");
// hbs.registerPartials(__dirname + "/views/partials");
  
// app.use("/contact", function(_, response){
       
//     response.render("contact", {
//         title: "Мои контакты",
//         email: "ega@mycorp.com",
//         phone: "+1234567890"
//     });
// }); 
  
// app.use("/", function(_, response){
       
//     response.render("home.hbs");
// });
// app.listen(3000);



//Хелперы в Handlebars
// const express = require("express");
// const hbs = require("hbs");
  
// const app = express();
  
// hbs.registerHelper("getTime", function(){
      
//     const myDate = new Date();
//     const hour = myDate.getHours();
//     let minute = myDate.getMinutes();
//     let second = myDate.getSeconds();
//     if (minute < 10) {
//         minute = "0" + minute;
//     }
//     if (second < 10) {
//         second = "0" + second;
//     }
//     return `Текущее время: ${hour}:${minute}:${second}`;
// });
  
// hbs.registerHelper("createStringList", function(array){
      
//     let result="";
//     for(let i=0; i<array.length; i++){
//         result +=`<li>${array[i]}</li>`;
//     }
//     return new hbs.SafeString(`<ul>${result}</ul>`);
// });
  
  
// app.set("view engine", "hbs");
  
// app.get("/", function(_, response){
      
//     response.render("home.hbs", { 
//         fruit: [ "apple", "lemon", "banana", "grape"]
//     });
// });
// app.listen(3000);



//Движок EJS
// const express = require("express");
 
// const app = express();
 
// app.set("view engine", "ejs");
 
// app.use("/contact", function(request, response){
     
//     response.render("contact", {
//         title: "Мои контакты",
//         emailsVisible: true,
//         emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
//         phone: "+1234567890"
//     });
// });
// app.use("/", function(request, response){
     
//     response.send("Главная страница");
// });
// app.listen(3000);



//Движок Pug
// const express = require("express");
  
// const app = express();
  
// app.set("view engine", "pug");
 
// app.use("/contact", function(request, response){
      
//     response.render("contact", {
//         title: "Мои контакты",
//         emailsVisible: true,
//         emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
//         phone: "+1234567890"
//     });
// }); 
 
// app.use("/", function(request, response){
      
//     response.send("Главная страница");
// });
// app.listen(3000);



//Частичные представления и layout в Pug
// const express = require("express");
  
// const app = express();
  
// app.set("view engine", "pug");
 
// app.use("/contact", function(request, response){
      
//     response.render("contact", {
//         title: "Мои контакты",
//         emailsVisible: true,
//         emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
//         phone: "+1234567890"
//     });
// }); 
 
// app.use("/", function(request, response){
      
//     response.send("Главная страница");
// });
// app.listen(3000);



//Создание API

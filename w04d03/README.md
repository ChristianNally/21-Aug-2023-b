# W04D03 - AJAX

### To Do
- [x] AJAX
- [x] XMLHttpRequest (XHR) Object
- [x] Use AJAX to retrieve data from a server
- [x] Use jQuery to update the DOM with the retrieved data
- [x] Use AJAX to submit data to a server
- [x] All without refreshing the browser

### AJAX
* Asynchronous Javascript and XML
* XML => eXtensible Markup Language
* JS is going to make our HTTP requests for us
* created by Microsoft

```xml
<user>
  <username>alice</username>
  <password>1234</password>
</user>
```

```json
{
  "username": "alice",
  "password": "1234"
}
```

```js
$.ajax({
  method: 'POST',
  url: '/tweets',
  success: (data) => {},
  error: (err) => {}
});

$.ajax({
  method: 'POST',
  url: '/tweets',
}).then((data) => {})
```

http://localhost:3003/?name=Cheeseburger&tagline=burger&price=1.99&calories=500

name=cheeseburger&tagline=too%20tasty&price=10.99&calories=1000

cheese++burger


pessimistic
optimistic







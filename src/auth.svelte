<script>

</script>

<main>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width,initial-scale=1'>
    
        <title>Svelte app</title>
    
        <link rel='icon' type='image/png' href='/favicon.png'>
        <link rel='stylesheet' href='global.css'>
    </head>
    
    <body>
        <body>
            <form>
              <input checked="" id="signin" name="action" type="radio" value="signin">
              <label for="signin">Sign in</label>
              <input id="signup" name="action" type="radio" value="signup">
              <label for="signup">Sign up</label>
              <div id="wrapper">
                <div id="arrow"></div>
                <input id="email" placeholder="User Name" type="text">
                <input id="pass" placeholder="Password" type="password">
                <input id="repass" placeholder="Repeat password" type="password">
              </div>
              <button type="submit">
                <span>
                <br>
                  Sign in
                  <br>
                  Sign up
                </span>
              </button>
            </form>
            </body>
    </body>
    </html>    
</main>
<style>
    html, body {
	position: relative;
	width: 100%;
	height: 100%;
}

body {
	background: #e8e3d4;
	color: #333;
	margin: 0;
	padding: 8px;
	box-sizing: border-box;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

a {
	color: rgb(0,100,200);
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}

a:visited {
	color: rgb(0,80,160);
}

label {
	display: block;
}

input, button, select, textarea {
	font-family: inherit;
	font-size: inherit;
	-webkit-padding: 0.4em 0;
	padding: 0.4em;
	margin: 0 0 0.5em 0;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 2px;
}

input:disabled {
	color: #ccc;
}

button {
	color: #333;
	background-color: #f4f4f4;
	outline: none;
}

button:disabled {
	color: #999;
}

button:not(:disabled):active {
	background-color: #ddd;
}

button:focus {
	border-color: #666;
}

#wrapper, label, #arrow, button span { transition: all .5s cubic-bezier(.6,0,.4,1); }

#wrapper { overflow: hidden; }

#signin:checked ~ #wrapper { height: 106px; }
#signin:checked ~ #wrapper #arrow { left: 32px; }
#signin:checked ~ button span { transform: translate3d(0,-93px,0); }

#signup:checked ~ #wrapper { height: 155px; }
#signup:checked ~ #wrapper #arrow { left: 137px; }
#signup:checked ~ button span { transform: translate3d(0,-164px,0); }


form {
  width: 300px;
  height: 170px;
  margin: -185px -155px;
  position: absolute;
  left: 50%;
  top: 50%;
}

input[type=radio] { display: none; }

label {
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  opacity: .5;
  margin-bottom: 10px;
  margin-left: 10px;
  text-transform: uppercase;
}

label:hover {
  transition: all .3s cubic-bezier(.6,0,.4,1);
  opacity: 1;
}
label[for="signin"] { margin-right: 20px; }
label[for="reset"] { float: right; }
input[type=radio]:checked + label { opacity: 1; }

input[type=text],
input[type=password] {
  background: #fff;
  border: 0;
  outline: 0 !important;
  border-radius: 8px;
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
  height: 45px;
  width: 99.5%;
  margin-bottom: 3px;
  opacity: 1;
  text-indent: 8px;
  transition: all .2s ease-in-out;
}
button {
  background: #dec64e;
  border: 0;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  height: 45px;
  width: 100%;
  margin-bottom: 10px;
  overflow: hidden;
  transition: all .3s cubic-bezier(.6,0,.4,1);
}

button span {
  display: block;
  line-height: 72px;
  position: relative;
  top: -2px;
  transform: translate3d(0,0,0);
}
button:hover {
  background: #c6a237;
}

#arrow {
  height: 0;
  width: 0;
  border-bottom: 10px solid rgb(255, 255, 255);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  position: relative;
  left: 32px;
}
</style>
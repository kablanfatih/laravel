<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Bigibun') }}</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous">

</head>

<body>
<div class="container">
    <div class="card card-body">
        <h3>Login</h3>
        <p class="lead">
            Kullanıcı Bilgilerini Giriniz
        </p>
        <form id="form">
            <input type="text" name="email" id="email" class="form-control mb-3" placeholder="Email">
            <input type="text" name="password" id="password" class="form-control" placeholder="Password">
            <br>
            <button type="button" id="login-button" class="btn btn-dark">Login</button>
        </form>
        <br><br>


    </div>
    <br>
    <div id="profile">

    </div>
    <div class="container">
        <button id="clear-user" class="btn btn-dark" style="display: none">Clean</button>
    </div>

</div>
<script src="{{asset('js/custom/login.js')}}"></script>
<script src="{{asset('js/custom/ui.js')}}"></script>
<script src="{{asset('js/custom/ingredient.js')}}"></script>
<script src="{{asset('js/custom/main.js')}}"></script>


<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
</body>
</html>

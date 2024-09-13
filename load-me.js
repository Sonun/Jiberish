setInterval(function() {
  const x = "<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Login - Windows</title>
  <style>
    /* ... vorhandene Styles hier ... */
    .warning-message {
      color: red;
      margin-top: 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="login-container">
    <div class="login-header">
      <img src="windows-logo.png" alt="Windows Logo" />
      <h2>Anmeldung</h2>
    </div>
    <form class="login-form">
      <input type="text" placeholder="Benutzername" required autofocus>
      <input type="password" placeholder="Passwort" required>
      <button type="submit" class="login-form-button">Anmelden</button>
    </form>
    <div class="warning-message">
      <h2>Das hätte nicht klappen sollen</h2>
      <p>Aus irgendeinem Grund kann ich sehr einfach JavaScript Scripts in das KI-Portal einbinden. Ich denke es ist klar, warum das ein Sicherheitsrisiko ist. Eine Mail zu einem malicious Chat sieht nicht gefährlich aus, könnte aber große Gefahr mit sich tragen.</p>
    </div>
  </div>
</body>
</html>";
  document.querySelector("body").innerHTML = x;
}, 1000);

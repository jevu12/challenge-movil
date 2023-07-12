Feature: iniciar sesión en la app de Gmail con la cuenta de Google
  como usuario registrado
  quiero iniciar sesión en la app de Gmail
  para poder acceder a mi cuenta de correo electrónico

  Scenario: iniciar sesión con cuenta de Google
    Given que estoy en la pantalla de inicio de sesión
    When ingreso mi cuenta de Google
    When presiono el botón de siguiente
    When ingreso mi contraseña
    When presiono el botón de iniciar sesión
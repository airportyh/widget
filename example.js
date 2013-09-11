

loginForm = Panel(
  Form(
    [Label("Username"), TextField()],
    [Label("Password"), PasswordField()],
    [Label(''), ToggleButton("Go")]
  )
)

registerForm = Panel(
  Form(
    [Label("Name"), TextField()],
    [Label("Password"), PasswordField()],
    [Label("Password confirm"), PasswordField()],
    [Label(''), ToggleButton("Submit")]
  )
)

tabbedPanel = TabbedPanel(
  [Label('Login'), loginForm],
  [Label('Register'), registerForm]
)

var styleSheet = AppStyleSheet()
Widget.walk(tabbedPanel, function(w){
  if (w.styles){
    for (var i = 0; i < w.styles.length; i++){
      styleSheet.addRule(w.styles[i])
    }
  }
})

styleSheet.install()

document.body.appendChild(tabbedPanel.element)
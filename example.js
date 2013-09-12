

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



twitter = Panel(
  Flow(
    Stack(
      Stack(
        Label(Observable(user, 'name')),
        Label('View my profile page')
      ),
      Flow(
        Stack(Label('1,878'), Label('TWEETS')),
        Stack(Label('209'), Label('FOLLOWING')),
        Stack(Label('789'), Label('FOLLOWERS'))
      ),
      TextField()
    ),
    Stack(
      Label('Tweets'),
      Label('Aaron Patterson @tenderlove'),
      Label('Thinking of making a horror movie called "Mutable State: Nothing is What It Seems"'),
      Label('Brandom Rhodes @brandom_rhodes'),
      Label('Taught list comprehensions today. Student tried the statement "for a in b if c:" and got a SyntaxError. Considers #Python inconsistent. Huh.')
    )
  )
)

tabbedPanel = TabbedPanel(
  [Link('Twitter'), twitter],
  [Link('Login'), loginForm],
  [Link('Register'), registerForm]
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
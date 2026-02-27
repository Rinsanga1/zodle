- goals:
    build a text input widget with TextField
    Mange text with TextEdittingController
    Control input focus for better user experience
    Handle user actions with callbacks and buttons


- 1 Introduction
    the app will display the users guess in the tiles

- 2 Implement the callback functions
    Input Field + submit button: thats what we need
    GuessInput + onSubmitGuess

- 3 the textfield widget
    the text field and button are side by side so
    create them as row widget

- 4 Handling texts with TextEdittingController
    managing the text taht hte user have input
    ( im guesing we just throw them in to the loop tile )
    pass the TextEdittingController to the TextField

    how do you know when to capture the text?
    solu: when they press submit

- 5 Gain input focus
    you want a widget to gain focus twhen the user is focusing on it
    to give them like a feedback
    autofocus on the TextField

    managing keyboard focus
        FocusNode

- 6 Use the input
    hadling the text that the users submits
    replacing the print function to submite instead

- 7 Buttons
    inbuilt: TextButton, ElevatedButton, IconButton
    their args:
        onPressed
        and content of the button

    challenge
        shoudlnd we abstract these 2 function to one

- 8 Review
    build a text input widget field
    manange text wsith TextEdittingController
    controller input focus
    handled users inputs




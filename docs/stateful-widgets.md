- goals:
    learn what stateful widgets are
    convert stateless to stateful widgets
    trigger ui updates with setStates

- 1  Introduction
    what we have
        grid
        input fields
    but the user input is not displayed at all
        displaying the correct letter
        changing colors to refelct what is correct or not

    to do this the GamePage needs t o be stateful

- 2 Why stateful widgets
    if a widget needs update during tis life time , you need a stateful
    widget

- 3 Converting GamePage to StatefulWidgets
    a  ok this was right, change the Stateless to Stateful
    b  create new class that extends State<GamePage>
        this class is for holding the mutable states
        move the build method to the new class
    c  implement the createState() in GamePage
        and returns an instance of the stateful class

    tip: you dont have to manually do this.
        quick assistn  can do the conversion for you

- 4 Updatint the UI with setState
    if you want to mutate a state you need to call a setState
    when a user makes a guess the guess is saved in the game state
    and this requirethe ui state to be updated
    the grid needs to be redrawn

    // i forgot that i was actually building a game

- 5 Review
    learned when widgets needs to be stateful
    convert GamePage to be stateful
    Made app response to user input









- todo:
    create new flutter app using cli ( done )
    understanding widget and widget tree
    run your app and use hot reload

- 1 what you will build
    birdle

- 2 create a new flutter app
    flutter create birdle --empty

- 3 examine the code
    lemme do this first:
        bunch of android, windows, web and ios toolkits
        lib : where the main code resides
        looking into the main.dart
    Studying the main.dart:
        1  importing materials.sdk
        2  the material sdk have runApp method
            this method takes in instance objects as params of type StatelessWidget
            and looks inside and run the build() method the build method which returns type
        3  writing build()
            a  takes in BuildContext context for parms for locating widgets
            b  just write on structures of widgets on how to render them to screen
        4  writing Widget MaterialApp()
            a  @todo: learn what params i can give to eidt and write
            b  reutrns a widget describin how you wnat the views to look lik
            c  home: fn ( homw is named params like myFunction(name="john") just diff syntax)








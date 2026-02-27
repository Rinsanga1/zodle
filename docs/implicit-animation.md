- simple animations goals:
    1  discover implicit animation in flutter
    2  animate property change with AnimatedContainer
    3  customize timing  duration and curves


- 1 convert container to animatedContainer
    now: Tile.build returns a container ( and pattern match to chang ethe color of th t ile)
    what we want:
        we want the tiles to be animated and change smoothly

    changed the container -> AnimatedContainer
    and you need to pass the duration for animations

- 2 adjusting the animation curve
    add a params for cureves.bouncein

- 3 review
    discovered implicit animations
    anited the tiles with AnimatedContainer
    customize timing and curves
    completed the birdle game

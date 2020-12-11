namespace SpriteKind {
    export const Door = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 0, 0)
    dodge = true
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . . f 
        . f . . . . . f f f f f f . . f 
        . f . . . f f f 1 1 1 1 f f . f 
        . f . . f f 1 1 1 1 1 1 1 f . f 
        . f . f f 1 1 f f 1 f f 1 f . f 
        . f . f 1 1 1 f f 1 f f 1 f f f 
        . f f f 1 1 1 1 1 1 1 1 1 f f . 
        . . . f 1 1 1 1 1 1 1 1 1 f . . 
        . 1 . f 1 1 1 f f f 1 1 f f . . 
        1 1 . f f 1 1 1 1 1 f f f . . . 
        . 1 . . f f f f f f f . . . . . 
        1 1 1 . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
function chooseLevel () {
    if (level == 0) {
        scene.setTileMap(list[level])
        createLevel()
    } else if (level == 1) {
        delete0ldLevel()
        scene.setTileMap(list[level])
        createLevel()
    } else {
        delete0ldLevel()
        scene.setTileMap(list[level])
        createLevel()
    }
}
function createLevel () {
    for (let value of scene.getTilesByType(15)) {
        scene.setTile(15, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        portal = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e f f e e e . . . . 
            . . . . e e f 1 1 f e e . . . . 
            . . . e e e f 1 1 f e e e . . . 
            . . . e e e e f f e e e e . . . 
            . . . e e e e e e e e e e . . . 
            . . . e e 5 5 e e e e e e . . . 
            . . . e e 5 5 e e e e e e . . . 
            . . . e e e e e e e e e e . . . 
            . . . e e e e e e e e e e . . . 
            . . . e e e e e e e e e e . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Door)
        scene.place(value, portal)
    }
    for (let value of scene.getTilesByType(8)) {
        scene.setTile(8, img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `, true)
    }
    for (let value of scene.getTilesByType(4)) {
        scene.setTile(4, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 4 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
    }
    for (let value of scene.getTilesByType(10)) {
        scene.setTile(10, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 7 . . . . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        scene.place(value, mySprite2)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.setVelocity(0, -250)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door, function (sprite, otherSprite) {
    if (sprites.allOfKind(SpriteKind.Food).length == 0) {
        if (level == 2) {
            game.over(true)
        } else {
            level += 1
            mySprite.setPosition(30, 80)
            chooseLevel()
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
info.onLifeZero(function () {
    game.over(false)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite, 100, 0)
    dodge = false
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f f . . . . 
        . . . . . . f f f 1 1 1 f . . . 
        . . . . . f f 1 1 1 1 1 1 f . . 
        . . . . . f 1 1 f f 1 f f 1 f . 
        . . . . f 1 1 1 f f 1 f f 1 f . 
        . . . . f 1 1 1 1 1 1 1 1 1 f . 
        . . . . f 1 1 1 1 1 1 1 1 1 f . 
        . . . . f 1 1 1 f f f f 1 f . . 
        . . . . f 1 1 1 1 1 1 1 1 f . . 
        . . . . f f 1 1 1 1 1 1 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
function delete0ldLevel () {
    for (let value of sprites.allOfKind(SpriteKind.Door)) {
        value.destroy()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
})
let projectile: Sprite = null
let mySprite2: Sprite = null
let portal: Sprite = null
let dodge = false
let level = 0
let list: Image[] = []
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f f 1 1 1 f . . . . 
    . . . . f f 1 1 1 1 1 1 f . . . 
    . . . . f 1 1 f f 1 f f 1 f . . 
    . . . f 1 1 1 f f 1 f f 1 f . . 
    . . . f 1 1 1 1 1 1 1 1 1 f . . 
    . . . f 1 1 1 1 1 1 1 1 1 f . . 
    . . . f 1 1 1 f f f f 1 f . . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . . f f 1 1 1 1 1 1 f . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 350
mySprite.setPosition(30, 80)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(9)
list = [img`
    ..........................
    ..........................
    ...a.........f.......a....
    ...............a...4444...
    ..4444....................
    ............44444.........
    ....................a.....
    ......44444...............
    ......a...........44444...
    ..............a...........
    ...444444...444444........
    ..........................
    .........................a
    88888888888888888888888888
    `, img`
    .f.................a......
    ..........................
    .444.......a.....4444.....
    ......4...................
    ..........444..........a..
    .......4........a.........
    .a...................444..
    ..............444.........
    .444..a...............a...
    ...4444.....a.......4444..
    ..........444444..........
    ..........................
    ........................a.
    88888888888888888888888888
    `, img`
    ...a............f.........
    ...44......a.........a....
    ...........4....4....4....
    ...a......................
    ...4............44........
    ................4.........
    ...........a.........4....
    ..........444.............
    ......a............a......
    .a....4............4......
    .44............44......a..
    ..4444................44..
    ..........................
    88888888888888888888888888
    `]
level = 0
chooseLevel()
info.setLife(5)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d . . . . . 
        . . . . d f f f f d d . . . . . 
        . . . . d f f f f f d . . . . . 
        . . . . d f f f f f d . . . . . 
        . . . . d f f f f f d . . . . . 
        . . . . d f f f f d d . . . . . 
        . . . . d f f f d d . . . . . . 
        . . . . d d f d d . . . . . . . 
        . . . . . d d d . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-100, 100), 100)
})

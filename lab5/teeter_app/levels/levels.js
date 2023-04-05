import Matter from 'matter-js'
import Ball from '../components/game/Ball'
import Wall from '../components/game/Wall'
import Hole from '../components/game/Hole'

const levels = [
    {
        balls: [
            {x: 390, y: 200}
        ],
    },
    {
        balls: [
            {x: 640, y: 30}
        ],
        holes: [
            {x: 120, y: 50},
            {x: 100, y: 140},
            {x: 230, y: 30},
            {x: 680, y: 140},
            {x: 680, y: 340},
            {x: 620, y: 250},
            {x: 430, y: 340},
            {x: 430, y: 200},
        ],
        walls: [
            {x: 595, y: 135, width: 10, height: 270},
            {x: 430, y: 270, width: 10, height: 100},
            {x: 430, y: 130,width: 10, height: 100},
        ]
    },
    {
        balls: [
            {x: 120, y: 340},
        ],
        holes: [
            {x: 420, y: 150},
            {x: 90, y: 240},
            {x: 120, y: 110},
            {x: 180, y: 110},
            {x: 200, y: 220},
            {x: 180, y: 340},
            {x: 260, y: 240},
            {x: 280, y: 130},
            {x: 420, y: 110},
            {x: 460, y: 95},
            {x: 500, y: 70},
            {x: 535, y: 45},
            {x: 570, y: 20},
            {x: 560, y: 210},
            {x: 670, y: 330},
            {x: 360, y: 140},
        ],
        walls: [
            {x: 150, y: 205, width: 10, height: 310},
            {x: 230, y: 155, width: 10, height: 310},
            {x: 310, y: 205, width: 10, height: 310},
            {x: 390, y: 180, width: 10, height: 230},
            {x: 490, y: 180, width: 200, height: 10},
        ]
    },
    {
        balls: [
            {x: 110, y: 320}
        ],
        holes: [
            {x: 380, y: 200},{x: 140, y: 70},{x: 150, y: 110},
            {x: 170, y: 150},{x: 180, y: 60},{x: 190, y: 100},
            {x: 210, y: 140},{x: 220, y: 50},{x: 230, y: 90},
            {x: 260, y: 40},{x: 270, y: 80},{x: 300, y: 30},
            {x: 340, y: 20},{x: 380, y: 20},{x: 420, y: 20},
            {x: 460, y: 25},{x: 495, y: 35},{x: 535, y: 45},
            {x: 565, y: 65},{x: 595, y: 85}, {x: 625, y: 115},
            {x: 645, y: 145},{x: 650, y: 180},{x: 640, y: 220},
            {x: 620, y: 250},{x: 590, y: 280},{x: 560, y: 300},
            {x: 520, y: 320},{x: 480, y: 330},{x: 480, y: 330},
            {x: 440, y: 335},{x: 400, y: 335},{x: 360, y: 330},
            {x: 320, y: 310},{x: 300, y: 270},{x: 290, y: 225},
            {x: 300, y: 180},{x: 330, y: 150},{x: 370, y: 140},
            {x: 410, y: 130},{x: 400, y: 165},{x: 440, y: 175},
            {x: 450, y: 135},{x: 490, y: 145},{x: 480, y: 185},
            {x: 470, y: 225},{x: 430, y: 215},{x: 400, y: 235},
        ],
    }
]

export default (world, level) => {
    return {
        ...ballFactory(world, levels[level].balls),
        ...holeFactory(world, levels[level].holes),
        ...wallFactory(world, levels[level].walls),
    }
}

const ballFactory = (world, balls) => {
    const ballsObj = {}

    balls?.forEach((ball, index) => {
        ballsObj['Ball'] = Ball(world, ball, 15)
    });

    return ballsObj
}

const holeFactory = (world, holes) => {
    const holesObj = {}

    holes?.forEach((hole, index) => {
        if(index != 0){
            holesObj['Hole' + index] = Hole(world, hole, 1)
        }else{
            holesObj['PrimaryHole'] = Hole(world, hole, 1, true)
        }
    });

    return holesObj
}

const wallFactory = (world, walls) => {
    const wallsObj = {}

    walls?.forEach((wall, index) => {
        wallsObj['Wall' + index] = Wall(world, '#975a5e', {x: wall.x, y: wall.y}, {width: wall.width, height: wall.height})
    });

    return wallsObj
}

export {levels}
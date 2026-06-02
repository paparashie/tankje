/**
 * Blokken voor het RobotBit tankje
 */
//% weight=100 color=#0f8f2f icon="\uf1b9" block="Tankje"
namespace Tankje {
    /**
     * Stop het tankje
     */
    //% block="stop"
    //% weight=90
    export function stop(): void {
        robotbit.Servo(robotbit.Servos.S1, 100)
        robotbit.Servo(robotbit.Servos.S2, 100)
    }

    /**
     * Laat het tankje vooruit rijden
     */
    //% block="vooruit %seconden seconden"
    //% seconden.defl=2
    //% weight=100
    export function vooruit(seconden: number): void {
        robotbit.Servo(robotbit.Servos.S1, 70)
        robotbit.Servo(robotbit.Servos.S2, 130)
        basic.pause(seconden * 1000)
        stop()
    }

    /**
     * Laat het tankje achteruit rijden
     */
    //% block="achteruit %seconden seconden"
    //% seconden.defl=2
    //% weight=99
    export function achteruit(seconden: number): void {
        robotbit.Servo(robotbit.Servos.S1, 130)
        robotbit.Servo(robotbit.Servos.S2, 70)
        basic.pause(seconden * 1000)
        stop()
    }

    /**
     * Laat het tankje links draaien
     */
    //% block="draai links %seconden seconden"
    //% seconden.defl=1
    //% weight=98
    export function draaiLinks(seconden: number): void {
        robotbit.Servo(robotbit.Servos.S1, 70)
        robotbit.Servo(robotbit.Servos.S2, 70)
        basic.pause(seconden * 1000)
        stop()
    }

    /**
     * Laat het tankje rechts draaien
     */
    //% block="draai rechts %seconden seconden"
    //% seconden.defl=1
    //% weight=97
    export function draaiRechts(seconden: number): void {
        robotbit.Servo(robotbit.Servos.S1, 130)
        robotbit.Servo(robotbit.Servos.S2, 130)
        basic.pause(seconden * 1000)
        stop()
    }

    /**
     * Korte toeter
     */
    //% block="toeter kort"
    //% weight=80
    export function toeterKort(): void {
        pins.analogPitch(440, 200)
        basic.pause(80)
        pins.analogPitch(440, 200)
    }

    /**
     * Lange toeter
     */
    //% block="toeter lang"
    //% weight=79
    export function toeterLang(): void {
        pins.analogPitch(523, 160)
        basic.pause(20)
        pins.analogPitch(659, 160)
        basic.pause(30)
        pins.analogPitch(784, 160)
        basic.pause(30)
        pins.analogPitch(1047, 260)
        basic.pause(40)
        pins.analogPitch(784, 100)
        basic.pause(40)
        pins.analogPitch(1047, 350)
    }
}

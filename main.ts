function lesenUndAnzeigenA1 () {
    // Messe den analogen Wert am Port P1
    feuchtigkeit = pins.analogReadPin(AnalogPin.P1)
    // Entscheide basierend auf dem Feuchtigkeitswert, welche Farbe die LED haben soll
    if (feuchtigkeit <= 8) {
        // Blau
        basic.setLedColor(0x0000FF)
    } else if (feuchtigkeit > 400) {
        // Rot
        basic.setLedColor(0xFF0000)
    } else {
        // Grün
        basic.setLedColor(0x00FF00)
    }
    // Zeige den Feuchtigkeitswert auf dem Display
    basic.showNumber(feuchtigkeit)
    // Warte 2 Sekunden
    basic.pause(2000)
    cls()
}
// Definiere einen Event-Handler für Button A
input.onButtonPressed(Button.A, function () {
    lesenUndAnzeigenA1()
})
function cls () {
    // Setze die LED zu Beginn auf Gelb
    basic.setLedColor(0xFFFF00)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
let feuchtigkeit = 0
// Setze die LED zu Beginn auf Gelb
basic.setLedColor(0xFFFF00)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) != 0) {
        lesenUndAnzeigenA1()
    }
})

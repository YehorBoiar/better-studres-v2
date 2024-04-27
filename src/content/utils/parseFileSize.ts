export default function parseFileSize(rawFileSize: string) {
    // folder
    if (rawFileSize === "  - ") {
        return undefined
    }

    const items = rawFileSize.split(/(\d*\.?\d+)([a-zA-Z]+)/)

    if (!items) {
        return undefined
    }

    let number = items[1]

    if (items.length === 1) {
        number = items[0]
    }

    const size = parseFloat(number)
    let units = items[2]

    // If units are empty, set it to "B"
    if (!units) {
        units = "B"
    }

    return { size, units }
}

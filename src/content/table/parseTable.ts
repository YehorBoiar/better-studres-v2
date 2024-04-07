import { FileLink, SortLink } from "../../types/pageContentTypes"
import { getTableRows } from "./getTableRows"
import { parseFileLinkRows } from "./rows/parseFileLinkRows"
import { parseHeaderRow } from "./rows/parseHeaderRow"

export function parseTable(content: HTMLElement): {
    sortLinks: SortLink[]
    fileLinks: FileLink[]
} {
    const tableRows = getTableRows(content)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [headerRow, ...fileLinkRows] = tableRows

    // first row and last row are empty:
    fileLinkRows.shift()
    fileLinkRows.pop()

    const sortLinks: SortLink[] = parseHeaderRow(headerRow)
    const fileLinks: FileLink[] = parseFileLinkRows(fileLinkRows)

    return { sortLinks, fileLinks }
}

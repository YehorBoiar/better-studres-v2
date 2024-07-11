import {
    ContextMenuContent,
    ContextMenuSeparator,
} from "@src/components/ui/context-menu"
import { FullFileLink } from "@src/features/parser"
import CopyPathMenuItem from "@src/features/shared/contextMenuItems/CopyPathMenuItem"
import { forwardRef } from "react"
import DownloadFileMenuItem from "./DownloadFileMenuItem"
import { MenuLabel } from "./MenuLabel"
import { TagsMenuSub } from "./TagsMenuSub"
import { UpdatesMenuItem } from "./UpdatesMenuItem"

interface FileCardContextMenuProps {
    fileLink: FullFileLink
}

const FileCardContextMenuContent = forwardRef<
    HTMLDivElement,
    FileCardContextMenuProps
>(({ fileLink }, ref) => {
    const isParentDirectory = fileLink.fullName === "Parent Directory"

    return (
        <ContextMenuContent ref={ref}>
            <MenuLabel
                fullName={fileLink.fullName}
                size={fileLink.size}
                description={fileLink.lastModified.raw}
            />

            <ContextMenuSeparator />

            <UpdatesMenuItem fileLink={fileLink} />
            <CopyPathMenuItem href={fileLink.href} />
            {!isParentDirectory && (
                <DownloadFileMenuItem
                    href={fileLink.href}
                    isFolder={fileLink.isFolder}
                    fileName={fileLink.fullName}
                />
            )}

            {!isParentDirectory && <ContextMenuSeparator />}

            {!isParentDirectory && <TagsMenuSub fileLink={fileLink} />}
        </ContextMenuContent>
    )
})

FileCardContextMenuContent.displayName = "FileCardContextMenuContent"

export default FileCardContextMenuContent

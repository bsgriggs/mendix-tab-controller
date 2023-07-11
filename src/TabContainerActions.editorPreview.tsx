import classNames from "classnames";
import { ReactElement, createElement } from "react";
import { TabContainerActionsPreviewProps } from "../typings/TabContainerActionsProps";

export function preview({ contentToWatch, class: className }: TabContainerActionsPreviewProps): ReactElement {
    return (
        <div className={classNames("tab-container-actions", className)}>
            <contentToWatch.renderer caption="Place custom content here">
                <div style={{ width: "100%" }} />
            </contentToWatch.renderer>
        </div>
    );
}

// export function getPreviewCss(): string {
//     return require("./ui/TabContainerActions.css");
// }

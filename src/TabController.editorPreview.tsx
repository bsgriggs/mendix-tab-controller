/* eslint-disable */
import classNames from "classnames";
import { ReactElement, createElement } from "react";
import { TabControllerPreviewProps } from "../typings/TabControllerProps";

export function preview(props: TabControllerPreviewProps): ReactElement {
    return (
        <div className={classNames("tab-container-actions", props.class)}>
            {/* @ts-ignore */}
            <props.contentToWatch.renderer caption="Place custom content here">
                <div style={{ width: "100%" }} />
            </props.contentToWatch.renderer>
        </div>
    );
}

// export function getPreviewCss(): string {
//     return require("./ui/TabContainerActions.css");
// }

import classNames from "classnames";
import { ReactElement, createElement } from "react";
import { TabContainerActionsContainerProps } from "../typings/TabContainerActionsProps";

export function TabContainerActions({
    name,
    style,
    debugMode,
    watchingTabs,
    contentToWatch,
    class: className
}: TabContainerActionsContainerProps): ReactElement {
    const onClickHandler = (): void => {
        const activeElement = document.activeElement;
        // eslint-disable-next-line no-unused-expressions
        debugMode && console.info("active element", activeElement);
        if (activeElement) {
            activeElement.classList.forEach(className => {
                const watchingTab = watchingTabs.find(watchingTab => watchingTab.className.value === className);
                if (watchingTab) {
                    // eslint-disable-next-line no-unused-expressions
                    debugMode && console.info("matched classname " + watchingTab.className.value + " ... executing");
                    watchingTab.onClick?.execute();
                }
            });
        } else {
            // eslint-disable-next-line no-unused-expressions
            debugMode && console.info("no active element");
        }
    };

    return (
        <div
            id={name}
            className={classNames("tab-container-actions", className)}
            style={style}
            onClick={onClickHandler}
            onKeyDown={event => {
                // eslint-disable-next-line no-unused-expressions
                debugMode && console.info("key down: " + event.key);
                if (event.key === " ") {
                    onClickHandler();
                }
            }}
        >
            {contentToWatch}
        </div>
    );
}

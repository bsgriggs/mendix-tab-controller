import Big from "big.js";
import classNames from "classnames";
import { ReactElement, createElement, useEffect, useState, useRef, useCallback } from "react";
import { TabContainerActionsContainerProps } from "../typings/TabContainerActionsProps";

export function TabContainerActions({
    name,
    style,
    contentToWatch,
    class: className,
    updateAttribute,
    onTabClick
}: TabContainerActionsContainerProps): ReactElement {
    const [currentTab, setCurrentTab] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null);

    //update the state if the attribute changes outside the widget
    useEffect(() => {
        setCurrentTab(Number(updateAttribute.value));
    }, [updateAttribute.value]);

    //click the tab when index changes
    useEffect(() => {
        if (ref.current) {
            const tabList = ref.current.querySelector('[role="tablist"]') as HTMLUListElement; // only consider the first tab list child
            const tab = tabList.querySelectorAll('[role="tab"]').item(currentTab) as HTMLAnchorElement;
            tab?.click();
            onTabClick?.execute();
            updateAttribute.setValue(Big(currentTab || 0));
        }
    }, [ref.current, currentTab]);

    const onClickHandler = useCallback((): void => {
        if (ref.current) {
            const tabList = ref.current.querySelector('[role="tablist"]') as HTMLUListElement; // only consider the first tab list child
            const activeElement = document.activeElement;
            if (tabList && tabList.contains(activeElement)) {
                setCurrentTab(Array.prototype.indexOf.call(tabList.querySelectorAll('[role="tab"]'), activeElement));
            }
        }
    }, [ref.current]);

    return (
        <div
            id={name}
            className={classNames("tab-container-actions", className)}
            style={style}
            onClick={onClickHandler}
            onKeyDown={event => {
                if (event.key === " ") {
                    onClickHandler();
                }
            }}
            ref={ref}
        >
            {contentToWatch}
        </div>
    );
}

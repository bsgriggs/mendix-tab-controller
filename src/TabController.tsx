import Big from "big.js";
import classNames from "classnames";
import { ReactElement, createElement, useEffect, useMemo, useRef, useCallback } from "react";
import { ValueStatus, ActionValue } from "mendix";
import { TabControllerContainerProps } from "../typings/TabControllerProps";

export function TabController(props: TabControllerContainerProps): ReactElement {
    const ref = useRef<HTMLDivElement>(null);
    const currentIndex: number | undefined = useMemo(
        () =>
            props.tabIndexAttribute && props.tabIndexAttribute.status === ValueStatus.Available
                ? Number(props.tabIndexAttribute.value)
                : undefined,
        [props.tabIndexAttribute]
    );

    const currentFocus = useCallback((): number | undefined => {
        if (ref.current) {
            const tabList = ref.current.querySelector('[role="tablist"]') as HTMLUListElement; // only consider the first tab list child
            const activeElement = document.activeElement;
            if (tabList && tabList.contains(activeElement)) {
                return Array.prototype.indexOf.call(tabList.querySelectorAll('[role="tab"]'), activeElement);
            }
        }
    }, [ref]);

    const callMxAction = useCallback((mxAction: ActionValue) => {
        if (mxAction.canExecute && !mxAction.isExecuting) {
            mxAction.execute();
        }
    }, []);

    const onClickHandler = useCallback((): void => {
        const newTabIndex = currentFocus();
        if (ref.current && newTabIndex !== currentIndex) {
            if (props.onTabClick) {
                callMxAction(props.onTabClick);
            }
            if (newTabIndex !== undefined) {
                props.tabIndexAttribute?.setValue(Big(newTabIndex));
            }
        }
    }, [ref, currentIndex, props.tabIndexAttribute, props.onTabClick, currentFocus, callMxAction]);

    const onKeyDownHandler = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === " " || event.key === "Enter") {
                onClickHandler();
            }
        },
        [onClickHandler]
    );

    useEffect(() => {
        // set event listeners
        if (ref.current) {
            const tabList = ref.current.querySelector('[role="tablist"]') as HTMLUListElement; // only consider the first tab list child
            const tabElements = tabList.querySelectorAll('[role="tab"]');
            tabElements.forEach(element => {
                element.addEventListener("click", onClickHandler);
                element.addEventListener("keydown", onKeyDownHandler);
            });
            return () => {
                // clear event listeners
                tabElements.forEach(element => {
                    element.removeEventListener("click", onClickHandler);
                    element.removeEventListener("keydown", onKeyDownHandler);
                });
            };
        }
    }, [ref, onKeyDownHandler, onClickHandler]);

    // click the tab when index changes outside the widget
    useEffect(() => {
        // const newTabIndex = currentFocus();
        if (ref.current && currentIndex !== undefined) {
            const tabList = ref.current.querySelector('[role="tablist"]') as HTMLUListElement; // only consider the first tab list child
            const tab = tabList.querySelectorAll('[role="tab"]').item(currentIndex) as HTMLAnchorElement;
            tab?.click();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex, ref]);

    return (
        <div className={classNames("tab-container-actions", props.class)} style={props.style} ref={ref}>
            {props.contentToWatch}
        </div>
    );
}

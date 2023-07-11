/**
 * This file was generated from TabContainerActions.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue, DynamicValue } from "mendix";

export interface WatchingTabsType {
    className: DynamicValue<string>;
    onClick?: ActionValue;
}

export interface WatchingTabsPreviewType {
    className: string;
    onClick: {} | null;
}

export interface TabContainerActionsContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    watchingTabs: WatchingTabsType[];
    contentToWatch: ReactNode;
    debugMode: boolean;
}

export interface TabContainerActionsPreviewProps {
    class: string;
    style: string;
    watchingTabs: WatchingTabsPreviewType[];
    contentToWatch: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    debugMode: boolean;
}

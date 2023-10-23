/**
 * This file was generated from TabController.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue, EditableValue } from "mendix";
import { Big } from "big.js";

export interface TabControllerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    tabIndexAttribute?: EditableValue<Big>;
    contentToWatch: ReactNode;
    onTabClick?: ActionValue;
}

export interface TabControllerPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    tabIndexAttribute: string;
    contentToWatch: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    onIndexChange: {} | null;
    onTabClick: {} | null;
}

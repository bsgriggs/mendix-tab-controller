/**
 * This file was generated from TabContainerActions.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue, EditableValue } from "mendix";
import { Big } from "big.js";

export interface TabContainerActionsContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    updateAttribute: EditableValue<Big>;
    contentToWatch: ReactNode;
    onTabClick?: ActionValue;
}

export interface TabContainerActionsPreviewProps {
    class: string;
    style: string;
    updateAttribute: string;
    contentToWatch: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    onTabClick: {} | null;
}

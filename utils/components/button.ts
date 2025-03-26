import type {ButtonClasses, ButtonProps} from "~/types/components/button";
import {BUTTON_STYLES} from "~/constants/components/button";

export const getButtonClasses = ({
    size = 'md',
    type = 'primary',
    disabled = false,
    loading = false,
    fullWidth = false,
    icon = '',
    iconRight = '',
    hasLeftIcon = false,
    hasRightIcon = false,
    textCenter = false,
}: ButtonProps & { hasLeftIcon: boolean, hasRightIcon: boolean }): ButtonClasses => {
    const hasLeft = hasLeftIcon !== undefined ? hasLeftIcon : Boolean(icon || loading);
    const hasRight = hasRightIcon !== undefined ? hasRightIcon : Boolean(iconRight) && !loading;


    return {
        container: [
            BUTTON_STYLES.container.base,
            BUTTON_STYLES.container.size[size],
            BUTTON_STYLES.container.type[type],
            disabled && BUTTON_STYLES.container.disabled,
            loading && BUTTON_STYLES.container.loading,
            !fullWidth && BUTTON_STYLES.container.maxWidth
        ].filter(Boolean).join(' '),
        content: [
            BUTTON_STYLES.content.base,
            BUTTON_STYLES.content.size[size],
            BUTTON_STYLES.content.type[type],
        ].join(' '),
        label: [
            BUTTON_STYLES.label.base,
            (!hasLeft && !hasRight) && BUTTON_STYLES.label.noIcon,
            (!hasLeft && hasRight) && BUTTON_STYLES.label.onlyRight,
            (hasLeft && hasRight) && BUTTON_STYLES.label.bothIcon,
            textCenter && BUTTON_STYLES.label.isCentered
        ].filter(Boolean).join(' '),
        icon: BUTTON_STYLES.icon.base,
    }
}
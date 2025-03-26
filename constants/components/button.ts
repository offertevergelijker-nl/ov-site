import type { ButtonType, ButtonSize } from "~/types/components/button";

interface ButtonStyleConfig {
    container: {
        base: string;
        size: Record<ButtonSize, string>;
        type: Record<ButtonType, string>;
        disabled: string
        loading: string;
        maxWidth: string;
    };
    content: {
        base: string;
        size: Record<ButtonSize, string>;
        type: Record<ButtonType, string>;
    };
    label: {
        base: string;
        noIcon: string;
        onlyRight: string;
        bothIcon: string;
        isCentered: string;
    };
    icon: {
        base: string;
    },
}

export const BUTTON_STYLES: ButtonStyleConfig = {
    container: {
        base: 'relative w-full border border-solid rounded transition duration-100 cursor-pointer',
        size: {
            xs: 'px-2 h-5',
            sm: 'px-3 h-8',
            md: 'px-3 h-9',
            lg: 'px-4 h-10'
        },
        type: {
            primary: 'bg-primary-500 border-primary-500 hover:bg-primary-600 hover:border-primary-600',
            secondary: 'bg-secondary-500 border-secondary-500 hover:bg-secondary-600 hover:border-secondary-600',
            info: 'bg-info-500 border-info-500 hover:bg-info-600 hover:border-info-600',
            warning: 'bg-warning-500 border-warning-500 hover:bg-warning-600 hover:border-warning-600',
            danger: 'bg-danger-500 border-danger-500 hover:bg-danger-600 hover:border-danger-600',
            success: 'bg-success-500 border-success-500 hover:bg-success-600 hover:border-success-600',
            tertiary: 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
        },
        disabled: 'opacity-75 !cursor-not-allowed',
        loading: 'animate-pulse !cursor-not-allowed',
        maxWidth: 'w-max'
    },
    content: {
        base: 'flex items-center',
        size: {
            xs: 'text-sm',
            sm: 'text-sm',
            md: 'text-base',
            lg: 'text-lg'
        },
        type: {
            primary: 'text-white',
            secondary: 'text-white',
            info: 'text-gray-600',
            warning: 'text-gray-600',
            danger: 'text-white',
            success: 'text-white',
            tertiary: 'text-gray-600'
        },
    },
    label: {
        base: 'w-max mr-0.5 ml-2',
        noIcon: '!mx-0.5',
        onlyRight: '!mr-2 !ml-0.5',
        bothIcon: '!ml-2 !mr-6',
        isCentered: '!mx-0 absolute left-1/2 -translate-x-1/2 w-full'
    },
    icon: {
        base: 'flex-shrink-0',
    },
};

export const LOADING_ICON = 'line-md:loading-twotone-loop'
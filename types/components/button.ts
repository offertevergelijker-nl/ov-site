export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'info' | 'warning' | 'danger' | 'success';

export interface ButtonProps {
    size?: ButtonSize;
    type?: ButtonType;
    label?: string;
    icon?: string;
    iconRight?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    loading?: boolean;
    textCenter?: boolean;
}

export interface ButtonClasses {
    container: string;
    content: string;
    label: string;
    icon: string;
}
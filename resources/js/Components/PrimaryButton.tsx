import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

export default function PrimaryButton({ className = '', disabled, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={clsx(
                'inline-flex items-center rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:from-sky-500 hover:to-sky-400 hover:shadow-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60',
                className,
            )}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
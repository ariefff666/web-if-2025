import { InputHTMLAttributes } from 'react';

export default function Checkbox({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type="checkbox"
            className={`h-4 w-4 rounded border-slate-300 text-sky-600 shadow-sm focus:ring-sky-500 ${className}`}
        />
    );
}
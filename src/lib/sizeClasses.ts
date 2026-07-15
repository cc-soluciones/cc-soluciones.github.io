export const sizeClasses: Record<string, string> = {
	sm: "px-2 py-1 text-xs",
	md: "px-4 py-2 text-sm",
	lg: "px-6 py-3 text-lg",
	xl: "px-8 py-4 text-xl",
};

export type Size = keyof typeof sizeClasses;

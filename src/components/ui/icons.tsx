type IconProps = {
  className?: string;
};

export function SearchIcon({ className = "icon" }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      <path d="m21 21-4.35-4.35" />
      <circle cx="11" cy="11" r="7" />
    </svg>
  );
}

export function UserIcon({ className = "icon" }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="8" r="4" />
    </svg>
  );
}

export function HeartIcon({ className = "icon" }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      <path d="M20.8 5.7a5.5 5.5 0 0 0-7.8 0L12 6.8l-1-1.1a5.5 5.5 0 1 0-7.8 7.8L12 22l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z" />
    </svg>
  );
}

export function CartIcon({ className = "icon" }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      <path d="M6 6h15l-2 9H8L6 3H3" />
      <circle cx="9" cy="21" r="1" />
      <circle cx="18" cy="21" r="1" />
    </svg>
  );
}

export function MenuIcon({ className = "icon" }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className = "icon" }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function BellIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 0 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.5 19a2.5 2.5 0 0 0 5 0"
      />
    </svg>
  );
}
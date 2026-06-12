import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  className?: string;
  href?: string;
};

export function BrandLogo({ className = "", href = "/" }: BrandLogoProps) {
  return (
    <Link
      aria-label="Hummy Original"
      className={`brand-logo ${className}`}
      href={href}
    >
      <Image
        alt="Hummy Original"
        className="brand-logo__image"
        height={332}
        priority
        src="/assets/brand/logo.svg"
        width={1098}
      />
    </Link>
  );
}

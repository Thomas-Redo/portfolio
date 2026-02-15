import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-800/50 px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Thomas Hart
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/Thomas-Redo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-300"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-300"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:"
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-300"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}

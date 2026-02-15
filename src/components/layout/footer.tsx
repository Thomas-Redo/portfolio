import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-neutral-600">
          &copy; {new Date().getFullYear()} Thomas Hart
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/Thomas-Redo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-600 transition-colors hover:text-indigo-400"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/thomashartdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-600 transition-colors hover:text-indigo-400"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:thomashartdev@gmail.com"
            className="text-sm text-neutral-600 transition-colors hover:text-indigo-400"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}

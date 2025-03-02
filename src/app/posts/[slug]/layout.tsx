export default function PostLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="py-4 sm:py-6 md:py-8">
        <div className="max-w-3xl mx-auto">
          {children}
        </div>
      </div>
    );
  }
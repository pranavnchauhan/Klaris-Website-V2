export default function QuickAnswer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 rounded-lg border-l-4 border-primary bg-primary/5 px-5 py-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">
        Quick Answer
      </p>
      <div className="text-sm text-foreground">{children}</div>
    </div>
  );
}

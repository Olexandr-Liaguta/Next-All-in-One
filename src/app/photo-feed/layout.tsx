export default function PhotoFeedLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <section>
      {children} {modal}
    </section>
  );
}

export default function DashboardLayout({
  children,
  notifications,
  revenue,
  users,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6 p-4 shadow-lg shadow-white">
      {children}

      <div className="grid grid-cols-3 gap-6 ">
        {notifications}
        {revenue}
        {users}
      </div>
    </section>
  );
}

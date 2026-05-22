import { redirect } from 'next/navigation';
import Sidebar from '@/components/admin/Sidebar';
import TopNav from '@/components/admin/TopNav';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050505] flex">
      <Sidebar />
      <div className="flex-1 ml-20 transition-all duration-300 flex flex-col min-h-screen">
        <TopNav />
        <main className="p-8 flex-1 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}

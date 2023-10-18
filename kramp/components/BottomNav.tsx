// // components/BottomNav.tsx

// import Link from 'next/link';
// import { useRouter } from 'next/router';


// const BottomNav: React.FC = () => {
//     const router = useRouter();

//   return (
//     <div className="fixed bottom-0 left-0 w-full bg-gray-800 p-4 shadow-t-lg">
//       <div className="flex justify-between">
//         <Link href="/dashboard">
//           <span className="text-white">Home</span>
//         </Link>
//         <Link href="/history">
//           <span className="text-white">History</span>
//         </Link>
//         <Link href="/ramp">
//           <span className="text-white">Buy Crypto</span>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default BottomNav;


// components/BottomNav.tsx
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaHome, FaHistory, FaCoins } from 'react-icons/fa';

const BottomNav: React.FC = () => {
  const router = useRouter();

  const navItems = [
    { name: 'Home', href: '/dashboard', icon: FaHome },
    { name: 'History', href: '/history', icon: FaHistory },
    { name: 'Buy Crypto', href: '/purchase', icon: FaCoins },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 p-4 shadow-t-lg">
      <div className="flex justify-between items-center">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} passHref>
            <div className="flex flex-col items-center cursor-pointer">
              <item.icon 
                size={24} 
                className={`mb-1 ${router.pathname === item.href ? 'text-blue-500' : 'text-gray-400'}`} 
              />
              <span 
                className={`text-sm ${router.pathname === item.href ? 'text-blue-500' : 'text-gray-400'}`}
              >
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BottomNav;

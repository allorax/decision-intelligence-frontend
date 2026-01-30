'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Bell, Settings, Sun, Moon, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface NavbarProps {
  notificationCount?: number;
  lastUpdated?: string;
  dataCoverage?: string;
}

export function AppNavbar({
  notificationCount = 0,
  lastUpdated = 'Jan 30, 2026 • 09:45 AM EST',
  dataCoverage = '847 sources • 24h cycle',
}: NavbarProps) {
  const pathname = usePathname();
  const { theme, setTheme, systemTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Only render after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  // Toggle dark mode
  const toggleDarkMode = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  // Sample alerts data - filter for critical ones
  const criticalAlerts = [
    {
      id: '1',
      title: 'Earnings miss: Major retailer below consensus',
      description: 'XYZ Corp reported Q4 EPS of $1.23 vs expected $1.45. Guidance lowered for FY26. Stock down 8% in after-hours.',
      timestamp: '15 min ago',
      type: 'rising_risk' as const,
    },
    {
      id: '2',
      title: 'Fed commentary shifts tone on rate trajectory',
      description: 'FOMC minutes suggest higher-for-longer stance. Market now pricing 2 cuts in 2026 vs 4 previously.',
      timestamp: '1 hour ago',
      type: 'opportunity' as const,
    },
  ];

  const navItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Watchlist', href: '/watchlist' },
    { label: 'Reports', href: '/reports' },
    { label: 'Alerts', href: '/alerts' },
  ];

  const isActive = (href: string) => pathname === href;

  if (!mounted) {
    return (
      <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
        <div className="px-6 py-4 md:px-8 h-20" />
      </nav>
    );
  }

  return (
    <>
      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
        <div className="px-6 py-4 md:px-8">
          {/* Top Row - Logo, Nav, Controls */}
          <div className="flex items-center justify-between">
            {/* Logo and Branding */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-800 dark:bg-slate-700 rounded-lg flex items-center justify-center font-bold text-white text-lg">
                M
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white hidden sm:inline">Monitor110</span>
            </div>

            {/* Center Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-slate-900 dark:text-white'
                      : 'text-gray-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-4 relative">
              {/* Live Status */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-green-600 dark:text-green-400 hidden sm:inline">Live</span>
              </div>

              {/* Notifications */}
              <div className="relative">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative"
                  onClick={() => {
                    setShowNotifications(!showNotifications);
                    setShowSettings(false);
                    setShowUserMenu(false);
                  }}
                >
                  <Bell className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                  {notificationCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center p-0 bg-red-600 text-white text-xs font-bold rounded-full">
                      {notificationCount}
                    </Badge>
                  )}
                </Button>

                {/* Notifications Panel */}
                {showNotifications && (
                  <div className="absolute right-0 top-full mt-2 w-96 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-gray-200 dark:border-slate-700 z-50 p-0">
                    <div className="border-b border-gray-200 dark:border-slate-700 p-4">
                      <h3 className="font-bold text-slate-900 dark:text-white">Critical Alerts ({criticalAlerts.length})</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {criticalAlerts.map((alert) => (
                        <div key={alert.id} className="p-4 border-b border-gray-100 dark:border-slate-800 last:border-b-0 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                          <div className={`flex gap-3 rounded-lg p-3 ${
                            alert.type === 'rising_risk' 
                              ? 'bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800'
                              : 'bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800'
                          }`}>
                            <div className={`w-2 flex-shrink-0 rounded-full ${
                              alert.type === 'rising_risk' ? 'bg-red-600' : 'bg-yellow-600'
                            }`} />
                            <div className="flex-1 min-w-0">
                              <h4 className={`font-bold text-sm ${
                                alert.type === 'rising_risk'
                                  ? 'text-red-900 dark:text-red-100'
                                  : 'text-yellow-900 dark:text-yellow-100'
                              }`}>
                                {alert.title}
                              </h4>
                              <p className={`text-xs mt-1 ${
                                alert.type === 'rising_risk'
                                  ? 'text-red-700 dark:text-red-200'
                                  : 'text-yellow-700 dark:text-yellow-200'
                              }`}>
                                {alert.description}
                              </p>
                              <p className="text-xs opacity-60 mt-1">{alert.timestamp}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 dark:border-slate-700 p-3">
                      <Link href="/alerts" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
                        View all alerts →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Settings */}
              <div className="relative">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => {
                    setShowSettings(!showSettings);
                    setShowNotifications(false);
                    setShowUserMenu(false);
                  }}
                >
                  <Settings className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                </Button>

                {/* Settings Panel */}
                {showSettings && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-gray-200 dark:border-slate-700 z-50 py-2">
                    <div className="px-4 py-2">
                      <button
                        onClick={toggleDarkMode}
                        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors"
                      >
                        {isDarkMode ? (
                          <>
                            <Sun className="h-4 w-4" />
                            <span>Light Mode</span>
                          </>
                        ) : (
                          <>
                            <Moon className="h-4 w-4" />
                            <span>Dark Mode</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* User Avatar */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setShowUserMenu(!showUserMenu);
                    setShowNotifications(false);
                    setShowSettings(false);
                  }}
                  className="w-10 h-10 bg-slate-800 dark:bg-slate-700 rounded-full flex items-center justify-center font-bold text-white text-sm hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
                >
                  JD
                </button>

                {/* User Menu */}
                {showUserMenu && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-gray-200 dark:border-slate-700 z-50 py-2">
                    <div className="px-4 py-3 border-b border-gray-200 dark:border-slate-700">
                      <p className="font-bold text-slate-900 dark:text-white">John Doe</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">john.doe@monitor110.com</p>
                    </div>
                    <div className="px-4 py-2 space-y-1">
                      <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors">
                        <User className="h-4 w-4" />
                        <span>Profile Settings</span>
                      </button>
                      <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 rounded transition-colors">
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Row - Last Updated and Data Coverage */}
          <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-slate-800 pt-3">
            <span>Last updated: {lastUpdated}</span>
            <span className="mt-1 sm:mt-0">Data coverage: {dataCoverage}</span>
          </div>
        </div>
      </nav>
    </>
  );
}

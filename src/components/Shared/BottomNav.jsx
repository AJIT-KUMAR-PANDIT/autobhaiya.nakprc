"use client";

import Link from "next/link";
import { Home, History, Wallet, User } from "lucide-react";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-card-dark border-t border-gray-100 dark:border-gray-800 pb-[env(safe-area-inset-bottom)] pt-2 px-6 z-50 h-[80px]">
      <div>
        {/* \ wether start */}

        <div
          id="ww_59cb013a4ffea"
          v="1.3"
          loc="auto"
          a='{"t":"ticker","lang":"en","sl_lpl":1,"ids":["wl2188"],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"#FDD835","cl_font":"#000000","cl_cloud":"#000000","cl_persp":"#000000","cl_sun":"#000000","cl_moon":"#000000","cl_thund":"#000000"}'
        >
          More forecasts:{" "}
          <a
            href="https://oneweather.org/orlando/30_days/"
            id="ww_59cb013a4ffea_u"
            target="_blank"
          >
            30 day forecast Orlando FL
          </a>
        </div>
        <script
          async
          src="https://app3.weatherwidget.org/js/?id=ww_59cb013a4ffea"
        ></script>
      </div>

      {/* ?wether end */}

      <div className="flex justify-between items-center h-full pb-4">
        <Link
          className="flex flex-col items-center gap-1 text-primary w-16"
          href="/"
        >
          <Home className="w-[26px] h-[26px] fill-current" />
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <Link
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-text-main dark:hover:text-white transition-colors w-16"
          href="/history"
        >
          <History className="w-[26px] h-[26px]" />
          <span className="text-[10px] font-medium">History</span>
        </Link>
        <Link
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-text-main dark:hover:text-white transition-colors w-16"
          href="/payments"
        >
          <Wallet className="w-[26px] h-[26px]" />
          <span className="text-[10px] font-medium">Earnings</span>
        </Link>
        <Link
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-text-main dark:hover:text-white transition-colors w-16"
          href="/profile"
        >
          <User className="w-[26px] h-[26px]" />
          <span className="text-[10px] font-medium">Profile</span>
        </Link>
      </div>
    </nav>
  );
}

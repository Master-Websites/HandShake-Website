'use client'

import { Icon } from '@iconify/react'

export function EditorSidebar() {
  return (
    <div className="absolute left-4 top-4 bottom-4 w-[260px] z-20 flex flex-col gap-3 hidden md:flex pointer-events-none">
      <div className="bg-[#0F0F11] border border-white/5 rounded-2xl p-3 shadow-xl pointer-events-auto backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex gap-x-3 gap-y-3 items-center">
            <div className="w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90ec73f0-6fd3-4d0c-922c-fcc592c983df_320w.webp)] bg-cover bg-center rounded-full ring-[#121214] ring-2" />
            <div>
              <div className="text-xs font-semibold text-gray-200 font-geist">
                Sarah Connor
              </div>
              <div className="text-[10px] font-medium text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20 w-fit mt-1.5 font-geist">
                Growth Plan
              </div>
            </div>
          </div>
          <button className="hover:text-white transition-colors text-gray-500">
            <Icon icon="solar:alt-arrow-down-bold-duotone" className="text-lg" />
          </button>
        </div>

        <div className="relative mb-3 group">
          <input
            type="text"
            placeholder="Search leads..."
            className="text-[11px] focus:outline-none transition-colors font-medium bg-[#1A1A1C] w-full border-white/5 border rounded-lg my-2 pt-2 pr-8 pb-2 pl-9 focus:border-blue-500/50 placeholder:text-gray-600 text-gray-300"
          />
        </div>

        <div className="space-y-0.5">
          <div className="flex items-center justify-between px-2 py-1.5 hover:bg-white/5 rounded cursor-pointer group mb-1">
            <div className="flex items-center gap-2 text-xs font-medium font-geist text-gray-300">
              <Icon icon="solar:users-group-two-rounded-bold-duotone" className="w-3.5 h-3.5 text-gray-500 mr-2" />
              Campaigns
            </div>
            <Icon icon="solar:alt-arrow-down-bold-duotone" className="w-3.5 h-3.5 text-gray-500" />
          </div>
          <div className="pl-2 space-y-0.5">
            <div className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-white/5 cursor-pointer group">
              <div className="flex items-center gap-2.5 text-[11px] group-hover:text-white transition-colors font-geist text-gray-400">
                CEO Outreach Q3
              </div>
              <div className="w-2 h-2 rounded-full border border-gray-700 group-hover:border-gray-500" />
            </div>
            <div className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-white/5 cursor-pointer group">
              <div className="flex items-center gap-2.5 text-[11px] group-hover:text-white transition-colors font-geist text-gray-400">
                Agency Partners
              </div>
              <div className="w-2 h-2 rounded-full border border-gray-700 group-hover:border-gray-500" />
            </div>
            <div className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-white/5 cursor-pointer group">
              <div className="flex items-center gap-2.5 text-[11px] group-hover:text-white transition-colors font-geist text-gray-400">
                Recruiters List
              </div>
              <div className="w-2 h-2 rounded-full border border-gray-700 group-hover:border-gray-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar pointer-events-auto bg-[#121214]/80 border-white/10 border rounded-2xl pt-2 pr-2 pb-2 pl-2 shadow-2xl backdrop-blur-xl">
        <div className="flex hover:bg-white/5 cursor-pointer group transition-colors rounded-lg mb-1 pt-2 pr-2 pb-2 pl-2 items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold font-geist text-gray-300">
            <Icon icon="solar:letter-bold-duotone" className="w-4 h-4 text-gray-500 mr-2" />
            Unified Inbox
          </div>
          <Icon icon="solar:alt-arrow-down-bold-duotone" className="w-4 h-4 text-gray-300" />
        </div>

        <div className="pl-2 space-y-0.5">
          <div className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 cursor-pointer group">
            <div className="flex gap-2.5 text-[11px] font-medium text-blue-100 font-geist items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
              New Reply: Alex M.
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          </div>

          <div className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer group transition-colors">
            <div className="flex gap-2.5 text-[11px] font-medium text-gray-400 group-hover:text-gray-200 font-geist items-center">
              <div className="w-2 h-2 rounded-full bg-transparent mr-2" />
              Connection: Sarah J.
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-800 group-hover:bg-gray-600" />
          </div>

          <div className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-white/5 cursor-pointer group transition-colors">
            <div className="flex gap-2.5 text-[11px] font-medium text-gray-400 group-hover:text-gray-200 font-geist items-center">
              <div className="w-2 h-2 rounded-full bg-transparent mr-2" />
              Follow-up: Mike T.
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-800 group-hover:bg-gray-600" />
          </div>
        </div>
      </div>
    </div>
  )
}


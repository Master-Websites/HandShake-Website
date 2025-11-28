'use client'

import { Icon } from '@iconify/react'

export function EditorToolbar() {
  return (
    <div className="-translate-x-1/2 z-30 flex gap-4 bg-[#121214]/80 border-white/10 border rounded-2xl pt-1.5 pr-3 pb-1.5 pl-3 absolute top-6 left-1/2 shadow-2xl backdrop-blur-xl items-center">
      <div className="flex items-center gap-1">
        <button className="p-2 hover:bg-white/10 rounded-xl hover:text-white transition-colors text-gray-400">
          <Icon icon="solar:hamburger-menu-bold-duotone" className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-white/10 rounded-xl hover:text-white transition-colors text-gray-400">
          <Icon icon="solar:folder-with-files-bold-duotone" className="w-5 h-5" />
        </button>
      </div>
      <div className="w-[1px] h-5 bg-white/10" />
      <div className="flex items-center gap-1">
        <button className="p-2 hover:bg-white/10 rounded-xl hover:text-white transition-colors text-gray-400">
          <Icon icon="solar:box-bold-duotone" className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-white/10 rounded-xl hover:text-white transition-colors text-gray-400">
          <Icon icon="solar:widget-2-bold-duotone" className="w-5 h-5" />
        </button>
      </div>
      <div className="w-[1px] h-5 bg-white/10" />
      <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-white/5 rounded-xl cursor-pointer border border-transparent hover:border-white/5 transition-all group">
        <div className="flex flex-col items-start">
          <span className="text-[10px] font-semibold uppercase tracking-wider font-geist text-gray-500 group-hover:text-gray-400">
            Project
          </span>
          <span className="text-xs font-semibold group-hover:text-white font-geist text-gray-200">
            Drone_Prototype_v4
          </span>
        </div>
      </div>
    </div>
  )
}


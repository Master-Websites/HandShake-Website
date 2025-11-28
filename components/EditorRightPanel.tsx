'use client'

export function EditorRightPanel() {
  return (
    <div className="absolute right-4 top-4 bottom-4 w-[260px] z-20 pointer-events-none hidden lg:block">
      <div className="pointer-events-auto flex flex-col gap-5 no-scrollbar overflow-y-auto bg-[#121214]/80 h-full border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-2xl backdrop-blur-xl">
        <div className="flex border-b border-white/5 mb-0 px-1 pb-3 items-center justify-between">
          <div className="text-xs font-semibold text-gray-200">
            Prospect Details
          </div>
          <button className="text-[10px] bg-blue-600 px-2 py-0.5 rounded text-white">
            Activity Log
          </button>
        </div>

        <div className="flex gap-2 mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold">
            JD
          </div>
          <div>
            <div className="text-xs font-medium text-white">John Doe</div>
            <div className="text-[10px] text-gray-500">CEO @ Acme Corp</div>
          </div>
        </div>

        <div>
          <div className="text-[10px] uppercase font-medium tracking-wider mb-2 px-1 font-geist text-gray-500">
            Location
          </div>
          <div className="space-y-1.5">
            <div className="text-[10px] text-gray-400 py-1 border-b border-white/5">
              Viewing profile...
            </div>
            <div className="text-[10px] text-gray-400 py-1 border-b border-white/5">
              Request sent (Pending)
            </div>
            <div className="text-[10px] text-blue-400 py-1">
              Email found: john@acme.com
            </div>
          </div>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-wider mb-2 font-medium px-1 font-geist text-gray-500">
            Rotation
          </div>
          <div className="space-y-1.5">
            {['X', 'Y', 'Z'].map((axis) => (
              <div key={axis} className="flex items-center gap-2">
                <span className="text-[10px] w-3 font-medium font-geist text-gray-500">
                  {axis}
                </span>
                <div className="flex-1 bg-[#141416] border border-white/5 rounded flex items-center justify-between px-2.5 py-1.5 hover:border-white/20 transition-colors group">
                  <span className="text-[11px] font-mono font-geist text-gray-300">
                    9896 cm
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


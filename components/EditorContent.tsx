'use client'

export function EditorContent() {
  return (
    <div className="flex-1 flex w-full h-full relative perspective-[1000px] items-center justify-center">
      <div className="w-[500px] h-[320px] bg-[#0F0F11]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-6 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-white font-medium">Sender Rotation</h3>
          <select className="bg-white/5 border border-white/10 rounded text-[10px] text-gray-400 px-2 py-1">
            <option>Last 7 Days</option>
          </select>
        </div>
        
        <div className="flex gap-4 mb-6">
          <div className="flex-1 bg-white/5 rounded-lg p-3">
            <div className="text-[10px] text-gray-500 uppercase">Sent</div>
            <div className="text-lg text-white font-semibold">1,240</div>
          </div>
          <div className="flex-1 bg-white/5 rounded-lg p-3">
            <div className="text-[10px] text-gray-500 uppercase">Replied</div>
            <div className="text-lg text-white font-semibold">32%</div>
          </div>
          <div className="flex-1 bg-blue-500/20 border border-blue-500/30 rounded-lg p-3">
            <div className="text-[10px] text-blue-300 uppercase">Booked</div>
            <div className="text-lg text-white font-semibold">18</div>
          </div>
        </div>
        
        <div className="flex-1 flex items-end justify-between gap-2 px-1">
          <div className="w-full bg-blue-500/20 h-[40%] rounded-t-sm relative group">
            <div className="absolute inset-0 bg-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="w-full bg-blue-500/20 h-[60%] rounded-t-sm" />
          <div className="w-full bg-blue-500/20 h-[55%] rounded-t-sm" />
          <div className="w-full bg-blue-500/20 h-[75%] rounded-t-sm" />
          <div className="w-full bg-blue-500/20 h-[45%] rounded-t-sm" />
          <div className="w-full bg-blue-500/20 h-[85%] rounded-t-sm" />
          <div className="w-full bg-blue-500 h-[95%] rounded-t-sm shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
        </div>
      </div>
    </div>
  )
}


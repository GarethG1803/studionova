"use client";

import { useState } from "react";

// Types for tabs
type TabId = "recents" | "designs" | "code" | "branding";

export default function WorkspaceDashboard() {
  const [activeTab, setActiveTab] = useState<TabId>("recents");

  return (
    <div className="relative w-full aspect-[4/3] max-w-[620px] mx-auto bg-[#F7F5F0] rounded-xl flex items-center justify-center p-2 sm:p-4 select-none">
      
      {/* =========================================================================
         DESKTOP WINDOW MOCKUP (Dropbox styled)
         ========================================================================= */}
      <div className="w-[88%] h-[92%] bg-white rounded-lg border border-slate-200 shadow-xl overflow-hidden flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 bg-white">
          {/* Logo / Title */}
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 bg-[#0061FE] rounded flex items-center justify-center text-white text-[10px] font-black">
              N
            </div>
            <span className="text-[11px] font-bold text-slate-800 tracking-tight">NovaDrive</span>
          </div>

          {/* Search Bar */}
          <div className="w-48 h-7 bg-slate-50 border border-slate-200/80 rounded-md flex items-center px-2.5 gap-1.5">
            <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-[10px] text-slate-400">Search</span>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3">
            {/* Grid Icon */}
            <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"/>
            </svg>
            {/* Profile Avatar */}
            <div className="w-5 h-5 rounded-full bg-slate-200 border border-slate-300 overflow-hidden flex items-center justify-center text-[8px] font-bold text-slate-600">
              U
            </div>
          </div>
        </div>

        {/* Dashboard Body */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Left Sidebar */}
          <aside className="w-[125px] border-r border-slate-100 bg-[#FCFCFC] p-3 flex flex-col gap-4">
            {/* Starred section */}
            <div className="space-y-1">
              <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider px-1">
                Workspace
              </div>
              <button className="w-full flex items-center gap-2 px-1.5 py-1 rounded text-left text-[11px] font-bold text-slate-700 bg-slate-100">
                <span>📁</span> All files
              </button>
              <button className="w-full flex items-center gap-2 px-1.5 py-1 rounded text-left text-[11px] font-medium text-slate-500 hover:bg-slate-50">
                <span>⭐️</span> Starred
              </button>
            </div>

            {/* Folders List */}
            <div className="space-y-1.5">
              <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider px-1">
                Folders
              </div>
              <div className="space-y-1 text-[11px] text-slate-600 px-1 font-medium">
                <div className="flex items-center gap-2 hover:text-slate-900 cursor-pointer">
                  <span>📂</span> Glassware Ca...
                </div>
                <div className="flex items-center gap-2 hover:text-slate-900 cursor-pointer">
                  <span>📂</span> Campaign Bud...
                </div>
                <div className="flex items-center gap-2 hover:text-slate-900 cursor-pointer">
                  <span>📂</span> Glass Mockup
                </div>
              </div>
            </div>
          </aside>

          {/* Main Workspace Area */}
          <main className="flex-1 p-4 bg-white flex flex-col overflow-y-auto">
            <h3 className="text-sm font-bold text-slate-800 mb-3">All files</h3>

            {/* Filter Pills */}
            <div className="flex gap-1.5 mb-4">
              <button
                onClick={() => setActiveTab("recents")}
                className={`px-3 py-1 rounded-full text-[9px] font-bold tracking-tight transition ${
                  activeTab === "recents" ? "bg-black text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Recents
              </button>
              <button
                onClick={() => setActiveTab("designs")}
                className={`px-3 py-1 rounded-full text-[9px] font-bold tracking-tight transition ${
                  activeTab === "designs" ? "bg-black text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Designs
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`px-3 py-1 rounded-full text-[9px] font-bold tracking-tight transition ${
                  activeTab === "code" ? "bg-black text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Code
              </button>
              <button
                onClick={() => setActiveTab("branding")}
                className={`px-3 py-1 rounded-full text-[9px] font-bold tracking-tight transition ${
                  activeTab === "branding" ? "bg-black text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Branding
              </button>
            </div>

            {/* Grid of File Cards */}
            <div className="grid grid-cols-2 gap-3">
              {/* Card 1 */}
              <div className="border border-slate-100 rounded-lg overflow-hidden bg-slate-50 hover:shadow-sm transition">
                <div className="aspect-[4/3] bg-gradient-to-tr from-[#1E5F74] to-[#1D2D50] relative p-2 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-xl">
                    📸
                  </div>
                </div>
                <div className="p-2 bg-white">
                  <div className="text-[10px] font-bold text-slate-800 truncate">Intro clip</div>
                  <div className="text-[8px] text-slate-400">MOV • 2:34</div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="border border-slate-100 rounded-lg overflow-hidden bg-slate-50 hover:shadow-sm transition">
                <div className="aspect-[4/3] bg-gradient-to-tr from-[#FF6B6B] to-[#4ECDC4] relative p-2 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-xl">
                    🎨
                  </div>
                </div>
                <div className="p-2 bg-white">
                  <div className="text-[10px] font-bold text-slate-800 truncate">Reference shot 1</div>
                  <div className="text-[8px] text-slate-400">Shared folder • 38 items</div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* =========================================================================
         MOBILE PHONE PREVIEW (Statically Positioned/Layered on Right Edge)
         ========================================================================= */}
      <div className="absolute right-0 bottom-2 w-[115px] sm:w-[135px] bg-[#090A0F] rounded-[24px] p-1 border-4 border-[#090A0F] shadow-2xl overflow-hidden pointer-events-none">
        <div className="bg-white rounded-[19px] overflow-hidden aspect-[9/19] flex flex-col text-slate-800">
          
          {/* Phone Status Bar */}
          <div className="h-4 flex items-center justify-between px-2.5 text-[7px] font-bold text-slate-900">
            <span>9:41</span>
            <div className="w-8 h-1 bg-slate-200 rounded-full" />
            <div className="flex gap-0.5">
              <span className="w-1.5 h-1.5 bg-slate-800 rounded-full scale-75" />
              <span className="w-2.5 h-1.5 bg-slate-800 rounded-sm scale-75" />
            </div>
          </div>

          {/* Mobile UI Content */}
          <div className="flex-1 p-2 flex flex-col bg-white">
            <h4 className="text-[10px] font-bold text-slate-950 mb-1.5">Home</h4>
            
            {/* Mobile Search */}
            <div className="h-5 bg-slate-100 rounded-md flex items-center px-1.5 gap-1 mb-2">
              <span className="text-[8px] text-slate-400">🔍 Search for anything</span>
            </div>

            {/* Recents list */}
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between text-[7px] font-bold text-slate-400 uppercase tracking-wider">
                <span>Recents</span>
                <span className="text-blue-500 font-bold lowercase">See all</span>
              </div>

              {/* Item 1 */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-emerald-100 rounded flex items-center justify-center text-[9px]">
                  🎬
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[8px] font-bold text-slate-800 truncate">Intro clip</div>
                  <div className="text-[6px] text-slate-400">MOV • 2:34</div>
                </div>
                <div className="text-[8px] text-emerald-500">✓</div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center text-[9px]">
                  📄
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[8px] font-bold text-slate-800 truncate">Mood Board.pdf</div>
                  <div className="text-[6px] text-slate-400">Shared folder • 38 items</div>
                </div>
                <div className="text-[8px] text-emerald-500">✓</div>
              </div>
            </div>

            {/* Bottom Nav Bar */}
            <div className="border-t border-slate-100 pt-1 flex justify-around text-[7px] font-bold text-slate-400">
              <span className="text-blue-500">🏠</span>
              <span>📁</span>
              <span>⭐️</span>
              <span>👤</span>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// --- Components ---

const RetroWindow = ({ title, children, className = "" }: { title: string, children: React.ReactNode, className?: string }) => (
  <div className={`retro-window flex flex-col ${className}`}>
    <div className="window-header">
      <span className="flex items-center gap-2">
        <span className="w-3 h-3 bg-white rounded-full border border-gray-600"></span>
        {title}
      </span>
      <div className="window-controls flex gap-1">
        <button aria-label="minimize">_</button>
        <button aria-label="maximize">□</button>
        <button aria-label="close" className="text-red-600">X</button>
      </div>
    </div>
    <div className="p-4 grow overflow-auto">
      {children}
    </div>
  </div>
);

const GlitchTitle = ({ text }: { text: string }) => (
  <h1 
    className="glitch font-impact text-6xl md:text-8xl lg:text-9xl text-center uppercase tracking-tighter" 
    data-text={text}
  >
    {text}
  </h1>
);

// --- Main Page ---

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");
  const contractAddress = "B1wzo9uoyFYyDXASYUYJocWPJgdLdKzSZLUcFxLHpump";

  useEffect(() => {
    // Defer initial update to avoid "synchronous setState in effect" warning
    const timer = setTimeout(() => setTime(new Date().toLocaleTimeString()), 0);
    const interval = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen relative pb-20">
      
      {/* Global CRT Overlay */}
      <div className="fixed inset-0 scanlines pointer-events-none z-50 mix-blend-overlay opacity-30"></div>
      
      {/* --- Sticky Taskbar Nav --- */}
      <nav className="sticky top-0 z-40 bg-(--retro-gray) border-b-2 border-white shadow-lg px-2 py-1 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-(--retro-gray) border-t-2 border-l-2 border-white border-b-2 border-r-2 border-gray-600 px-2 py-1 active:border-t-gray-600 active:border-l-gray-600 active:border-b-white active:border-r-white">
            <span className="text-xl">🦞</span>
            <span className="font-bold text-black">Start</span>
          </button>
          <div className="hidden md:flex h-6 w-[2px] bg-gray-400 mx-2"></div>
          <span className="hidden md:block font-bold text-black uppercase">LobsterOS v1.0</span>
        </div>
        <div className="bg-black px-4 py-1 border-2 border-gray-600 text-(--neon-green) font-mono text-sm min-w-[100px] text-center">
          {time}
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="min-h-screen flex flex-col items-center justify-center px-0 md:px-4 pt-4 md:pt-10 pb-10 md:pb-20 overflow-hidden">
        
        <div className="scale-75 md:scale-100 flex flex-col items-center">
          <GlitchTitle text="DANCING" />
          <GlitchTitle text="LOBSTERS" />
          <div className="mt-4 md:mt-10">
            <GlitchTitle text="$DANCE" />
          </div>
        </div>

        <div className="relative mt-4 md:mt-1 w-full md:w-full max-w-[1000px] aspect-4/3 scale-110 md:scale-100">
          {/* Robust TV Container: No Image Merging */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <Image 
              src="/tv.png" 
              alt="TV Frame" 
              fill 
              className="object-contain" // Ensures the frame fits the container
              priority
            />
          </div>
          
          {/* Video Layer - Sized to fit typically inside a 4:3 CRT frame */}
          <div className="absolute inset-0 z-10 flex items-center justify-center pb-[5%] pr-[10%]">
            <div className="relative w-[45%] h-[40%] bg-black overflow-hidden rounded-lg">
               <Image
                src="/lobster.gif"
                alt="Lobster Dance"
                fill
                className="object-cover opacity-90"
                unoptimized
               />
               <div className="absolute inset-0 bg-(--neon-blue) mix-blend-overlay opacity-20"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-1">
           <a 
              href={`https://dexscreener.com/solana/3er8nhhl6mbaagfremsa4t1vu97nses84lmkzma5tdrx`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-(--neon-green) text-black font-impact text-2xl md:text-4xl px-8 py-4 border-4 border-black box-shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all transform -rotate-2"
           >
             CLICK TO BUY &gt;&gt;&gt;
           </a>
        </div>

      </section>

      {/* --- Content Grid --- */}
      <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 mb-20">
        
        {/* Lore Window */}
        <div className="lg:col-span-8">
          <RetroWindow title="notepad.exe - LORE.TXT" className="h-full min-h-[300px]">
            <div className="font-mono text-sm md:text-base space-y-4">
               <p>&gt; INITIALIZING MEME SEQUENCE...</p>
               <p>&gt; YEAR: 1999</p>
               <p>&gt; SUBJECT: DANCING LOBSTERS</p>
               <br/>
               <p>The judges? Dissolved.</p>
               <p>The case? Dismissed.</p>
               <p>The lobsters? <span className="text-red-600 font-bold bg-yellow-300 px-1">DANCING.</span></p>
               <br/>
               <p>This is not a financial asset. This is a külture artifact preserved on the Solana blockchain. We are here to bring in the dancing lobsters.</p>
               <p className="animate-pulse">_</p>
            </div>
          </RetroWindow>
        </div>

        {/* Stats Window */}
        <div className="lg:col-span-4">
           <RetroWindow title="taskmgr.exe - STATS" className="h-full">
              <div className="grid grid-cols-1 gap-4">
                 <div className="bg-black border border-gray-500 p-2 text-green-400 font-mono">
                    <p>TOTAL SUPPLY: 1,000,000,000</p>
                    <div className="w-full bg-gray-800 h-2 mt-1"><div className="bg-green-500 h-full w-full"></div></div>
                 </div>
                 <div className="bg-black border border-gray-500 p-2 text-green-400 font-mono">
                    <p>BURNED: 2%</p>
                    <div className="w-full bg-gray-800 h-2 mt-1"><div className="bg-green-500 h-full w-[2%]"></div></div>
                 </div>
                  <div className="bg-black border border-gray-500 p-2 text-green-400 font-mono">
                    <p>LP: BURNED</p>
                    <div className="w-full bg-gray-800 h-2 mt-1"><div className="bg-green-500 h-full w-full animate-pulse"></div></div>
                 </div>
                 <div className="bg-black border border-gray-500 p-2 text-green-400 font-mono">
                    <p>TAX: 0/0</p>
                    <div className="w-full bg-gray-800 h-2 mt-1"><div className="bg-green-500 h-full w-[0%]"></div></div>
                 </div>
              </div>
           </RetroWindow>
        </div>

        {/* How To Buy Window */}
        <div className="lg:col-span-12 mt-8">
           <RetroWindow title="wizard.exe - INSTALL $DANCE" className="min-h-[400px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                 <div className="p-4 border-2 border-dashed border-gray-400 hover:bg-white/10 transition">
                    <div className="text-4xl mb-2">💾</div>
                    <h3 className="font-bold mb-2">STEP 1: DOWNLOAD</h3>
                    <p className="text-sm">Install Phantom Wallet extension from the Chrome Web Store.</p>
                 </div>
                 <div className="p-4 border-2 border-dashed border-gray-400 hover:bg-white/10 transition">
                    <div className="text-4xl mb-2">🔋</div>
                    <h3 className="font-bold mb-2">STEP 2: INSERT COIN</h3>
                    <p className="text-sm">Acquire SOL from an exchange and send it to your wallet address.</p>
                 </div>
                 <div className="p-4 border-2 border-dashed border-gray-400 hover:bg-white/10 transition">
                    <div className="text-4xl mb-2">💿</div>
                    <h3 className="font-bold mb-2">STEP 3: EXECUTE</h3>
                    <p className="text-sm">Paste the contract address below into Raydium/Jupiter and swap.</p>
                 </div>
              </div>
              
              <div className="mt-8 bg-[#000080] p-6 text-white text-center border-4 border-double border-white max-w-2xl mx-auto">
                 <p className="mb-2 font-mono text-sm">CONTRACT ADDRESS:</p>
                 <div 
                   onClick={copyToClipboard}
                   className="bg-white text-black font-mono p-2 cursor-pointer hover:bg-yellow-200 active:scale-95 transition select-all break-all border-2 border-black box-shadow-hard"
                 >
                    {contractAddress}
                 </div>
                 {copied && <p className="mt-2 text-(--neon-green) font-bold blink">COPIED TO CLIPBOARD!</p>}
              </div>
           </RetroWindow>
         </div>


        {/* Social Links Section */}
        <div className="lg:col-span-12 mt-8">
           <div className="text-center mb-6">
              <h2 className="font-impact text-4xl md:text-5xl text-(--neon-green) text-stroke mb-2">JOIN THE DANCE</h2>
              <p className="font-mono text-sm opacity-70">Connect with the lobster community</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a 
                href="https://x.com/DLobsters57732" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                 <div className="bg-black border-4 border-(--neon-blue) p-6 text-center hover:bg-(--neon-blue) hover:text-black transition-all duration-300 box-shadow-hard hover:translate-y-[-4px]">
                    <div className="text-5xl mb-3">🐦</div>
                    <h3 className="font-impact text-xl mb-2">X PAGE</h3>
                    <p className="font-mono text-xs opacity-70 group-hover:opacity-100">Follow for updates</p>
                 </div>
              </a>
              <a 
                href="https://x.com/i/communities/2015981886930137133" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                 <div className="bg-black border-4 border-(--neon-pink) p-6 text-center hover:bg-(--neon-pink) hover:text-black transition-all duration-300 box-shadow-hard hover:translate-y-[-4px]">
                    <div className="text-5xl mb-3">👥</div>
                    <h3 className="font-impact text-xl mb-2">X COMMUNITY</h3>
                    <p className="font-mono text-xs opacity-70 group-hover:opacity-100">Join the discussion</p>
                 </div>
              </a>
              <a 
                href="https://t.co/y5bt7XmaSa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                 <div className="bg-black border-4 border-(--neon-green) p-6 text-center hover:bg-(--neon-green) hover:text-black transition-all duration-300 box-shadow-hard hover:translate-y-[-4px]">
                    <div className="text-5xl mb-3">💬</div>
                    <h3 className="font-impact text-xl mb-2">TELEGRAM</h3>
                    <p className="font-mono text-xs opacity-70 group-hover:opacity-100">Chat with lobsters</p>
                 </div>
              </a>
           </div>
        </div>
      
      </section>

      {/* --- Footer --- */}
      <footer className="text-center py-8 text-gray-500 font-mono text-xs">
         <p>Running on LobsterOS [Version 2026.1.0]</p>
         <p>(C) 1999-2026 Dancing Lobster Corp. All rights reserved.</p>
      </footer>

    </div>
  );
}

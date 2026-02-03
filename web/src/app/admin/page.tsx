"use client";
import { useState } from "react";
import { Lock, Camera, Play, Upload, Link as LinkIcon, CheckCircle, Loader2 } from "lucide-react";

export default function ProfessionalAdmin() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [pass, setPass] = useState("");
  const [tab, setTab] = useState<"photo" | "video">("photo");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isAuthorized) {
    return (
      <div className="h-screen bg-black flex items-center justify-center font-sans">
        <div className="w-full max-w-sm p-8 border border-white/10 rounded-3xl text-center">
          <Lock className="mx-auto text-[#D4AF37] mb-4" size={32} />
          <h2 className="text-white text-xl font-bold mb-6">Studio Access</h2>
          <input 
            type="password" 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white mb-4 outline-none focus:border-[#D4AF37]"
            placeholder="Enter Admin Password"
            onChange={(e) => setPass(e.target.value)}
          />
          <button 
            onClick={() => pass === "studio2024" && setIsAuthorized(true)}
            className="w-full bg-[#D4AF37] text-black font-bold py-3 rounded-xl uppercase tracking-widest text-[10px]"
          >Login</button>
        </div>
      </div>
    );
  }

  const handleUpload = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    // FIXED: Added /api/ prefix to the upload routes
    const endpoint = tab === "photo" ? "/api/upload-photo" : "/api/add-video";
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
    
    let options: any = { method: "POST" };
    if (tab === "photo") {
      options.body = formData;
    } else {
      options.headers = { "Content-Type": "application/json" };
      options.body = JSON.stringify(Object.fromEntries(formData));
    }

    try {
      const res = await fetch(`${apiUrl}${endpoint}`, options);
      if (res.ok) {
        setSuccess(true);
        e.target.reset();
        setTimeout(() => setSuccess(false), 3000);
      } else {
        const errorData = await res.json();
        alert(`Upload failed: ${errorData.error}`);
      }
    } catch (err) {
      alert("Could not connect to backend server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-serif italic">Studio Dashboard</h1>
            <p className="text-white/40 text-xs tracking-widest uppercase">Manage Gallery & Films</p>
          </div>
          <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10">
            <button onClick={() => setTab("photo")} className={`px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${tab === "photo" ? "bg-white text-black" : "text-white/40"}`}>Photos</button>
            <button onClick={() => setTab("video")} className={`px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${tab === "video" ? "bg-white text-black" : "text-white/40"}`}>Videos</button>
          </div>
        </header>

        <form onSubmit={handleUpload} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#0d0d0d] p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
          <div className="space-y-6">
            <div>
              <label className="text-[10px] uppercase text-white/40 mb-2 block tracking-widest">Project Title</label>
              <input name="title" required className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-[#D4AF37]" placeholder="E.g. Royal Wedding Recap" />
            </div>

            <div>
              <label className="text-[10px] uppercase text-white/40 mb-2 block tracking-widest">Category</label>
              <select name="category" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none appearance-none">
                <option value="wedding">Wedding</option>
                <option value="prewedding">Pre Wedding</option>
                <option value="engagement">Engagement</option>
                <option value="maternity">Maternity</option>
                <option value="event">Event</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col justify-center border-l border-white/5 pl-8">
            {tab === "photo" ? (
              <div className="text-center">
                <Camera className="mx-auto text-white/20 mb-4" size={48} />
                <label className="cursor-pointer bg-white/5 hover:bg-white/10 border border-dashed border-white/20 rounded-2xl p-8 block transition-all">
                  <Upload className="mx-auto mb-2" size={20} />
                  <span className="text-[10px] uppercase font-bold tracking-widest">Select Image</span>
                  <input name="file" type="file" className="hidden" accept="image/*" required />
                </label>
              </div>
            ) : (
              <div className="text-center">
                <Play className="mx-auto text-white/20 mb-4" size={48} />
                <label className="text-[10px] uppercase text-white/40 mb-2 block tracking-widest text-left">Paste Video URL</label>
                <div className="relative">
                   <LinkIcon className="absolute left-4 top-4 text-white/20" size={16} />
                   <input name="mediaUrl" required className="w-full bg-white/5 border border-white/10 rounded-xl p-4 pl-12 outline-none focus:border-[#D4AF37]" placeholder="https://youtube.com/..." />
                </div>
              </div>
            )}

            <button disabled={loading} className="mt-8 w-full bg-[#D4AF37] text-black font-black py-4 rounded-xl text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:scale-[1.02] transition-all">
              {loading ? <Loader2 className="animate-spin" /> : success ? <CheckCircle /> : "Publish to Site"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
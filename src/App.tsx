import { Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Note from "@/pages/Note";
import { useEffect } from "react";
import { supabase } from "@/supabase/index";

function App() {
   useEffect(() => {
    supabase
      .channel("*")
      .on("postgres_changes", { event: "*", schema: "*" }, (payload) => {
        console.log("Change received!", payload);
      })
      .subscribe((status) => {
        console.log(status);
      });
  }, []);
  return (
    <Routes>
      <Route path="/" index element={<Dashboard />} />
      <Route path="/notes/:id" element={<Note />} />
     <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;

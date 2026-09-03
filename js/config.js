// COLOQUE AQUI AS INFORMAÇÕES DO SEU PROJETO SUPABASE.
// Não use a service_role key no navegador.
// A chave anon/publishable é a apropriada para uso com RLS.

const SUPABASE_URL = "https://eksaahdrejznamdizvzo.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_shEkxO6dl9u6V0iItQmLvA_uQve6qgM";

document.addEventListener("DOMContentLoaded", () => {
  const supabaseClient =
    window.supabase &&
    SUPABASE_URL.includes("supabase.co") &&
    !SUPABASE_URL.includes("eksaahdrejznamdizvzo")
      ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
      : null;
});

// COLOQUE AQUI AS INFORMAÇÕES DO SEU PROJETO SUPABASE.
// Não use a service_role key no navegador.
// A chave anon/publishable é a apropriada para uso com RLS.

const SUPABASE_URL = "https://sapusgngegkzcbxyrtkf.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_8lPX3t2F8l_ttWbsdpvjnQ_P_sHBYok";

document.addEventListener("DOMContentLoaded", () => {
  const supabaseClient =
    window.supabase &&
    SUPABASE_URL.includes("supabase.co") &&
    !SUPABASE_URL.includes("eksaahdrejznamdizvzo")
      ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
      : null;
});

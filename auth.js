const supabaseUrl = "https://qaiiulhqednhemiqetwb.supabase.co";
const supabaseKey = "sb_publishable_ds_1s_9HSMFSLHTKkC3iGQ_H3ahnCRe";


const supabase = window.supabase.createClient(supabaseUrl, supabaseKey)

async function regisztral(email, jelszo) {
  const { error } = await supabase.auth.signUp({
    email: email,
    password: jelszo
  })

  if (error) alert(error.message)
  else alert("Email kiküldve a megadott címre")
}

async function belepes(email, jelszo) {
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: jelszo
  })

  if (error) alert(error.message)
  else window.location.href = "jatek.html"
}

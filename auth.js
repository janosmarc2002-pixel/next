async function regisztralSupabase(email, jelszo) {
  const { error } = await supabase.auth.signUp({
    email: email,
    password: jelszo
  });

  if (error) alert(error.message);
  else alert("Email kiküldve — nézd a postaládát");
}

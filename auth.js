const supabaseUrl = "https://saknuuzaelbbpnylbxxn.supabase.co";
const supabaseKey = "sb_publishable_x-4EHxHCqHA4Xl0XQlBtJg_JKHW6tpM";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const pseudo = document.getElementById("pseudo").value;
  const msg = document.getElementById("message");

  if (!pseudo) {
    msg.innerText = "Pseudo obligatoire";
    return;
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { pseudo: pseudo }
    }
  });

  if (error) {
    msg.innerText = error.message;
  } else {
    msg.innerText = "Inscription réussie. Connecte-toi.";
  }
}

async function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("message");

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    msg.innerText = error.message;
  } else {
    window.location.href = "app.html";
  }
}

import { supabase } from "utils/supabaseClient";

supabase;

export const loginWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  const { error } = await supabase.auth.signIn({ email, password });
  if (error) throw error;
};

export const loginWithGithub = async () => {
  const { user, session, error } = await supabase.auth.signIn({
    provider: "github",
  });
  if (error) throw error;
};

export const registerWithEmail = async (email: string, password: string) => {
  const { user, session, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;
  else console.dir(user);
};

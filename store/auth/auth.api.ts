import { supabase } from "utils/supabaseClient";

async function getProfile() {
  const user = supabase.auth.user();

  if (user === null) throw new Error();

  let { data, error } = await supabase
    .from("profiles")
    .select(`username, website, avatar_url`)
    .eq("id", user.id)
    .single();

  if (error) {
    throw error;
  }

  if (data) {
    return data;
  }
}



async function updateProfile({ username, website, avatar_url }) {

      const user = supabase.auth.user()

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      })

      if (error) {
        throw error
      }
    } catch (error) {
      alert(error.message)
   
  }

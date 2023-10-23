import supabase, { supabaseUrl } from "./supabase";

export async function signUp({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function updateUser({ password, fullName, avatar }) {
  let updateInfo;

  if (password) updateInfo = { password };
  if (fullName) updateInfo = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateInfo);

  if (error) throw new Error(error.message);

  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  if (!avatar) return data;

  const { error: avatarError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (avatarError) throw new Error(error.message);

  const { data: updateData, error: updateError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    });

  // https://whqnltirwhtneqqhnwjt.supabase.co/storage/v1/object/public/avatars/avatar-27b04b02-bec2-4a53-83e6-925d81596ce2-0.5045398393588014

  if (updateError) throw new Error(error.message);

  return updateData;
}

export async function loginUser({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

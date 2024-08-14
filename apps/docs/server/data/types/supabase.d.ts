export interface IAuthSupabase {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: Appmetadata;
  user_metadata: Usermetadata;
  identities: Identity[];
  created_at: string;
  updated_at: string;
  is_anonymous: boolean;
}

interface Identity {
  identity_id: string;
  id: string;
  user_id: string;
  identity_data: function[];
  provider: string;
  last_sign_in_at: string;
  created_at: string;
  updated_at: string;
  email: string;
}

interface Usermetadata {
  avatar_url: string;
  email: string;
  email_verified: boolean;
  full_name: string;
  iss: string;
  name: string;
  phone_verified: boolean;
  preferred_username: string;
  provider_id: string;
  sub: string;
  user_name: string;
}

interface Appmetadata {
  provider: string;
  providers: string[];
}

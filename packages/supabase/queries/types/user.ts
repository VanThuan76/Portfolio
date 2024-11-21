export interface IUser {
  id: string;
  user_metadata: Record<string, any>;
  email: string;
  bio: string | null;
  location: string | null;
  is_verified: boolean;
  last_sign_in_at: string;
  created_at: string;
  updated_at: string;
}

export interface IUserMetadata {
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
  provider: string;
}

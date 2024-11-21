export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      blog: {
        Row: {
          created_at: string;
          created_by: string | null;
          id: string;
          image_url: string;
          is_premium: boolean;
          is_published: boolean;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          created_by?: string | null;
          id?: string;
          image_url: string;
          is_premium?: boolean;
          is_published?: boolean;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          created_by?: string | null;
          id?: string;
          image_url?: string;
          is_premium?: boolean;
          is_published?: boolean;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "blog_created_by_fkey";
            columns: ["created_by"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      blog_category: {
        Row: {
          created_at: string;
          id: number;
          language_code: string | null;
          name: string | null;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          language_code?: string | null;
          name?: string | null;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          language_code?: string | null;
          name?: string | null;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "blog_category_language_code_fkey";
            columns: ["language_code"];
            isOneToOne: false;
            referencedRelation: "config";
            referencedColumns: ["value"];
          },
        ];
      };
      blog_comment: {
        Row: {
          blog_id: string;
          content: string;
          created_at: string;
          id: string;
          like: number;
          order: number | null;
          parent_id: string | null;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          blog_id: string;
          content: string;
          created_at?: string;
          id?: string;
          like?: number;
          order?: number | null;
          parent_id?: string | null;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          blog_id?: string;
          content?: string;
          created_at?: string;
          id?: string;
          like?: number;
          order?: number | null;
          parent_id?: string | null;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "comment_blog_id_fkey";
            columns: ["blog_id"];
            isOneToOne: false;
            referencedRelation: "blog";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "comment_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      blog_meta: {
        Row: {
          blog_id: string | null;
          created_at: string;
          id: number;
          meta_key: string | null;
          meta_value: string | null;
          updated_at: string | null;
        };
        Insert: {
          blog_id?: string | null;
          created_at?: string;
          id?: number;
          meta_key?: string | null;
          meta_value?: string | null;
          updated_at?: string | null;
        };
        Update: {
          blog_id?: string | null;
          created_at?: string;
          id?: number;
          meta_key?: string | null;
          meta_value?: string | null;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "blog_meta_blog_id_fkey";
            columns: ["blog_id"];
            isOneToOne: false;
            referencedRelation: "blog";
            referencedColumns: ["id"];
          },
        ];
      };
      blog_reaction: {
        Row: {
          blog_id: string | null;
          created_at: string;
          id: number;
          is_saved: boolean | null;
          reaction_type: string | null;
          updated_at: string;
          user_id: string | null;
        };
        Insert: {
          blog_id?: string | null;
          created_at?: string;
          id?: number;
          is_saved?: boolean | null;
          reaction_type?: string | null;
          updated_at?: string;
          user_id?: string | null;
        };
        Update: {
          blog_id?: string | null;
          created_at?: string;
          id?: number;
          is_saved?: boolean | null;
          reaction_type?: string | null;
          updated_at?: string;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "blog_reaction_reaction_type_fkey";
            columns: ["reaction_type"];
            isOneToOne: false;
            referencedRelation: "config";
            referencedColumns: ["value"];
          },
          {
            foreignKeyName: "blog_saved_blog_id_fkey";
            columns: ["blog_id"];
            isOneToOne: false;
            referencedRelation: "blog";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "blog_saved_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      blog_tag: {
        Row: {
          blog_id: string | null;
          created_at: string;
          id: number;
          name: string | null;
          updated_at: string;
        };
        Insert: {
          blog_id?: string | null;
          created_at?: string;
          id?: number;
          name?: string | null;
          updated_at?: string;
        };
        Update: {
          blog_id?: string | null;
          created_at?: string;
          id?: number;
          name?: string | null;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "blog_tag_blog_id_fkey";
            columns: ["blog_id"];
            isOneToOne: false;
            referencedRelation: "blog";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "blog_tag_name_fkey";
            columns: ["name"];
            isOneToOne: false;
            referencedRelation: "config";
            referencedColumns: ["value"];
          },
        ];
      };
      blog_translation: {
        Row: {
          blog_id: string | null;
          category_id: number | null;
          content: string | null;
          created_at: string;
          id: number;
          language_code: string | null;
          slug: string | null;
          title: string | null;
          updated_at: string;
        };
        Insert: {
          blog_id?: string | null;
          category_id?: number | null;
          content?: string | null;
          created_at?: string;
          id?: number;
          language_code?: string | null;
          slug?: string | null;
          title?: string | null;
          updated_at?: string;
        };
        Update: {
          blog_id?: string | null;
          category_id?: number | null;
          content?: string | null;
          created_at?: string;
          id?: number;
          language_code?: string | null;
          slug?: string | null;
          title?: string | null;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "blog_translation_blog_id_fkey";
            columns: ["blog_id"];
            isOneToOne: false;
            referencedRelation: "blog";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "blog_translation_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "blog_category";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "blog_translation_language_code_fkey";
            columns: ["language_code"];
            isOneToOne: false;
            referencedRelation: "config";
            referencedColumns: ["value"];
          },
        ];
      };
      config: {
        Row: {
          created_at: string;
          group: string | null;
          id: number;
          image_url: string | null;
          type: string | null;
          updated_at: string;
          value: string | null;
        };
        Insert: {
          created_at?: string;
          group?: string | null;
          id?: number;
          image_url?: string | null;
          type?: string | null;
          updated_at?: string;
          value?: string | null;
        };
        Update: {
          created_at?: string;
          group?: string | null;
          id?: number;
          image_url?: string | null;
          type?: string | null;
          updated_at?: string;
          value?: string | null;
        };
        Relationships: [];
      };
      information: {
        Row: {
          content: string | null;
          created_at: string;
          id: number;
          language_code: string | null;
          order: number | null;
          updated_at: string;
        };
        Insert: {
          content?: string | null;
          created_at?: string;
          id?: number;
          language_code?: string | null;
          order?: number | null;
          updated_at?: string;
        };
        Update: {
          content?: string | null;
          created_at?: string;
          id?: number;
          language_code?: string | null;
          order?: number | null;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "information_language_code_fkey";
            columns: ["language_code"];
            isOneToOne: false;
            referencedRelation: "config";
            referencedColumns: ["value"];
          },
        ];
      };
      project: {
        Row: {
          content: string | null;
          created_at: string;
          description: string;
          finished_date: string;
          id: string;
          language_code: string | null;
          slug: string;
          title: string;
          updated_at: string;
        };
        Insert: {
          content?: string | null;
          created_at?: string;
          description: string;
          finished_date: string;
          id?: string;
          language_code?: string | null;
          slug: string;
          title: string;
          updated_at?: string;
        };
        Update: {
          content?: string | null;
          created_at?: string;
          description?: string;
          finished_date?: string;
          id?: string;
          language_code?: string | null;
          slug?: string;
          title?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "project_language_code_fkey";
            columns: ["language_code"];
            isOneToOne: false;
            referencedRelation: "config";
            referencedColumns: ["value"];
          },
        ];
      };
      project_image: {
        Row: {
          created_at: string;
          id: number;
          image_url: string | null;
          project_id: string | null;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          image_url?: string | null;
          project_id?: string | null;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          image_url?: string | null;
          project_id?: string | null;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "project_image_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "project";
            referencedColumns: ["id"];
          },
        ];
      };
      project_tag: {
        Row: {
          created_at: string;
          id: number;
          name: string | null;
          project_id: string | null;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name?: string | null;
          project_id?: string | null;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string | null;
          project_id?: string | null;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "project_tag_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referencedRelation: "project";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "project_tag_tag_fkey";
            columns: ["name"];
            isOneToOne: false;
            referencedRelation: "config";
            referencedColumns: ["value"];
          },
        ];
      };
      users: {
        Row: {
          avatar_url: string | null;
          bio: string | null;
          created_at: string;
          display_name: string | null;
          email: string | null;
          id: string;
          is_verified: boolean | null;
          last_login: string | null;
          location: string | null;
          role: string;
          user_metadata: Json | null;
          user_name: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          bio?: string | null;
          created_at?: string;
          display_name?: string | null;
          email?: string | null;
          id?: string;
          is_verified?: boolean | null;
          last_login?: string | null;
          location?: string | null;
          role?: string;
          user_metadata?: Json | null;
          user_name?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          bio?: string | null;
          created_at?: string;
          display_name?: string | null;
          email?: string | null;
          id?: string;
          is_verified?: boolean | null;
          last_login?: string | null;
          location?: string | null;
          role?: string;
          user_metadata?: Json | null;
          user_name?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      is_admin: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

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
          id: string;
          image_url: string;
          is_premium: boolean;
          is_published: boolean;
          slug: string;
          title: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          image_url: string;
          is_premium?: boolean;
          is_published?: boolean;
          slug?: string;
          title: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          image_url?: string;
          is_premium?: boolean;
          is_published?: boolean;
          slug?: string;
          title?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      blog_comment: {
        Row: {
          blog_id: string;
          content: string;
          created_at: string;
          id: string;
          like: number;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          blog_id: string;
          content: string;
          created_at?: string;
          id?: string;
          like: number;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          blog_id?: string;
          content?: string;
          created_at?: string;
          id?: string;
          like?: number;
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
      blog_content: {
        Row: {
          blog_id: string;
          content: string | null;
          created_at: string;
          id: string;
          updated_at: string;
        };
        Insert: {
          blog_id?: string;
          content?: string | null;
          created_at?: string;
          id?: string;
          updated_at?: string;
        };
        Update: {
          blog_id?: string;
          content?: string | null;
          created_at?: string;
          id?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "public_blog_content_blog_id_fkey";
            columns: ["blog_id"];
            isOneToOne: false;
            referencedRelation: "blog";
            referencedColumns: ["id"];
          },
        ];
      };
      blog_tag: {
        Row: {
          blog_id: string;
          created_at: string;
          tag_id: string | null;
          updated_at: string;
        };
        Insert: {
          blog_id?: string;
          created_at?: string;
          tag_id?: string | null;
          updated_at?: string;
        };
        Update: {
          blog_id?: string;
          created_at?: string;
          tag_id?: string | null;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "public_blog_tag_blog_id_fkey";
            columns: ["blog_id"];
            isOneToOne: true;
            referencedRelation: "blog";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_blog_tag_tag_id_fkey";
            columns: ["tag_id"];
            isOneToOne: false;
            referencedRelation: "tag";
            referencedColumns: ["id"];
          },
        ];
      };
      infomation_work: {
        Row: {
          created_at: string;
          id: number;
          image_company: string | null;
          image_project_company: string | null;
          task_company: string | null;
          title_company: string | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          image_company?: string | null;
          image_project_company?: string | null;
          task_company?: string | null;
          title_company?: string | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          image_company?: string | null;
          image_project_company?: string | null;
          task_company?: string | null;
          title_company?: string | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      project: {
        Row: {
          content: string | null;
          created_at: string;
          description: string;
          finished_date: string;
          id: string;
          image_url: string;
          slug: string;
          tech_stack: string;
          title: string;
          updated_at: string;
        };
        Insert: {
          content?: string | null;
          created_at?: string;
          description: string;
          finished_date: string;
          id?: string;
          image_url: string;
          slug: string;
          tech_stack: string;
          title: string;
          updated_at?: string;
        };
        Update: {
          content?: string | null;
          created_at?: string;
          description?: string;
          finished_date?: string;
          id?: string;
          image_url?: string;
          slug?: string;
          tech_stack?: string;
          title?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      tag: {
        Row: {
          created_at: string;
          id: string;
          slug: string | null;
          title: string | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          slug?: string | null;
          title?: string | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          slug?: string | null;
          title?: string | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      users: {
        Row: {
          avatar_url: string | null;
          created_at: string;
          display_name: string | null;
          id: string;
          role: string;
        };
        Insert: {
          avatar_url?: string | null;
          created_at?: string;
          display_name?: string | null;
          id?: string;
          role?: string;
        };
        Update: {
          avatar_url?: string | null;
          created_at?: string;
          display_name?: string | null;
          id?: string;
          role?: string;
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

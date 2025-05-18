/*
  # Create diagnostics and contacts tables

  1. New Tables
    - `diagnostico`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `estrategia` (integer)
      - `operacoes` (integer)
      - `financas` (integer)
      - `marketing` (integer)
      - `rh` (integer)
      - `tecnologia` (integer)
      - `media_geral` (float)
      - `observacao` (text)
      
    - `contatos`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `nome` (text)
      - `email` (text)
      - `telefone` (text)
      - `mensagem` (text)
      - `origem` (text)

  2. Security
    - Enable RLS on both tables
    - Add policies for inserting data
*/

DO $$ 
BEGIN
  -- Create diagnostico table if it doesn't exist
  CREATE TABLE IF NOT EXISTS diagnostico (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at timestamptz DEFAULT now(),
    estrategia integer NOT NULL,
    operacoes integer NOT NULL,
    financas integer NOT NULL,
    marketing integer NOT NULL,
    rh integer NOT NULL,
    tecnologia integer NOT NULL,
    media_geral float NOT NULL,
    observacao text
  );

  -- Create contatos table if it doesn't exist
  CREATE TABLE IF NOT EXISTS contatos (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at timestamptz DEFAULT now(),
    nome text NOT NULL,
    email text NOT NULL,
    telefone text,
    mensagem text,
    origem text DEFAULT 'form'
  );

  -- Enable RLS if not already enabled
  IF NOT EXISTS (
    SELECT 1 FROM pg_tables 
    WHERE schemaname = 'public' 
    AND tablename = 'diagnostico' 
    AND rowsecurity = true
  ) THEN
    ALTER TABLE diagnostico ENABLE ROW LEVEL SECURITY;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_tables 
    WHERE schemaname = 'public' 
    AND tablename = 'contatos' 
    AND rowsecurity = true
  ) THEN
    ALTER TABLE contatos ENABLE ROW LEVEL SECURITY;
  END IF;

  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Enable insert for anonymous users" ON diagnostico;
  DROP POLICY IF EXISTS "Enable insert for anonymous users" ON contatos;

  -- Create new policies
  CREATE POLICY "Enable insert for anonymous users" ON diagnostico
    FOR INSERT WITH CHECK (true);

  CREATE POLICY "Enable insert for anonymous users" ON contatos
    FOR INSERT WITH CHECK (true);
END $$;
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

-- Create diagnostico table
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

-- Create contatos table
CREATE TABLE IF NOT EXISTS contatos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  nome text NOT NULL,
  email text NOT NULL,
  telefone text,
  mensagem text,
  origem text DEFAULT 'form'
);

-- Enable RLS
ALTER TABLE diagnostico ENABLE ROW LEVEL SECURITY;
ALTER TABLE contatos ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Enable insert for anonymous users" ON diagnostico
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable insert for anonymous users" ON contatos
  FOR INSERT WITH CHECK (true);
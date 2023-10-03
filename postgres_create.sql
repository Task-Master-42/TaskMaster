CREATE TABLE public.users (
  "user_id" serial NOT NULL,
  "username" text NOT NULL,
  "password" text NOT NULL,
  "hash_id" text,
  CONSTRAINT "user_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.boards (
  "board_id" serial NOT NULL,
  "user_id" serial NOT NULL REFERENCES public.users(user_id),
  "name" text NOT NULL,
  CONSTRAINT "boards_pk" PRIMARY KEY ("board_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.columns (
  "column_id" serial NOT NULL,
  "board_id" serial NOT NULL REFERENCES public.boards(board_id),
  "name" text NOT NULL,
  CONSTRAINT "columns_pk" PRIMARY KEY ("column_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.cards (
  "card_id" serial NOT NULL,
  "column_id" serial NOT NULL REFERENCES public.columns(column_id),
  "name" text NOT NULL,
  "description" text,
  CONSTRAINT "cards_pk" PRIMARY KEY ("card_id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE public.boards ADD CONSTRAINT "users_fk0" FOREIGN KEY ("user_id") REFERENCES public.users("user_id");
ALTER TABLE public.columns ADD CONSTRAINT "boards_fk0" FOREIGN KEY ("board_id") REFERENCES public.boards("board_id");
ALTER TABLE public.cards ADD CONSTRAINT "columns_fk0" FOREIGN KEY ("column_id") REFERENCES public.columns("column_id");
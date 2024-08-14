--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4
-- Dumped by pg_dump version 16.4

-- Started on 2024-08-15 00:46:52

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16441)
-- Name: ProfitRecords; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ProfitRecords" (
    record_id integer NOT NULL,
    product_id integer NOT NULL,
    profit numeric(10,2) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."ProfitRecords" OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16440)
-- Name: ProfitRecords_record_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."ProfitRecords_record_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."ProfitRecords_record_id_seq" OWNER TO postgres;

--
-- TOC entry 4787 (class 0 OID 0)
-- Dependencies: 215
-- Name: ProfitRecords_record_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."ProfitRecords_record_id_seq" OWNED BY public."ProfitRecords".record_id;


--
-- TOC entry 4634 (class 2604 OID 16444)
-- Name: ProfitRecords record_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ProfitRecords" ALTER COLUMN record_id SET DEFAULT nextval('public."ProfitRecords_record_id_seq"'::regclass);


--
-- TOC entry 4781 (class 0 OID 16441)
-- Dependencies: 216
-- Data for Name: ProfitRecords; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ProfitRecords" (record_id, product_id, profit, "createdAt", "updatedAt") FROM stdin;
1	18	100.00	2024-08-14 13:50:59.757+05:30	2024-08-14 13:50:59.757+05:30
2	19	65936.00	2024-08-14 18:48:14.88+05:30	2024-08-14 18:48:14.88+05:30
3	20	25931.00	2024-08-14 18:49:02.034+05:30	2024-08-14 18:49:02.034+05:30
4	21	16056.00	2024-08-14 18:55:27.531+05:30	2024-08-14 18:55:27.531+05:30
5	22	30584.00	2024-08-14 18:56:30.673+05:30	2024-08-14 18:56:30.673+05:30
6	23	173776.00	2024-08-14 19:01:38.103+05:30	2024-08-14 19:01:38.103+05:30
7	24	33703.00	2024-08-14 19:03:12.276+05:30	2024-08-14 19:03:12.276+05:30
8	25	26100.00	2024-08-14 19:04:34.459+05:30	2024-08-14 19:04:34.459+05:30
9	26	1095.00	2024-08-14 19:07:42.428+05:30	2024-08-14 19:07:42.428+05:30
10	27	780031.00	2024-08-14 19:09:37.959+05:30	2024-08-14 19:09:37.959+05:30
11	28	-5558.00	2024-08-14 23:17:17.385+05:30	2024-08-14 23:17:17.385+05:30
12	29	2563.00	2024-08-14 23:25:04.759+05:30	2024-08-14 23:25:04.759+05:30
13	30	5.00	2024-08-14 23:26:20.949+05:30	2024-08-14 23:26:20.949+05:30
14	31	82.00	2024-08-14 23:28:37.337+05:30	2024-08-14 23:28:37.337+05:30
15	32	29406.00	2024-08-14 23:31:33.311+05:30	2024-08-14 23:31:33.311+05:30
16	1	1949.00	2024-08-15 00:38:08.065+05:30	2024-08-15 00:38:08.065+05:30
17	2	26023.00	2024-08-15 00:38:47.365+05:30	2024-08-15 00:38:47.365+05:30
18	3	287.00	2024-08-15 00:39:18.4+05:30	2024-08-15 00:39:18.4+05:30
19	4	767.00	2024-08-15 00:40:06.842+05:30	2024-08-15 00:40:06.842+05:30
20	5	150.00	2024-08-15 00:41:38.587+05:30	2024-08-15 00:41:38.587+05:30
\.


--
-- TOC entry 4788 (class 0 OID 0)
-- Dependencies: 215
-- Name: ProfitRecords_record_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."ProfitRecords_record_id_seq"', 20, true);


--
-- TOC entry 4636 (class 2606 OID 16446)
-- Name: ProfitRecords ProfitRecords_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ProfitRecords"
    ADD CONSTRAINT "ProfitRecords_pkey" PRIMARY KEY (record_id);


-- Completed on 2024-08-15 00:46:52

--
-- PostgreSQL database dump complete
--


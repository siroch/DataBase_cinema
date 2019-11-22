create table stuffs(
    theater_id integer,
    stuff_name varchar(20) not null,
    stock integer,
    broken_rate integer,
    lose_rate integer,
    primary key(theater_id)
);
create table merch(
    st_name varchar(20),
    price integer not null,
    primary key(st_name)
);
create table store (
    theater_id integer,
    stock integer,
    st_name varchar(20),
    foreign key(st_name) references merch(st_name),
    constraint di_merch primary key(theater_id, st_name)
);
create table review (
    movie_id varchar(20),
    rate integer not null,
    wr_review varchar(20) not null,
    wr_date TIMESTAMP,
    primary key(movie_id)
);
create table customer (
    customer_id varchar(20) not null,
    customer_pw varchar(20) not null,
    customer_name varchar(20) not null,
    customer_birth date,
    customer_phone integer,
    monthly_spend integer,
    c_rank integer,
    primary key(customer_id)
);
create table theater (
    theater_id varchar(20) not null,
    region varchar(20) not null,
    _2d integer,
    _3d integer,
    _4d integer,
    primary key(theater_id)
);
create table time_table(
    theater_id varchar(20) not null, 
    screen_num integer not null,
    show_time time not null,
    movie_id varchar(20) not null,
    show_date date not null,
    foreign key (theater_id) references theater(theater_id)
);
create table movie_info(
    movie_id varchar(20) not null,
    movie_title varchar(20) not null,
    age_limit integer,
    genre varchar(20) not null,
    _3d boolean not null,
    _4d boolean not null,
    running_time integer not null,
    director varchar(20) not null,
    main_actor varchar(20) not null,
    country varchar(20) not null,
    opening_day date not null,
    primary key (movie_id)
);
create table reserve_info(
    customer_id varchar(20) not null,
    reserve_id varchar(20) not null,
    people_num integer not null,
    seat_info integer not null,
    screen_num integer not null,
    pay integer not null,
    theater_id varchar(20) not null,
    movie_id varchar(20) not null,
    primary key (customer_id),
    foreign key (movie_id) references movie_info(movie_id),
    foreign key (theater_id) references time_table(theater_id)
);
create table clerk (
    clerk_id varchar(20) not null,
    clerk_pw varchar(20) not null,
    clerk_name varchar(20) not null,
    clerk_birth date not null,
    clerk_phone varchar(20) not null,
    salary integer not null,
    point integer not null,
    work_time time not null,
    theater_id varchar(20) not null,
    primary key(clerk_id),
    foreign key(theater_id) references theater(theater_id)
);
create table working_time (
    clerk_id varchar(20) not null,
    date date not null,
    commute_work datetime not null,
    time_work_off datetime not null,
    primary key(clerk_id)
);
create table manager (
    manager_id varchar(20) not null,
    manager_pw varchar(20) not null, 
    manager_name varchar(20) not null,
    manager_birth date not null,
    manager_phone varchar(20) not null,
    theater_id varchar(20) not null,
    primary key(manager_id),
    foreign key(theater_id) references theater(theater_id)
);
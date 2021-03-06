// ****************
// Replace with fresh
// ****************
var answers = [
{"n": 1, "q": "В разделе GROUP BY можно использовать подзапрос", "a": "Неверно"},
{"n": 2, "q": "При создании каких ограничений в базе автоматически создаются индексы на те же столбцы?", "a": "PRIMARY KEY, UNIQUE"},
{"n": 3, "q": "Сколько строк вернет следующий запрос? SELECT ‘123’ from dual UNION SELECT ‘123’ from dual UNION SELECT ‘125’ from dual", "a": "2"},
{"n": 4, "q": "Для выбора уникальных значений стипендии студентов из таблицы Студенты используется команда:", "a": "SELECT Distinct Стипендия FROM Студенты;"},
{"n": 5, "q": "Какой оператор может использоваться с многострочными подзапросами?", "a": "NOT IN"},
{"n": 6, "q": "Проанализируйте приведенную ниже команду, которая создает таблицу  ORDERS: CREATE TABLE orders (SER_NO NUMBER, ORDER_ID NUMBER, ORDER_DATE DATE NOT NULL STATUS VARCHARD2(10) CHECK (status IN ('CREDIT','CASH')), PROD_ID_NUMBER REFERENCES PRODUCTS(PRODUCT_ID), ORD_TOTAL NUMBER, PRIMARY KEY (order id, order_date)); Для каких колонок будет автоматически создан индекс, когда Вы выполните эту команду?", "a": "ORDER_ID и ORDER_DATE;"},
{"n": 7, "q": "Проанализируйте структуру таблицы  EMPLOYEES: EMPLOYEE_ID NUMBER NOT NULL, Primary Key EMP_NAME VARCHAR2(30) JOB_ID NUMBER SAL NUMBER MGR_ID NUMBER ссылка на столбец EMPLOYEE_ID DEPARTMENT_ID NUMBER Вторичный ключ к колонке  DEPARTMENT_ID таблицы DEPARTMENTS. Вы создали последовательность  EMP_ID_SEQ для того, чтобы внести последовательные значения в столбец EMPLOYEE_ID таблицы EMPLOYEES. Какое утверждение относительно последовательности  EMP_ID_SEQ справедливо?", "a": "Любой другой столбец типа данных NUMBER в Вашей схеме может использовать последовательность EMP_ID_SEQ;"},
{"n": 8, "q": "Следующие запросы эквивалентны: SELECT * FROM employees WHERE (department_id, salary) = (SELECT department_id, salary FROM employees WHERE job_id=’ST_MAN’) и SELECT * FROM employees WHERE department_id = (SELECT department_id FROM employees WHERE job_id=’ST_MAN’) AND salary = (SELECT salary FROM employees WHERE job_id=’ST_MAN’)", "a": "Неверно"},
{"n": 9, "q": "Какое количество записей будет в результате выполнения запроса, в котором использовано кросс-соединение двух таблиц с 10 и 20 записями?", "a": "200;"},
{"n": 10, "q": "Проанализируйте две команды: SELECT last_name, salary , hire_date FROM EMPLOYEES ORDER BY salary DESC; SELECT last_name, salary, hire_date FROM EMPLOYEES ORDER BY 2 DESC; Какое утверждение об этих командах справедливо?", "a": "Результаты выполнения двух команд будут одинаковы;"},
{"n": 11, "q": "Какие строки будут выбраны командой SELECT * FROM  my_table WHERE col NOT IN (7, 4, NULL)? ", "a": "Не будет выбрано ни одной строки;"},
{"n": 12, "q": "При построении иерархических запросов куда следует добавить дополнительные условия для исключения отдельных узлов дерева?", "a": "во фразу WHERE"},
{"n": 13, "q": "Функция TRIM может:", "a": "удалять заданный символ из символьного выражения слева;"},
{"n": 14, "q": "Следующий запрос вернет строки (при условии, что в таблице есть сотрудники, не являющиеся менеджарами, а также есть сотрудники, не имеющие менеджеров)? SELECT last_name FROM employees WHERE employee_id IN (SELECT manager_id FROM employess)", "a": "Верно"},
{"n": 15, "q": "В каком случае Вы будете использовать FULL OUTER JOIN?", "a": "Вы хотите получить полную информацию из двух таблиц;"},
{"n": 16, "q": "Укажите верные варианты запроса для обновления нескольких столбцов в таблице", "a": "UPDATE employees SET (department_id, job_id) = (SELECT 50, ‘SA_REP’ FROM DUAL) where job_id=’ST_MAN’, UPDATE employees SET department_id= (SELECT 50 FROM DUAL), job_id = (SELECT ’SA_ REP’ FROM DUAL), where job_id=’ST_MAN’, UPDATE employees SET department_id= 50, job_id =’SA_ REP’ where job_id=’ST_MAN’"},
{"n": 17, "q": "Какой будет результат следующего запроса? SELECT trunc(35.66) FROM dual", "a": "35"},
{"n": 18, "q": "Слово NULL в разделе VALUES команды INSERT можно использовать для вставки пустых значений", "a": "Верно"},
{"n": 19, "q": "Вы создаете внешнюю таблицу:   CREATE TABLE oldemp ( fname char(25), lname CHAR(25)) ORGANIZATION EXTERNAL (TYPE ORACLE_LOADER DEFAULT DIRECTORY emp_dir ACCESS PARAMETERS (RECORDS DELIMITED BY NEWLINE FIELDS TERMINATED BY ',' (fname POSITION ( 1:20) CHAR, lname POSITION (22:41) CHAR)) LOCATION ('emp.dat'))   Обязательно ли указывать директорию по умолчанию, или этот параметр можно опустить? ", "a": "обязательно"},
{"n": 20, "q": "Вы работаете с таблицами EMPLOYEES и DEPARTMENTS. Вы хотите получить информацию о фамилиях всех сотрудников и о фамилиях начальников сотрудников, а также о названиях отделов, где работают сотрудники. Какой запрос Вы будете использовать?", "a": "SELECT e.last_name, m.last_name, department_name FROM employees e LEFT OUTER JOIN employees m on ( e.managaer_id = m.employee_id) LEFT OUTER JOIN departments d ON (e.department_id = d.department_id);"},
{"n": 21, "q": "Для объединения результирующих наборов двух или более запросов SELECT в один результирующий набор используется оператор:", "a": "UNION;"},
{"n": 22, "q": "Какое приведенное условие эквивалентно WHERE col NOT IN (1, 2, 3)?", "a": "WHERE (col,1) NOT IN ((1,1), (2,1), (3,1));"},
{"n": 23, "q": "В команде SELECT * FROM employees ORDER BY 1; Что означает '1' во фразе ORDER BY? ", "a": "Позиционный указатель;"},
{"n": 24, "q": "В запросе используется шаблон: d03d31d3' Какие из представленных строк подходят под заданный шаблон?", "a": "555.454.567,    55,768,456,    .123.456"},
{"n": 25, "q": "В каком интервале можно задавать даты при использовании типа данных Date?", "a": "1.1.4712 до нашей эры - 31.12.9999 нашей эры;"},
{"n": 26, "q": "Какие из следующих утверждений верны по отношению к простым представлениям?", "a": "Не могут содержать функций, Не могут содержать групповые функции, Позволяют применять операторы DML к представлению"},
{"n": 27, "q": "Допишите команду передачи привилегии на таблицу всем пользователям базы GRANT SELECT ON test1 TO", "a": "public"},
{"n": 28, "q": "Какое служебное слово можно использовать в команде Select при эквивалентном соединении таблиц по столбцам с одинаковыми именами?", "a": "Using;"},
{"n": 29, "q": "Каков максимальный уровень вложенности агрегирующих функций, считая что AGR1(AGR2(Имя_столбца)) –уровень 1; AGR1(AGR2(AGR3(Имя_столбца))) –уровень 2 и т.д.? Выберите ответ:  ", "a": "1;"},
{"n": 30, "q": "Вам необходимо получить сведения о типах данных столбцов представления (view). Из какого системного представления вы будете делать выборку данных?", "a": "USER_TAB_COLUMNS;"},
{"n": 31, "q": "Пользователь Mary имеет представление EMP_DEPT_LOC_VU, которое создано на основе таблиц EMPLOYEES, DEPARTMENTS и LOCATIONS. Она имеет привилегию create public synonym и хочет создать синоним для этого представления, который мог бы использоваться всеми  пользователями базы данных. Какую команду Mary должна использовать для решения этой задачи?", "a": "CREATE PUBLIC SYNONYM EDL_VU FOR emp_dept_loc_vu;"},
{"n": 32, "q": "В разделе ORDER BY можно использовать однострочные функции.", "a": "Верно"},
{"n": 33, "q": "По каким столбцам будет идти группировка, если в разделе GROUP BY указано ROLLUP (manager_id, department_id, job_id)", "a": "(manager_id, department_id, job_id); (manager_id, department_id); (manager_id); ()"},
{"n": 34, "q": "Вы создали последовательность: CREATE SEQUENCE auto_emp INCREMENT BY 10 START WITH 5; Что вы получите при вызове: SELECT auto_emp.CURRVAL FROM dual;", "a": "ошибку"},
{"n": 35, "q": "Данные были удалены из таблицы командой TRUNCATE TABLE. После этого вы можете вернуть их с помощью команды ROLLBACK", "a": "Неверно"},
{"n": 36, "q": "Ограничение PRIMARY KEY допускает хранение пустых значение в столбце", "a": "Неверно"},
{"n": 37, "q": "Какую команду следует использовать, чтобы добавить ограничение внешнего ключа на столбец PERS_ID этой таблицы? ", "a": "ALTER TABLE с фразой ADD;"},
{"n": 38, "q": "Какие из перечисленных привилегий являются объектными?", "a": "ALTER TABLE, SELECT, INSERT"},
{"n": 39, "q": "Что вернет логический оператор OR, если один из сравниваемых столбцов имеет значение NULL, а второй TRUE?", "a": "TRUE"},
{"n": 40, "q": "Вы создали таблицу CREATE TABLE test (id number (3); val varchar2 (50)); Заполнили ее следующими данными: INSERT INTO test VALUES (1, null); INSERT INTO test VALUES (2, null); Вы можете выполнить следующую команду: ALTER TABLE test MODIFY (val date);", "a": "Верно"},
{"n": 41, "q": "В разделе WHERE можно ли использовать групповые функции.", "a": "Неверно"},
{"n": 42, "q": "Вы выполняете команду: INSERT ALL WHEN SAL > 10000 THEN INTO sal_history VALUES (EMPID,HIREDATE,SAL) WHEN MGR > 200 THEN INTO mgr_history VALUES (EMPID,MGR,SAL) SELECT employee_id EMPID,hire_date HIREDATE, salary SAL, manager_id MGR FROM employees WHERE employee_id > 200;   В какие таблицы попадет строка: (300, ‘10.03.1978’, 12000, 201)", "a": "sal_history и mgr_history"},
{"n": 43, "q": "Следующие запросы дают одинаковый результат: SELECT * FROM employess e, departments d и SELECT * FROM employess e CROSS JOIN departments d", "a": "Верно"},
{"n": 44, "q": "Вы пометили столбец dept, как неиспользуемый с помощью команды ALTER TABLE test1 SET UNUSED (dept) После этого вы можете вернуть этот столбец в активное состояние и использовать дальше", "a": "Неверно"},
{"n": 45, "q": "В команде DELETE можно использовать коррелированные подзапросы в разделе WHERE", "a": "Верно"},
{"n": 46, "q": "Какая команда CREATE TABLE правильная?", "a": "D.  CREATE TABLE ord_details (ord_no NUMBER(2), item_no NUMBER(3), ord_date date DEFAULT SYSDATE NOT NULL, CONSTRAINT ord_pk PRIMARY KEY (ord_no, item_no));"},
{"n": 47, "q": "Как удалить таблицу без возможности восстановления (допишите необходимое ключевое слово) DROP TABLE test1", "a": "PURGE"},
{"n": 48, "q": "Функция SUM(*) учитывает строки с пустыми значениями.", "a": "Неверно"},
{"n": 49, "q": "Проанализируйте запрос: SELECT last_name FROM employees WHERE salary IN (SELECT MAX(salary) FROM employees GROUP BY department_id);", "a": "Команда SELECT синтаксически правильная;"},
{"n": 50, "q": "Какие операции можно объединить в команде MERGE", "a": "INSERT, UPDATE, DELETE"},
{"n": 51, "q": "Какое утверждение справедливо относительно операторов, используемых в подзапросах?", "a": "Оператор NOT не может быть использован вместе с операторами ANY и ALL;"},
{"n": 52, "q": "Что вернет команда SELECT TO_CHAR(ADD_MONTHS(TO_DATE('30.12.2011', 'DD.MM.YYYY'), 2), 'DD.MM.YYYY') as RES_DATE from DUAL;", "a": "29.02.2012"},
{"n": 53, "q": "Вам нужно вывести фамилии (last_name) сотрудников, для которых содержится буква “A” во второй позиции. Какой вариант Вы используете? ", "a": "SELECT last_name FROM EMP WHERE last_name LIKE '_A%';"},
{"n": 54, "q": "Какой раздел SELECTа осуществляет операцию соединения?", "a": "JOIN"},
{"n": 55, "q": "LPAD – это:", "a": "функция;"},
{"n": 57, "q": "С помощью какой команды можно перевести столбец типа «строка» в столбец типа «интервал год-месяц»", "a": "TO_YMINTERVAL"},
{"n": 58, "q": "ROWID - это:", "a": "Физический адрес строки;"},
{"n": 59, "q": "Измените приведенную ниже команду так, чтобы пользователь, получивший права на таблицу test1, смог передать эту привилегию другим пользователям базы. В ответе приведите всю команду целиком GRANT SELECT ON test1 TO scott", "a": "GRANT SELECT ON test1 TO scott WITH GRANT OPTION"},
{"n": 60, "q": "Следующий запрос вернет строки (при условии, что в таблице есть сотрудники, не являющиеся менеджарами, а также есть сотрудники, не имеющие менеджеров) SELECT last_name FROM employees WHERE employee_id NOT IN (SELECT manager_id FROM employess)", "a": "Неверно"},
{"n": 61, "q": "При удалении таблицы, последовательность, используемая для заполнения столбца первичного ключа этой таблицы, также удалится", "a": "Неверно"},
{"n": 63, "q": "Вы пометили столбец dept, как неиспользуемый с помощью команды ALTER TABLE test1 SET UNUSED (dept) Теперь вы можете в таблице test1 создать столбец с именем dept", "a": "Верно"},
{"n": 64, "q": "С помощью USING можно ли соединять таблицы по условию неравенства столбцов", "a": "Неверно"},
{"n": 65, "q": "Какие объекты вы видите в системном представлении ALL_TABLES?", "a": "все таблицы, к которым у меня есть доступ"},
{"n": 66, "q": "Вы работаете с таблицами EMPLOYEES и DEPARTMENTS. Вы хотите получить информацию о фамилиях всех сотрудников и о фамилиях начальников сотрудников, а также о названиях отделов, где работают сотрудники. Какой запрос Вы будете использовать?", "a": "SELECT e.last_name, m.last_name, department_name FROM employees e LEFT OUTER JOIN employees m on ( e.managaer_id = m.employee_id) LEFT OUTER JOIN departments d ON (e.department_id = d.department_id);"},
{"n": 67, "q": "В разделе WHERE можно при отборе значений указывать псевдоним столбца из раздела SELECT.", "a": "Неверно"},
{"n": 68, "q": "Условие Стипендия BETWEEN 1000 AND 2000  эквивалентно условию:", "a": "(Стипендия>=1000) AND (Стипендия<=2000);"},
{"n": 69, "q": "Какой тип данных отсутствует среди типов данных СУБД Oracle?", "a": "Boolean;"},
{"n": 70, "q": "Какую команду DML можно использовать для изменения содержимого столбца PRODUCT_NAME существующей таблицы PRODUCT? ", "a": "UPDATE;"},
{"n": 71, "q": "Опишите группировку эквивалентную ROLLUP (a,b,c) с помощью команды GROUPPING SETS", "a": "GROUPING SETS ((a, b, c), (a, b),(a), ())"},
{"n": 73, "q": "Каков будет результат вычисления выражения NULL = NULL?", "a": "UNKNOWN"},
{"n": 74, "q": "Какое утверждение справедливо об агрегатных (групповых) функциях?", "a": "Вы можете передавать имена столбцов, выражения, константы и функции как параметры агрегатных функций;"},
{"n": 75, "q": "Вы создали таблицу CREATE TABLE test (id number (3); val varchar2 (50)); Заполнили ее следующими данными: INSERT INTO test VALUES (1, ‘Hello world’); INSERT INTO test VALUES (2, ‘Some text’); Вы можете выполнить следующую команду: ALTER TABLE test MODIFY (id varchar2(30));", "a": "Неверно"},
{"n": 76, "q": "Вы выполняете команду: INSERT FIRST WHEN SAL > 25000 THEN INTO special_sal VALUES(EMPID, SAL) WHEN SAL > 10000  INTO sal_history VALUES (EMPID,HIREDATE,SAL) WHEN MGR > 200 THEN INTO mgr_history VALUES (EMPID,MGR,SAL) SELECT employee_id EMPID,hire_date HIREDATE, salary SAL, manager_id MGR FROM employees WHERE employee_id > 200;   В какие таблицы попадет строка: (300, ‘10.03.1978’, 12000, 201)", "a": "sal_history\\nВ запросе пропущено слово THEN, лучше уточнить"},
{"n": 77, "q": "Измените приведенную ниже команду так, чтобы при удалении первичного ключа таблицы departments соответствующий вторичный ключ таблицы employees, ссылающийся на столбец первичного ключа departments,  также удалился ALTER TABLE departments DROP PRIMARY KEY В ответе приведите всю команду целиком", "a": "ALTER TABLE departments DROP PRIMARY KEY CASCADE"},
{"n": 78, "q": "Следующая команда выполнится успешно: CREATE TABLE tab_test AS (SELECT employee_id e_id, salary, nvl(commission_pct,0) FROM employees)", "a": "Неверно"},
{"n": 79, "q": "Какой из вариантов автоматической обработки дочерних строк можно использовать  при удалении строк из родительской таблицы или при изменении в строках родительской таблицы значения первичного ключа?", "a": "ON DELETE SET NULL;"},
{"n": 80, "q": "При выборке столбца типа TIMESTAMP WITH LOCAL TIME ZONE Будет выведен часовой пояс", "a": "Неверно"},
{"n": 81, "q": "Выполняются следующие операции: (А) DELETE FROM tab1 WHERE id=1 (B) SAVEPOINT A (C) INSERT INTO TABLE tab2 VALUES (‘1’,’2’,’3’) (D) SAVEPOINT B (E) CREATE TABLE tab3 (id number val varchar2 (15)) Что произойдет при попытке выполнить команду ROLLBACK to SAVEPOINT A", "a": "Будет выдана ошибка, поскольку точки А не существует"},
{"n": 82, "q": "Что получится в результате выполнения выражения INITCAP(UPPER(LOWER('Scott Tiger')))? ", "a": "Scott Tiger;"},
{"n": 83, "q": "Вы создаете внешнюю таблицу:   CREATE TABLE oldemp ( fname char(25), lname CHAR(25)) ORGANIZATION EXTERNAL (TYPE ORACLE_LOADER DEFAULT DIRECTORY emp_dir ACCESS PARAMETERS (RECORDS DELIMITED BY NEWLINE FIELDS TERMINATED BY ',' (fname POSITION ( 1:20) CHAR, lname POSITION (22:41) CHAR)) LOCATION ('emp.dat'))   Что необходимо добавить, чтобы допустить возникновение не более 200 ошибок при загрузке данных из внешнего файла прежде, чем Oracle выдаст ошибку. В ответе укажите только строку, которую необходимо добавить.", "a": "REJECT LIMIT 200"},
{"n": 84, "q": "Запрос построен корректно: SELECT * FROM employees WHERE comissin_pst=NULL", "a": "Неверно"},
{"n": 85, "q": "Какие из команд относятся к командам языка DDL?", "a": "DROP, ALTER, CREATE"},
{"n": 86, "q": "Администратор базы данных вашей компании создает общедоступный синоним с именем HR для таблицы HUMAN_RESOURCES схемы GENERAL. Как пользователь базы данных Вы создаете таблицу с именем HR в Вашей схеме. Что произойдет, если Вы выполните запрос? SELECT * FROM HR;", "a": "Вы получите результаты из таблицы HR, которая принадлежит Вашей схеме;"},
{"n": 87, "q": "Если в таблице deptm3 не заданы значения по умолчанию ни для каких столбцов, что произойдет при выполнении команды: UPDATE deptm3 SET manager_id = DEFAULT WHERE department_id = 10;", "a": "в столбец manager_id вставится пустое значение"},
{"n": 88, "q": "Вам нужно изменить структуру таблицы COMMERCIALS. Столбец DESCRIPTION должен хранить строки длиной до 2000 байт. Сейчас столбец может содержать до 1000 байт. Таблица содержит 2000 строк.  Какой оператор SQL выполнит данное изменение структуры?", "a": "ALTER TABLE commercials MODIFY (description VARCHAR2(2000));"},
{"n": 90, "q": "В запросе используется шаблон: '^d03d3' Какие из представленных строк подходят под заданный шаблон?", "a": "123.567788, .123456789"},
{"n": 91, "q": "Для определения записей присутствующих одновременно в двух или более запросах SELECT используется оператор:", "a": "INTERSECT;"},
{"n": 92, "q": "Что вернет логический оператор AND, если один из сравниваемых столбцов имеет значение NULL, а второй TRUE?", "a": "undefin"},
{"n": 93, "q": "С помощью NATURAL  JOIN можно соединять таблицы по условию неравенства столбцов", "a": "Неверно"},
{"n": 95, "q": "Приведите результат  следующего запроса SELECT ‘ABC’ from dual UNION ALL SELECT ‘EFG’ from dual UNION ALL SELECT ‘CDE’ from dual", "a": "ABC, EFG, CDE"},
{"n": 96, "q": "В разделе WHERE при отборе значений можно указывать столбцы, которые не выбраны в разделе SELECT.", "a": "Верно"},
{"n": 97, "q": "Вы можете изменить представление с помощью команды ALTER", "a": "Неверно"},
{"n": 98, "q": "Какой SQL оператор выводит псевдоним (алиас)  Annual Salary для выражения SALARY*12? ", "a": "SELECT ename, salary*12 ''Annual Salary'' FROM employees;"},
{"n": 99, "q": "При отключении ограничения первичного ключа (ALTER TABLE … DISABLE  CONSTRAINT), уникальные индексы, построенные для этого ограничения также удалятся", "a": "Верно"},
{"n": 101, "q": "Какое утверждение о представлении правильно? ", "a": "Представление может быть создано как внутреннее соединение более двух таблиц;"},
{"n": 102, "q": "Вы пометили столбец dept, как неиспользуемый с помощью команды ALTER TABLE test1 SET UNUSED (dept) Где вы можете увидеть, что этот столбец есть в таблице?", "a": "В системных словарях"},
{"n": 103, "q": "По каким столбцам будет идти группировка, если в разделе GROUP BY указано CUBE (manager_id, department_id, job_id)", "a": "(manager_id, department_id, job_id); (manager_id, department_id); (department_id, job_id); (manager_id, job_id); (manager_id); (department_id); (job_id); ()"},
{"n": 104, "q": "Проанализируйте структуру таблицы EMPLOYEES: EMPLOYEE_ID NUMBER NOT NULL EMP_NAME VARCHAR2(30) JOB_ID VARCHAR2(20) SAL NUMBER MGR_ID NUMBER DEPARTMENT_ID NUMBER Вы хотите создать команду  INSERT, которая при выполнении  должна добавить строку с заданными значениями в таблицу EMPLOYEES. Команда INSERT должна вставить значения в колонки как определено ниже: EMPLOYEE_ID:  Очередное значение последовательности EMP_ID_SEQ; EMP_NAME, JOB_ID:  значение, определенное пользователем через подстановочную переменную; SAL:           2000; MGR_ID:        Значения нет; DEPARTMENT_ID: значение, определенное пользователем через подстановочную переменную; Команда INSERT должна завершиться неудачно, если пользователь подставляет значение, отличное от  20 или 50. Какая команда INSERT удовлетворяет перечисленным требованиям?", "a": "INSERT INTO (SELECT * FROM employees WHERE department_id IN (20,50) WITH CHECK OPTION)VALUES (emp_id_seq.NEXTVAL, '&ename', '&jobid', 2000, NULL, &did);"},
{"n": 105, "q": "Какие из представленных запросов выведут последовательность чисел от 5 до 25?", "a": "SELECT level+4 FROM DUAL CONNECT BY level<=21, SELECT level+4 FROM DUAL CONNECT BY level+4<=25"},
{"n": 106, "q": "Вы можете изменить значение, с которого начинается последовательность (START WITH) после того, как последовательность создана", "a": "Неверно"},
{"n": 107, "q": "Вам нужно подсчитать количество различных окладов всех сотрудников. Какую агрегирующую функцию следует использовать? ", "a": "COUNT(Distinct Salary);"},
{"n": 108, "q": "Какие объекты вы видите в системном представлении USER_TABLES?", "a": "таблицы, которыми я владею"},
{"n": 109, "q": "Сколько цифр до запятой может храниться в столбце типа NUMBER (8,5)?", "a": "3"},
{"n": 110, "q": "Какой будет результат запроса (язык сессии - английский)? SELECT to_char(sysdate, ‘DDSP’) from dual", "a": "TWENTY FIVE"},
{"n": 111, "q": "Какая команда позволяет задать имя ограничению?", "a": "ALTER TABLE student_grades ADD CONSTRAINT student_id_fk FOREIGN KEY (student_id) REFERENCES students(student_id);"},
{"n": 112, "q": "Представление EMP_20 создано с помощью следующего скрипта: CREATE VIEW emp_20 AS SELECT * FROM employees WHERE department_id=20 WITH CHECK OPTION CONSTRAINT emp_20_c Какие из приведенных операций вы можете успешно выполнить с помощью данного представления? Успешно - т.е. без получения ошибок", "a": "UPDATE emp_20 SET department_id =40 WHERE department_id=30, UPDATE emp_20 SET job_id=’SA_REP’ WHERE department_id=20"},
{"n": 113, "q": "Поставьте в соответствие каждой цифре необходимую фразу. Порядок выполнения не коррелированных подзапросов: сначала выполняется (1) (2) раз, затем (3) ", "a": "3 – внешний подзапрос, 1 – внутренний подзапрос, 2 – один раз"},
{"n": 114, "q": "Что выведет данный SELECT: SELECT ROUND(TRUNC(MOD(1600,10),-1),2) FROM dual; ", "a": "0;"},
{"n": 115, "q": "Какой интервальный тип поддерживает СУБД Oracle?", "a": "Interval Year to Month;"},
{"n": 116, "q": "Укажите, какие колонки НЕЛЬЗЯ удалить из таблицы", "a": "Столбец первичного ключа, Столбец, входящий в составное ограничение (ограничение на несколько столбцов)"},
{"n": 117, "q": "Что вернет команда: SELECT '1'+2 FROM dual? ", "a": "3;"},
{"n": 118, "q": "Что вернет логический оператор OR, если один из сравниваемых столбцов имеет значение NULL, а второй FALSE?", "a": "NULL"},
{"n": 119, "q": "В команде UPDATE можно использовать коррелированные подзапросы в разделе SET", "a": "Верно"},
{"n": 120, "q": "Какая команда SQL создает ограничение FOREIGN KEY на колонку DEPTNO таблицы EMP?", "a": "CREATE TABLE EMP (empno NUMBER(4), ename VARCNAR2(35), deptno NUMBER(7,2) CONSTRAINT emp_deptno_fk REFERENCES dept (deptno));"},
{"n": 122, "q": "Какой будет результат запроса, если salary = 5000? SELECT null+salary from dual", "a": "NULL"},
{"n": 123, "q": "Какой будет результат запроса (язык сессии - английский)? SELECT to_char(sysdate, ‘DDth’) from dual", "a": "25TH"},
{"n": 124, "q": "Какую команду SQL можно использовать для удаления представления EMP_DEPT_VU из вашей схемы?", "a": "DROP VIEW emp_dept_vu;"},
{"n": 125, "q": "В какой строке содержится ошибка: 1. CREATE TABLE order*1 ( 2. order# NUMBER(9), 3. cust_id NUMBER(9), 4. date_1 DATE DEFAULT SYSDATE, 5. price NUMBER(5,2));  ?", "a": "1;"},
{"n": 126, "q": "Проанализируйте описание таблицы EMPLOYEES: EMP_ID NUMBER(4) NOT NULL LAST_NAME VARCHAR2(30) NOT NULL FIRST_NAME VARCHAR2(30) DEPT_ID NUMBER(2) JOB_CAT VARCHAR2(30) SALARY NUMBER(8,2) Какая команда показывает номер департамента, минимальную зарплату и максимальную зарплату, выплачиваемую в департаменте, если минимальная зарплата меньше чем 5000, а максимальная больше 15000. ", "a": "SELECT dept_id, MIN(salary), MAX(salary) FROM employees GROUP BY dept_id HAVING MIN(salary) < 5000 AND MAX(salary) > 15000;"},
{"n": 127, "q": "Вы выполняете команду: INSERT ALL WHEN SAL > 10000 THEN INTO sal_history VALUES (EMPID,HIREDATE,SAL) WHEN MGR > 200 THEN INTO mgr_history VALUES (EMPID,MGR,SAL) SELECT employee_id EMPID,hire_date HIREDATE, salary SAL, manager_id MGR FROM employees WHERE employee_id > 200;   В какие таблицы попадет строка: (300, ‘10.03.1978’, 12000, 201)", "a": "sal_history и mgr_history"},
{"n": 128, "q": "Вы создали представление EMP_DEPT_VU, которое содержит три колонки из таблиц EMPLOYEES и DEPARTMENTS: EMPLOYEE_ID, EMPLOYEE_NAME и DEPARTMENT_NAME. Колонка DEPARTMENT_ID таблицы  EMPLOYEES является вторичным ключом к первичному ключу колонки DEPARTMENT_ID таблицы DEPARTMENTS. Вы хотите модифицировать представление, добавив четвертую колонку MANAGER_ID типа NUMBER из таблицы EMPLOYEES. Как Вы можете решить эту задачу?", "a": "CREATE OR REPLACE VIEW emp_dept_vu AS SELECT employee_id, employee_name, department_name, manager_id FROM employees e, departments d WHERE e.department_id = d.department_id;"},
{"n": 129, "q": "Ограничение UNIQUE допускает хранение пустых значение в столбце", "a": "Верно"},
{"n": 130, "q": "Структура таблицы EMP: ENAME VARCHAR2(35), SALARY NUMBER(8,2), HIRE_DATE DATE   Необходимо получить список имен сотрудников, работающих в компании более пяти лет. Какой из операторов выводит необходимый результат? ", "a": "SELECT ENAME FROM EMP WHERE MONTHS_BETWEEN(SYSDATE-HIRE_DATE)/12 > 5;\\nдля ф-ии MONTHS_BETWEEN неверное кол-во аргументов, вероятно надо заменить '-' на ','"},
{"n": 131, "q": "Проанализируйте структуру таблицы STUDENTS: STUDENT_ID NUMBER NOT NULL, Primary Key STUDENT_NAME VARCHAR2(30) COURSE_ID VARCHAR2(10) NOT NULL MARKS NUMBER START_DATE DATE FINISH_DATE DATE Вам необходимо создать отчет о 10 студентах, которые имеют наивысший ранг по курсу  INT_SQL и которые закончили изучение курса в 1999 году. Какая SQL команда решает эту задачу?", "a": "SELECT student_id, marks, ROWNUM ''Rank'' FROM (SELECT student_id, marks FROM students WHERE (finish_date BETWEEN '01-JAN-99 AND '31-DEC-99' AND course_id = 'INT_SQL' ORDER BY marks DESC) WHERE ROWNUM <= 10;"},
{"n": 132, "q": "Сколько строк будет выбрано командой: SELECT * FROM employees WHERE rownum>2; если в таблице employees 20 записей? ", "a": "Ни одной;"},
{"n": 133, "q": "Результат следующих запросов будет одинаков (используется стандартная схема HR). SELECT count(commission_pct) FROM employees SELECT count(*) FROM employees", "a": "Неверно"},
{"n": 135, "q": "Максимальная точность, обеспечиваемая типом данных Timestamp:", "a": "0.000 000 001 с;"},
{"n": 136, "q": "В разделе ORDER BY можно использовать групповые функции.", "a": "Верно"},
{"n": 139, "q": "Для определения записей, присутствующих в одном запросе SELECT за исключением записей, присутствующих в другом запросе, используется оператор: ", "a": "MINUS;"},
{"n": 140, "q": "Структура языка SQL не включает в себя:", "a": "язык анализа данных;"},
{"n": 141, "q": "Как удалить таблицу без возможности восстановления (допишите необходимое ключевое слово) DROP TABLE test1", "a": "PURGE"},
{"n": 142, "q": "Какие из команд относятся к командам языка DML?", "a": "UPDATE, INSERT, MERGE, DELETE"},
{"n": 143, "q": "Вы пометили столбец dept, как неиспользуемый с помощью команды ALTER TABLE test1 SET UNUSED (dept) Теперь вы можете в таблице test1 создать столбец с именем dept", "a": "Верно"},
{"n": 144, "q": "Что такое LOB?", "a": "объект, хранящийся в базе данных;\\nВозможны ещё варианты"},
{"n": 145, "q": "Опишите группировку эквивалентную CUBE (a,b,c) с помощью команды GROUPPING SETS", "a": "GROUPING SETS ((a, b, c), (a, b), (a, c), (b, c),(a), (b), (c), ())"},
{"n": 146, "q": "Какой будет результат запроса? SELECT null||’строка’ from dual", "a": "строка"},
{"n": 147, "q": "Что вернет логический оператор OR, если оба столбца в операторе имеют значение NULL?", "a": "NULL\\nЕсли быть точнее UNKNOWN"},
{"n": 148, "q": "Выберите  символьную функцию: ", "a": "TRIM;"},
{"n": 149, "q": "Вы создали последовательность: CREATE SEQUENCE auto_emp INCREMENT BY 10 START WITH 5; Что вы получите при вызове: SELECT auto_emp.NEXTVAL FROM dual;", "a": "5"},
{"n": 150, "q": "Измените приведенную ниже команду так, чтобы пользователь, получивший права на таблицу test1, смог передать эту привилегию другим пользователям базы. В ответе приведите всю команду целиком GRANT SELECT ON test1 TO scott", "a": "GRANT SELECT ON test1 TO scott WITH GRANT OPTION"},
{"n": 151, "q": "При включении ограничения первичного ключа (ALTER TABLE … ENABLE  CONSTRAINT), создадутся уникальные индексы на столбцы ограничения, если их не было до этого", "a": "Верно"},
{"n": 153, "q": "Что необходимо Вашему запросу к существующему представлению, для того чтобы он выполнился успешно?", "a": "Вы должны иметь привилегию SELECT на представление;"},
{"n": 154, "q": "Вам нужно изменить структуру таблицы COMMERCIALS. Столбец DESCRIPTION должен хранить строки длиной до 2000 байт. Сейчас столбец может содержать до 1000 байт. Таблица содержит 2000 строк.  Какой оператор SQL выполнит данное изменение структуры?", "a": "ALTER TABLE commercials MODIFY (description VARCHAR2(2000));"},
{"n": 155, "q": "Вы выполняете команду: INSERT FIRST WHEN SAL > 25000 THEN INTO special_sal VALUES(EMPID, SAL) WHEN SAL > 10000  INTO sal_history VALUES (EMPID,HIREDATE,SAL) WHEN MGR > 200 THEN INTO mgr_history VALUES (EMPID,MGR,SAL) SELECT employee_id EMPID,hire_date HIREDATE, salary SAL, manager_id MGR FROM employees WHERE employee_id > 200;   В какие таблицы попадет строка: (300, ‘10.03.1978’, 12000, 201)", "a": "sal_history "},
{"n": 156, "q": "Что получится в результате выполнения приведенной ниже команды? SELECT TO_CHAR( TO_DATE('7/1/71', 'MM.DD.RR'), 'DD.MM.YYYY') FROM dual; ", "a": "01.07.1971;"},
{"n": 157, "q": "В разделе SELECT можно использовать групповые функции.", "a": "Верно"},
{"n": 159, "q": "Сколько строк вернет следующий запрос? SELECT ‘123’ from dual UNION ALL SELECT ‘123’ from dual UNION ALL SELECT ‘125’ from dual", "a": "3"},
{"n": 160, "q": "В разделе SELECT можно использовать подзапрос.", "a": "Верно"},
{"n": 161, "q": "Проанализируйте структуру таблицы  EMPLOYEES: EMPLOYEE_ID NUMBER NOT NULL  Primary Key EMP_NAME VARCHAR2(30) JOB_ID VARCHAR2(20) NOT NULL SAL NUMBER MGR_ID NUMBER – Foreign key от колонки EMPLOYEE_ID DEPARTMENT_ID NUMBER foreign  key от колонки  DEPARTMENT_ID таблицы DEPARTMENTS. Вы должны создать представление EMP_VU, которое позволяет пользователю добавлять строки. ", "a": "CREATE VIEW emp_Vu AS SELECT employee_id, emp_name, job_id department_id FROM employees WHERE mgr_id IN (102, 120);\\nМожет и правильно, зависит от других вариантов: раздел WHERE не нужен"},
{"n": 162, "q": "Что получится в результате выполнения выражения INITCAP(UPPER(LOWER('Scott Tiger')))? ", "a": "Scott Tiger;"},
{"n": 163, "q": "При построении иерархических запросов, куда следует добавить дополнительные условия для исключения из выборки отдельных ветвей дерева (узлы со всеми подчинёнными им узлами)?", "a": "во фразу CONNECT BY "},
{"n": 164, "q": "Какую команду DML можно использовать для изменения содержимого столбца PRODUCT_NAME существующей таблицы PRODUCT? ", "a": "UPDATE;"},
{"n": 165, "q": "Каков будет результат вычисления выражения 5 = NULL?", "a": "UNKNOWN"},
{"n": 166, "q": "Какой раздел SELECTа осуществляет операцию выборки?", "a": "WHERE"},
{"n": 167, "q": "Записи можно группировать  по столбцам, которые не указаны в разделе SELECT.", "a": "Верно"},
{"n": 168, "q": "Вы намерены вывести системную дату в формате: 'Monday, 01 June, 2001'. Какой вариант оператора SELECT подходит для этого?", "a": "SELECT TO_CHAR(SYSDATE, 'FMDay, DD Month, YYYY') FROM dual;"},
{"n": 169, "q": "Проанализируйте структуру таблиц EMPLOYEES и NEW_EMPLOYEES: EMPLOYEES EMPLOYEE_ID NUMBER Primary Key FIRST_NAME VARCHARD2(25) LAST_NAME VARCHARD2(25) HIRE_DATE DATE   NEW EMPLOYEES EMPLOYEE_ID NUMBER Primary Key NAME VARCHAR2(60) Какая команда UPDATE правильная?", "a": "UPDATE new_employees SET name = (Select last_name||first_name FROM employees Where employee_id=180) WHERE employee_id =180;"},
{"n": 170, "q": "В базе создано две таблицы: CREATE TABLE parent (p_id number CONSTRAINT PRIMARY KEY, val varchar2 (50)) CREATE TABLE child (ch_id number CONSTRAINT PRIMARY KEY, val varchar2 (50) pr_id number CONSTRAINT REFERENCES parent (p_id) ON DELETE CASCADE) Таблица parent заполнена следующими данными: 1 Один 2 Два 3 Три Таблица child заполнена следующими данными: 1 Первый 1 2 Первая 1 3 Второй 2 Что произойдет при выполнении команды DELETE FROM parent WHERE id=1", "a": "Данные успешно удалятся как из родительской, так и из дочерней таблицы (в таблице child останется только одна строка)"},
{"n": 171, "q": "Вторичный ключ таблицы – это:", "a": "ограничение, обеспечивающее ссылочную целостность данных;"},
{"n": 172, "q": "Результат следующих запросов будет одинаков (используется стандартная схема HR). SELECT count(commission_pct) FROM employees SELECT count(*) FROM employees", "a": "Неверно"},
{"n": 173, "q": "Структура таблицы EMP: ENAME VARCHAR2(35), SALARY NUMBER(8,2), HIRE_DATE DATE   Необходимо получить список имен сотрудников, работающих в компании более пяти лет. Какой из операторов выводит необходимый результат? ", "a": "SELECT ENAME FROM EMP WHERE MONTHS_BETWEEN(SYSDATE-HIRE_DATE)/12 > 5;"},
{"n": 174, "q": "Какое  ограничение может быть объявлено только на уровне столбца? ", "a": "NOT NULL;"},
{"n": 175, "q": "Следующий запрос построен корректно: SELECT * FROM location NATURAL  JOIN departments  USING (location_id)", "a": "Неверно"},
{"n": 176, "q": "Поставьте в соответствие каждой цифре необходимую фразу. Порядок выполнения коррелированных подзапросов: сначала выполняется (1), затем (2) (3) раз ", "a": "2 – внутренний подзапрос, 3 – для каждой строки результата, 1 – внешний подзапрос"},
{"n": 177, "q": "Какую команду SQL можно использовать для удаления таблицы  EMP_DEPT из Вашей схемы? ", "a": "DROP TABLE emp_dept;"},
{"n": 179, "q": "Если в таблице deptm3 не заданы значения по умолчанию ни для каких столбцов, что произойдет при выполнении команды: UPDATE deptm3 SET manager_id = DEFAULT WHERE department_id = 10;", "a": "в столбец manager_id вставится пустое значение"},
{"n": 180, "q": "Таблица  STUDENT_GRADES имеет колонки: STUDENT_ID NUMBER(12) SEMESTER_END DATE GPA NUMBER(4,3) Требуется получить отчет по среднему значению GPA для студентов по семестрам, которые закончились в 2000 году. Какая команда позволяет это сделать?", "a": "   SELECT AVG(gpa) FROM student_grades WHERE semester_end BETWEEN '01-JAN-2000' and '31.DEC.2000';"},
{"n": 181, "q": "Приведите результат  следующего запроса SELECT ‘CDE’ from dual UNION SELECT ‘ABC’ from dual UNION SELECT ‘EFG’ from dual", "a": "ABC, CDE, EFG"},
{"n": 182, "q": "Вы создаете внешнюю таблицу:   CREATE TABLE oldemp ( fname char(25), lname CHAR(25)) ORGANIZATION EXTERNAL (TYPE ORACLE_LOADER DEFAULT DIRECTORY emp_dir ACCESS PARAMETERS (RECORDS DELIMITED BY NEWLINE FIELDS TERMINATED BY ',' (fname POSITION ( 1:20) CHAR, lname POSITION (22:41) CHAR)) LOCATION ('emp.dat'))   Каким образом в исходном файле разделяются столбцы в таблице. Укажите только символ", "a": ", "},
{"n": 183, "q": "При выборке столбца типа TIMESTAMP WITH LOCAL TIME ZONE Будет выведен часовой пояс", "a": "Неверно"},
{"n": 184, "q": "Вы создали таблицу CREATE TABLE test (id number (3); val varchar2 (50)); Заполнили ее следующими данными: INSERT INTO test VALUES (1, ‘Hello world’); INSERT INTO test VALUES (2, ‘Some text’); Можете ли вы выполнить следующую команду: ALTER TABLE test MODIFY (val varchar2(30));", "a": "Верно, можем"},
{"n": 185, "q": "Что выведет данный SELECT: SELECT ROUND(TRUNC(MOD(1600,10),-1),2) FROM dual; ", "a": "0;"},
{"n": 186, "q": "В базе создано две таблицы: CREATE TABLE parent (p_id number CONSTRAINT PRIMARY KEY, val varchar2 (50)) CREATE TABLE child (ch_id number CONSTRAINT PRIMARY KEY, val varchar2 (50) pr_id number CONSTRAINT REFERENCES parent (p_id) ) Таблица parent заполнена следующими данными: 1 Один 2 Два 3 Три Таблица child заполнена следующими данными: 1 Первый 1 2 Первая 1 3 Второй 2 Допишите команду так, чтобы при выполнении команды DELETE FROM parent WHERE id=1 в дочерней таблице в соответствующих строках (в первых двух) значение столбца p_id стало пустым?", "a": "ON DELETE SET NULL"},
{"n": 187, "q": "Что будет выведено указанной ниже командой SQL: SELECT ROUND(45.953, -1), TRUNC(45.936, 2) FROM dual;  ?", "a": "50 и 45.93;"},
{"n": 188, "q": "Конструкция WHERE в операторе SELECT используется для:", "a": "фильтрации записей;"},
{"n": 189, "q": "Что такое DUAL? ", "a": "Таблица;"},
{"n": 190, "q": "С помощью USING можно ли соединять таблицы по условию неравенства столбцов", "a": "Неверно"},
{"n": 191, "q": "Записи можно группировать  по столбцам, которые не указаны в разделе SELECT.", "a": "Верно"},
{"n": 192, "q": "Вы создаете таблицу EMP2 на основе стандартной таблицы схемы HR: CREATE TABLE emp2 AS SELECT * FROM employees Какие при этом будут ограничения на новой таблице?", "a": "not null"},
{"n": 193, "q": "Какую агрегирующую функцию можно применять к полю START_DATE?  Начало формы", "a": "MIN(start_date);\\nещё теоретически можно MAX(start_date) и COUNT(start_date)"},
{"n": 194, "q": "Проанализируйте структуру таблиц EMPLOYEES и NEW_EMPLOYEES: EMPLOYEES EMPLOYEE_ID NUMBER Primary Key FIRST_NAME VARCHARD2(25) LAST_NAME VARCHARD2(25) HIRE_DATE DATE   NEW EMPLOYEES EMPLOYEE_ID NUMBER Primary Key NAME VARCHAR2(60) Какая команда UPDATE правильная?", "a": "UPDATE new_employees SET name = (Select last_name||first_name FROM employees Where employee_id=180) WHERE employee_id =180;"},
{"n": 195, "q": "Вы создали представление EMP_DEPT_VU, которое содержит три колонки из таблиц EMPLOYEES и DEPARTMENTS: EMPLOYEE_ID, EMPLOYEE_NAME и DEPARTMENT_NAME. Колонка DEPARTMENT_ID таблицы  EMPLOYEES является вторичным ключом к первичному ключу колонки DEPARTMENT_ID таблицы DEPARTMENTS. Вы хотите модифицировать представление, добавив четвертую колонку MANAGER_ID типа NUMBER из таблицы EMPLOYEES. Как Вы можете решить эту задачу?", "a": "CREATE OR REPLACE VIEW emp_dept_vu AS SELECT employee_id, employee_name, department_name, manager_id FROM employees e, departments d WHERE e.department_id = d.department_id;\\n!Перед Manager должно быть 'd.'"},
{"n": 196, "q": "Выполняются следующие операции: (А) DELETE FROM tab1 WHERE id=1 (B) SAVEPOINT A (C) INSERT INTO TABLE tab2 VALUES (‘1’,’2’,’3’) (D) SAVEPOINT B (E) INSERT INTO TABLE tab2 VALUES (‘4’,’5’,’6’) Что произойдет при выполнении команды ROLLBACK?", "a": "Произойдет откат базы до команды (A) (все команды – (А), (В), (С) будут отменены)"},
{"n": 197, "q": "Что вернет логический оператор AND, если один из сравниваемых столбцов имеет значение NULL, а второй FALSE?", "a": "FALSE"},
{"n": 198, "q": "Какой оператор необходимо использовать для того, чтобы в результате запроса был получен список отделов, в которых все сотрудники имеют начальников?   SELECT department_id FROM employees ____   SELECT department_id FROM employees WHERE manager_id IS NULL;", "a": "MINUS;"},
{"n": 199, "q": "Какая команда переведет ограничение в рабочее состояние?", "a": "ALTER TABLE table_name ENABLE CONSTRAINT constraint_name;"},
{"n": 200, "q": "Какой будет результат следующего запроса? SELECT trunc(35.478, -1) FROM dual", "a": "30"},
{"n": 201, "q": "Функция AVG(*) учитывает строки с пустыми значениями.", "a": "Неверно"},
{"n": 202, "q": "Вы пометили столбец dept, как неиспользуемый с помощью команды ALTER TABLE test1 SET UNUSED (dept) Где вы можете увидеть, что этот столбец есть в таблице?", "a": "В системных словарях\\nКонкретно USER_UNUSED_COL_TABS"},
{"n": 203, "q": "Пользователь А создал таблицу и передал привилегии на эту таблицу пользователю В с указанием WITH GRANT OPTION. Пользователь В передал привилегии на таблицу пользователю С. Затем пользователь А отнял все привилегии у пользователя В. Что произошло с привилегиями на таблицу у пользователя С", "a": "они также отнялись и у пользователя С"},
{"n": 204, "q": "Данные во внешней таблице можно изменять", "a": "Неверно"},
{"n": 205, "q": "В разделе ORDER BY можно производить сортировку, указывая псевдоним столбца из раздела SELECT.", "a": "Верно"},
{"n": 206, "q": "Какой SQL оператор выводит псевдоним (алиас)  Annual Salary для выражения SALARY*12? ", "a": "SELECT ename, salary*12 'Annual Salary' FROM employees;"},
{"n": 208, "q": "Сколько цифр после запятой может храниться в столбце типа NUMBER (8,5)?", "a": "5"},
{"n": 209, "q": "В подзапросах можно использовать раздел GROUP BY", "a": "Верно"},
{"n": 210, "q": "В разделе HAVING можно использовать подзапрос ", "a": "Верно"},
{"n": 211, "q": "Какой раздел SELECTа осуществляет операцию проекции?e", "a": "SELECT"},
{"n": 212, "q": "В базе создано две таблицы: CREATE TABLE parent (p_id number CONSTRAINT PRIMARY KEY, val varchar2 (50)) CREATE TABLE child (ch_id number CONSTRAINT PRIMARY KEY, val varchar2 (50) pr_id number CONSTRAINT REFERENCES parent (p_id) ) Таблица parent заполнена следующими данными: 1 Один 2 Два 3 Три Таблица child заполнена следующими данными: 1 Первый 1 2 Первая 1 3 Второй 2 Допишите команду так, чтобы при выполнении команды DELETE FROM parent WHERE id=1 в дочерней таблице в соответствующих строках (в первых двух) значение столбца p_id стало пустым?", "a": "ON DELETE SET NULL"},
{"n": 213, "q": "С помощью NATURAL JOIN можно соединить таблицы, которые имеют столбцы с одинаковым именем, но разными типами данных", "a": "Неверно"},
{"n": 214, "q": "Что быстрее: удалить все данные из таблицы с помощью команды DELETE FROM employees или удалить все данные командой TRUNCATE TABLE employees", "a": "TRUNCATE TABLE"},
{"n": 215, "q": "Какое  ограничение может быть объявлено только на уровне столбца? ", "a": "NOT NULL;"},
{"n": 217, "q": "Вы создали последовательность: CREATE SEQUENCE auto_emp INCREMENT BY 10 START WITH 5; Что вы получите при вызове: SELECT auto_emp.NEXTVAL FROM dual;", "a": "5"},
{"n": 218, "q": "Вы пометили столбец dept, как неиспользуемый с помощью команды ALTER TABLE test1 SET UNUSED (dept) После этого вы можете вернуть этот столбец в активное состояние и использовать дальше", "a": "Неверно"},
{"n": 219, "q": "Что такое DUAL? ", "a": "Таблица;"},
{"n": 220, "q": "Проанализируйте приведенную ниже команду, которая создает таблицу  ORDERS: CREATE TABLE orders (SER_NO NUMBER, ORDER_ID NUMBER, ORDER_DATE DATE NOT NULL STATUS VARCHARD2(10) CHECK (status IN ('CREDIT','CASH')), PROD_ID_NUMBER REFERENCES PRODUCTS(PRODUCT_ID), ORD_TOTAL NUMBER, PRIMARY KEY (order id, order_date)); Для каких колонок будет автоматически создан индекс, когда Вы выполните эту команду?", "a": "ORDER_ID и ORDER_DATE;"},
{"n": 221, "q": "В разделе GROUP BY можно при группировке значений указывать псевдоним столбца из раздела SELECT.", "a": "Неверно"},
{"n": 222, "q": "Необходимо изменить структуру таблицы STUDENTS - добавить первичный ключ на столбец STUDENT_ID. Таблица не содержит записей. Какая команда выполняет эту задачу? ", "a": "ALTER TABLE students ADD CONSTRAINT stud_id_pk PRIMARY KEY (student_id);"},
{"n": 223, "q": "Вы создаете внешнюю таблицу:   CREATE TABLE oldemp ( fname char(25), lname CHAR(25)) ORGANIZATION EXTERNAL (TYPE ORACLE_LOADER DEFAULT DIRECTORY emp_dir ACCESS PARAMETERS (RECORDS DELIMITED BY NEWLINE FIELDS TERMINATED BY ',' (fname POSITION ( 1:20) CHAR, lname POSITION (22:41) CHAR)) LOCATION ('emp.dat'))   Каким образом в исходном файле разделяются столбцы в таблице. Укажите только символ", "a": ", "},
{"n": 224, "q": "Структура таблицы EMPLOYEES:  EMPLOYEE_ID NUMBER(4),  LAST_NAME VARCHAR2 (25),  JOB_IDVARCHAR2(10); Нужно найти записи, содержащие текст 'SA_' в столбце JOB_ID. Какую SQL команду Вы используете?", "a": "SELECT employee_id, last_name, job_id FROM employees WHERE job_id LIKE '%SA\\\\_%' ESCAPE '\\\\';"},
{"n": 225, "q": "Структура таблицы СОТРУДНИКИ:  EMPLOYEE_ID число не NULL первичный ключ EMPLOYEE_ID число не NULL первичный ключ LAST_NAME VARCHAR2(30) FIRST_NAME VARCHAR2(30) Job_id НОМЕР SAL НОМЕР MGR_ID НОМЕР литературы EMPLOYEE_ID колонке DEPARTMENT_ID НОМЕР Необходимо создать индекс NAME_IDX по имени и фамилии сотрудника(первый и имя фамилия). Какой вариант Вы используете для этого?", "a": "CREATE INDEX NAME_IDX ON сотрудники(first_name, last_name)"},
{"n": 226, "q": "Какой результат вернет приведенный ниже запрос? WITH dt AS (SELECT TO_DATE('30.01.2012', 'DD.MM.YYYY') AS DATA FROM dual) SELECT TO_CHAR(ADD_MONTHS(ADD_MONTHS(data, 1), 1), 'DD.MM.YYYY') AS res_date FROM dt;", "a": "31.03.2012"},
{"n": 227, "q": "Какой результат вернет приведенный ниже запрос? SELECT MONTHS_BETWEEN(TO_DATE('22.09.2011 00', 'DD.MM.YYYY HH24'), TO_DATE('22.11.2011 12', 'DD.MM.YYYY HH24')) AS B FROM dual; Выберите один ответ: ", "a": "-2"},
{"n": 228, "q": "Необходимо изменит структуру таблицы STUDENTS - добавить первичный ключ на столбец STUDENT_ID. Таблица не содержит записей. Какой оператор выполняет эту задачу? Выберите один ответ:", "a": "ALTER TABLE students ADD CONSTRAINT stud_id_pk PRIMARY KEY (student_id);"},
{"n": 229, "q": "Требуется посчитать сколько сотрудников приписано в данный момент к каждому из отделов, учтя при этом, что в отделе может не быть сотрудников. Какие из приведенных ниже команд правильно решает поставленную задачу? Выберите один или несколько ответов:", "a": "SELECT D.dname, COUNT(E.deptno) FROM dept D, emp E WHERE D.deptno = E.deptno (+) GROUP BY d.dname;\\n\\nSELECT D.dname, COUNT(E.deptno) FROM dept D LEFT OUTER JOIN emp E ON (D.deptno = E.deptno) GROUP BY d.dname;\\n\\nSELECT D.dname, COUNT(CASE WHEN E.deptno = D.deptno THEN 1 END) FROM dept D, emp E GROUP BY d.dname;"},
{"n": 230, "q": "Oracle 11g R2. Таблица EMPLOYEES имеет внешний ключ DEPARTMENT_ID, ссылающийся на столбец DEPARTMENT_ID в таблице DEPARTMENTS: CREATE TABLE departments(…, department_id, CONSTRAINT EMPLOYEES#R#DEPARTMENTS FOREIGN KEY(depatment_id) REFERENCES employees(departments_id) ??? Какой из вариантов автоматической обработки дочерних строк можно вставить вместо знаков вопроса в Oracle 11g R2 при удалении строк из родительской таблицы или при изменении в строках родительской таблицу значения первичного ключа? Выберите один или несколько ответов:", "a": "ON DELETE CASCADE, ON DELETE SET NULL"},
{"n": 231, "q": "Каков будет результат вычисления выражения 5 IS NULL AND 2=3?", "a": "FALSE"},
{"n": 232, "q": "Вам нужно изменить структуру таблицы COMMERCIALS. Столбец DESCRIPTION должен хранить строки длиной до 2000 байт. Сейчас столбец может содержать до 1000 байт. Таблица содержит 2000 строк. Какой оператор SQL выполнит данное изменение структуры", "a": "ALTER TABLE commercials MODIFY (description VARCHAR2(2000));"},
{"n": 233, "q": "Почему крайне желательно использовать список столбцов при кодировании команды INSERT? Пояснение. Нежелательный вариант кодирования: INSERT INTO my_tab SELECT … Желательный вариант кодирования: INSERT INTO my_tab (col_1, col_2, … col_n) SELECT ... Укажите три причины.", "a": "Столбцы, не перечисленные в списке, могут заполняться автоматически по DEFAULT и/или триггерами , Без списка столбцов добавление или удаление столбцов в таблице MY_TAB приведет к ошибкам при попытке выполнения команды INSERT INTO my_tab … , Использование списка столбцов позволяет вводить значения не для всех столбцов"},
{"n": 234, "q": "Какие варианты объявления константы LAST_NAME вызовут ошибку при компиляции?", "a": "Правильный ответ: LAST_NAME CONSTANT VARCHAR2(6) := q'!O'Bryen!'; , LAST_NAME CONSTANT VARCHAR2(7) := q'<O'Bryen]';"},
{"n": 235, "q": "Какой оператор может использоваться с многострочными подзапросами?", "a": "NOT IN"},
{"n": 236, "q": "В таблице EMP есть числовые поля SAL и DEPTNO. Команда SELECT * FROM emp WHERE deptno = 99 не возвращает ни одной строки. Что получится в результате выполнения приведенной ниже команды? SELECT SUM(sal) FROM emp WHERE deptno = 99; Выберите один ответ:", "a": "Будет выведена одна строка, содержащая значение NULL"},
{"n": 237, "q": "Вам необходимо получить сведения о типах данных столбцов индекса. Из какого системного представления вы будете делать выборку данных? Выберите один ответ:", "a": "USER_IND_COLUMNS"},
{"n": 238, "q": "Ограничение целостности (integrity constraint) первичного ключа (primary key) включено (enabled) определено как DEFERRABLE INITIALLY DEFERRED. Последовательно выполняется несколько команд DML (INSERT, UPDATE, DELETE). Когда будет выполняться проверка соблюдения такого ограничения целостности? Выберите один ответ:", "a": "При фиксации транзакции командой COMMIT"},
{"n": 239, "q": "Имеется команда UPDATE: UPDATE my_tab X SET my_col = (SELECT some_val FROM my_tab_2 Y WHERE X.id = Y.id); Что получится в результате выполнения это команды? Выберите один ответ:", "a": "Будут изменены все строки таблицы MY_TAB, поскольку после фразы SET отсутствует фраза WHERE"},
{"n": 240, "q": "Какой из операторов SELECT вернет ‘ello world’ из строки ‘Hello World’? Выберите один ответ:", "a": "SELECT LOWER(TRIM (‘H’ FROM ‘Hello World’)) FROM dual;"},
{"n": 241, "q": "Что вернет команда: SELECT '1'+2 FROM dual; Выберите один ответ:", "a": "3"},
{"n": 242, "q": "Каков будет результат вычисления выражения 5 IS NULL OR 2=3?", "a": "FALSE"},
{"n": 244, "q": "В таблице MY_TAB имеются столбцы ID и NAME. Что получится в результате выполнения приведенной ниже команды SELECT? SELECT name FROM my_tab ORDER BY id;", "a": "Будет выведен результат, отсортированный по столбцу ID"},
{"n": 245, "q": "Какие приведенные ниже условия эквивалентны WHERE col NOT IN (1, 2, 3)? Выберите один или несколько ответов:", "a": "WHERE (col,1) NOT IN ((1,1), (2,1), (3,1)) , WHERE col <> ALL (1, 2, 3)"},
{"n": 247, "q": "Какой оператор SELECT Вам нужно использовать, чтобы получить год из системной даты и отобразить его в формате 1998", "a": "SELECT TO_CHAR(SYSDATE,'yyyy') FROM dual;"},
{"n": 248, "q": "Выберите две символьные функции: Выберите один или несколько ответов:", "a": "REPLACE , TRIM"},
{"n": 249, "q": "SELECT MONTHS_BETWEEN(TO_DATE('22.09.2011 00', 'DD.MM.YYYY HH24'), TO_DATE('22.11.2011 12', 'DD.MM.YYYY HH24')) AS B FROM dual; Выберите один ответ:", "a": "-2"},
{"n": 250, "q": "В схеме SCOTT имеются таблицы MASTER и DETAIL, связанные внешним ключом CREATE TABLE master( id NUMBER(12) , class_id NUMBER(12) , master_name VARCHAR2(50) NOT NULL CONSTRAINT master#U#master_name UNIQUE , CONSTRAINT master#P PRIMARY KEY(id, class_id)); CREATE TABLE detail( id NUMBER CONSTRAINT detail#P PRIMARY KEY , detail_name VARCHAR2(50) NOT NULL CONSTRAINT detail#U#detail_name UNIQUE , master_id NUMBER , master_class_id NUMBER , CONSTRAINT detail#R#master FOREIGN KEY(master_id, master_class_id) REFERENCES master(id, class_id)); Таблица DETAIL не содержит данных, а таблица Правильный ответ: Команда завершится успешно MASTER содержит следующие данные: ID CLASS_ID MASTER_NAME ---------- ---------- ---------- 1 1 Master-1 Name Каков будет результат выполнения следующей команды INSERT? INSERT INTO detail(id, detail_name, master_id, master_class_id) VALUES(1, 'Test Detail-1', 2, NULL);", "a": "Команда завершится успешно"},
{"n": 251, "q": "Возможно ли удаление строк командой MERGE?", "a": "Да"},
{"n": 252, "q": "Что из перечисленного является командой ISQL*Plus?", "a": "DESCRIBE"},
{"n": 253, "q": "Таблица EMP содержит 14 строк. Сколько строк будет выбрано в результате выполнения приведенного ниже запроса? SELECT * FROM emp WHERE ROWNUM = 20;", "a": "0"},
{"n": 254, "q": "Какие из утверждений относительно представлений (view) правильны? (Укажите два) (Баллы засчитываются при выборе всех правильных ответов)", "a": "Представление может быть создано как обьединение (join) двух или более таблиц. , Представление может быть создано как read only."},
{"n": 255, "q": "Внутренний LOB это:", "a": "Данные размещенные в БД"},
{"n": 256, "q": "Столбец таблицы имеет тип LONG. Как изменить его тип данных на CLOB?", "a": "Использовать команду ALTER TABLE … MODIFY …"},
{"n": 257, "q": "Создана и заполнена таблица EMP: CREATE TABLE emp( -- Сотрудники empno NUMBER(4) -- Идентификатор сотрудника , ename VARCHAR2(10) NOT NULL -- Фамилия сотрудника , job VARCHAR2(9) NOT NULL -- Должность ); В столбце JOB таблицы EMP хранятся названия должностей сотрудников. Какие из приведенных ниже команд позволяют выбрать список должностей (все должности по одному разу)?", "a": "SELECT DISTINCT job FROM emp;, SELECT UNIQUE job FROM emp;, , SELECT job FROM emp GROUP BY job; , SELECT job FROM emp X WHERE NOT EXISTS (SELECT * FROM emp Y WHERE X.job=Y.job AND X.rowid < Y.rowid);"},
{"n": 258, "q": "Имеется иерархический запрос, в тексте которого отсутствует фраза START WITH: SELECT LEVEL, empno, ename FROM emp CONNECT BY PRIOR empno = mgr; Что будет построено в результате выполнения этого запроса", "a": "Будут построены все деревья, начинающиеся от каждого из узлов"},
{"n": 259, "q": "Укажите четыре допустимых типа констрейнтов Oracle:", "a": "PRIMARY KEY , CHECK , UNIQUE , NOT NULL"},
{"n": 260, "q": "Структура таблицы STUDENTS: STD_ID NUMBER(4) COURSE_ID VARCHARD2(10) START_DATE DATE END_DATE DATE Какие две аггрегирующие функции можно применять к полю START_DATE? (Баллы засчитываются при выборе всех правильных ответов) Выберитеответ:", "a": "MIN(start_date) , COUNT(start_date)"},
{"n": 261, "q": "DBA выполнил следующую команду SQL: CREATE USER scott IDENTIFIED by tiger; Какие привилегии пользователь Scott получает при этом?", "a": "Никаких"},
{"n": 262, "q": "Можно ли восстановить содержимое таблицы командой FLASHBACK TABLE после удаления всех строк таблицы, выполненного командой TRUNCATE TABLE?", "a": "Нет"},
{"n": 263, "q": "Сколько записей вернет операция CROSS JOIN по двум таблицам, в каждойиз которых по 10- записей?", "a": "100"},
{"n": 264, "q": "Какая строка получится в результате вычисления приведенного ниже выражения? TO_CHAR( TO_DATE('01.10.2059', 'DD.MM.RR'), 'DD.MM.YYYY')", "a": "01.10.2059"},
{"n": 265, "q": "Каков будет результат вычисления выражения 5 = NULL OR 2=3?", "a": "UNKNOWN"},
{"n": 266, "q": "Почему крайне нежелательно использовать фразу NATURAL JOIN в командах SELECT при разработке реальных прикладных систем?", "a": "Добавление в одну из таблиц столбца с таким же именем, какое уже есть у столбца другой соединяемой таблицы, может привести к неверному результату соединения"},
{"n": 267, "q": "Вы набрали в SQL*Plus команду COMMIT WORK; Что произойдет при попытке её выполнения?", "a": "Произойдёт фиксация сделанных ранее изменений данных"},
{"n": 268, "q": "В базе данных прикладной системы имеется таблица PERSONAL. Какую команду следует использовать, чтобы добавить ограничение внешнего ключа на столбец PERS_ID этой таблицы?", "a": "ALTER TABLE с фразой MODIFY"},
{"n": 269, "q": "Какие два оператора корректно показывают количество покупателей?", "a": "SELECT COUNT(customer_id) FROM customers , SELECT COUNT(*) FROM customers;"},
{"n": 270, "q": "Для написания иерархического запроса используется команда SELECT … FROM my_table CONNECT BY <условие>. Если в этой команде не использовать фразу START WITH, то будут построены все соответствующие <условию> деревья, начинающиеся от каждого из узлов?", "a": "Да"},
{"n": 271, "q": "Для каких столбцов будут автоматически созданы индексы? (Выбрать два)", "a": "Составной индекс для ORDER_ID и ORDER_DATE"},
{"n": 272, "q": "Какое из условий приведенных ниже эквивалентно условию WHERE (comm IS NULL OR comm <= 300)?", "a": "SELECT * FROM emp WHERE LNNVL(comm > 300);"},
{"n": 273, "q": "Обращение к какому представлению (view) словаря позволяет посмотреть имена ограничений целостности типа UNIQUE и PRIMARY KEY в схеме данных текущего пользователя?", "a": "USER_CONSTRAINTS"},
{"n": 274, "q": "Ограничение целостности (constraint) имеет состояни DISABLE VALIDATE. Допускается ли какие-либо изменения данных, имеющихся в таблице?", "a": "Нет"},
{"n": 275, "q": "Какой результат вернет приведенный ниже запрос? WITH dt AS (SELECT TO_DATE('30.12.2011', 'DD.MM.YYYY') AS DATA FROM DUAL) SELECT TO_CHAR( TRUNC( ADD_MONTHS(data, 2), 'MM'), 'DD.MM.YYYY') as RES_DATE from DT;", "a": "01.02.2012"},
{"n": 276, "q": "Каков будет результат вычисления выражения 5 = NULL AND 2=2?", "a": "UNKNOWN"},
{"n": 277, "q": "Таблица EMP содержит 14 строк. Сколько строк будет выбрано в результате выполнения приведенного ниже запроса? SELECT * FROM emp WHERE ROWNUM = 0;", "a": "0"},
{"n": 278, "q": "Какой результат вернет приведенный ниже запрос? WITH dt AS (SELECT TO_DATE('30.01.2012', 'DD.MM.YYYY') AS DATA FROM dual) SELECT TO_CHAR(ADD_MONTHS(ADD_MONTHS(data, 1), 1), 'DD.MM.YYYY') AS res_date FROM dt;", "a": "31.03.2012"},
{"n": 279, "q": "Пользователь хочет переписать запрос SELECT employee_id AS id, last_name FROM HR.EMPLOYEES ORDER BY 1; с использованием конструкции MODEL. Выберете правильный вариант (варианты): Выберите один или несколько ответов:", "a": "d, e"},
{"n": 280, "q": "ользователь хочет переписать запрос SELECT employee_id, last_name, NULL AS Nothing FROM HR.EMPLOYEES ORDER BY 1; с использованием конструкции MODEL. Выберете правильный вариант (варианты): Выберите один или несколько ответов:", "a": "a. Все перечисленные варианты неправильны."},
{"n": 281, "q": "TMP2 AS (SELECT EID, RANK() OVER(ORDER BY SAL) RNK, DENSE_RANK() OVER(PARTITION BY DID ORDER BY SAL) DRNK FROM TMP) SELECT RNK, DRNK FROM TMP2 WHERE EID = 5; Что выведется в результате запроса? Выберете правильный вариант (варианты): Выберите один или несколько ответов:", "a": "e. 3 и 1 соответственно"},
{"n": 282, "q": "TMP2 AS (SELECT EID, TRUNC(AVG(SAL) OVER(ORDER BY DID ROWS 2 PRECEDING)) AVG FROM TMP) SELECT AVG FROM TMP2 WHERE EID = 5; Что выведется в результате запроса? Выберете правильный вариант (варианты):Выберите один или несколько ответов:", "a": "e. 233"},
{"n": 283, "q": "TMP2 AS (SELECT EID, RANK() OVER(PARTITION BY DID ORDER BY SAL) RNK, DENSE_RANK() OVER(ORDER BY DID) DRNK FROM TMP) SELECT RNK, DRNK FROM TMP2 WHERE EID = 5; Что выведется в результате запроса? Выберете правильный вариант (варианты):", "a": "h. 1 и 2 соответственно"},
{"n": 284, "q": "SELECT employee_id, last_name, salary FROM HR.EMPLOYEES ORDER BY 1;", "a": "Все перечисленные варианты неправильны"},
{"n": 285, "q": "Пользователь посмотрел, какая зарплата у сотрудников с JOB_ID = 'AD_VP' - запрос 1: SELECT job_id, last_name, salary FROM HR.EMPLOYEES WHERE job_id = 'AD_VP'", "a": "Все перечисленные варианты неправильны"},
{"n": 286, "q": "Пользователь хочет переписать запрос SELECT employee_id, 'Nothing' AS last_name FROM HR.EMPLOYEES UNION ALL SELECT NULL, 'Nothing' AS last_name FROM DUAL ORDER BY 1; с использованием конструкции MODEL.", "a": "a,c"},
{"n": 287, "q": "При построении иерархических запросов куда следует добавить дополнительные условия для исключения отдельных узлов дерева (но не веток целиком)?", "a": "Во фразу WHERE"},
{"n": 288, "q": "В запросе используется шаблон: '^[a-z0-9][a-z0-9.-]*[a-z0-9]'", "a": "a,b,c,d,e,f,h"},
{"n": 289, "q": "В запросе используется шаблон: '((^[a-zA-Z0-9][a-zA-Z0-9.-]*[a-zA-Z0-9])|(^[a-zA-Z0-9]))", "a": "a,b,d,e,f,g,h,i"},
{"n": 290, "q": "Пользователь делает запрос WITH TMP AS (SELECT 1 EID, 1 DID, 100 SAL FROM DUAL UNION ALL SELECT 2, 1, 100 FROM DUAL UNION ALL SELECT 3, 1, 200 FROM DUAL UNION ALL SELECT 4, 2, 300 FROM DUAL UNION ALL SELECT 5, 2, 200 FROM DUAL), TMP2 AS (SELECT EID, SUM(SAL) OVER(ORDER BY SAL) SUM FROM TMP) SELECT SUM FROM TMP2 WHERE EID = 5;", "a": "600"},
{"n": 291, "q": "WITH TMP AS (SELECT 1 ID1, 3 ID2, 2 ID3 FROM DUAL UNION ALL SELECT 2, 1, 3 FROM DUAL UNION ALL SELECT 3, 2, 4 FROM DUAL UNION ALL SELECT 4, 4, NULL FROM DUAL) SELECT ID2 FROM TMP WHERE ID2 != 2 CONNECT BY PRIOR ID1 = ID3 AND ID2 != 2; Сколько строчек вернет запрос?", "a": "6"},
{"n": 292, "q": "Как переписать следующий запрос SELECT MANAGER_ID, DEPARTMENT_ID, SUM(SALARY) FROM EMPLOYEES GROUP BY ROLLUP(MANAGER_ID), CUBE(MANAGER_ID, DEPARTMENT_ID); Через обычные GROUP BY и соединения (UNION ALL и UNION)", "a": "d,e"},
{"n": 293, "q": "Пользователь делает запрос WITH TMP AS (SELECT 1 EID, 1 DID, 100 SAL FROM DUAL UNION ALL SELECT 2, 1, 100 FROM DUAL UNION ALL SELECT 3, 1, 200 FROM DUAL UNION ALL SELECT 4, 2, 300 FROM DUAL UNION ALL SELECT 5, 2, 200 FROM DUAL), TMP2 AS (SELECT EID, SUM(SAL) OVER(ORDER BY DID) SUM FROM TMP) SELECT SUM FROM TMP2 WHERE EID = 5;", "a": "900"},
{"n": 294, "q":"SELECT MANAGER_ID, DEPARTMENT_ID, SUM(SALARY) FROM EMPLOYEES GROUP BY ROLLUP(MANAGER_ID, DEPARTMENT_ID), CUBE(MANAGER_ID, DEPARTMENT_ID); Через обычные GROUP BY и соединения (UNION ALL и UNION)", "a":"a. Нужно использовать соединения группировок GROUP BY manager_id и GROUP BY department_id, manager_id и GROUP BY manager_id, department_id и GROUP BY(). b. Нужно использовать соединения группировок GROUP BY manager_id и GROUP BY manager_id, department_id и GROUP BY()."},
{"n": 295, "q":"WITH TMP AS (SELECT 1 EID, 1 DID, 100 SAL FROM DUAL UNION ALL SELECT 2, 1, 100 FROM DUAL UNION ALL SELECT 3, 1, 200 FROM DUAL UNION ALL SELECT 4, 2, 300 FROM DUAL UNION ALL SELECT 5, 2, 200 FROM DUAL), TMP2 AS (SELECT EID, COUNT(SAL) OVER(PARTITION BY DID ORDER BY DID) SUM FROM TMP) SELECT SUM FROM TMP2 WHERE EID = 5;", "a":"b. 2"},
{"n": 296, "q":"WITH TMP AS (SELECT 1 EID, 1 DID, 100 SAL FROM DUAL UNION ALL SELECT 2, 1, 100 FROM DUAL UNION ALL SELECT 3, 1, 200 FROM DUAL UNION ALL SELECT 4, 2, 300 FROM DUAL UNION ALL SELECT 5, 2, 200 FROM DUAL), TMP2 AS (SELECT EID, TRUNC(AVG(SAL) OVER(ORDER BY SAL RANGE 2 PRECEDING)) AVG FROM TMP) SELECT AVG FROM TMP2 WHERE EID = 5;", "a":"a. 200"},
{"n": 297, "q":"WITH TMP AS (SELECT 1 ID1, 3 ID2, 2 ID3 FROM DUAL UNION ALL SELECT 2, 1, 3 FROM DUAL UNION ALL SELECT 3, 2, 4 FROM DUAL UNION ALL SELECT 4, 4, NULL FROM DUAL) SELECT ID2 FROM TMP CONNECT BY PRIOR ID1 = ID3;", "a":"e. 10"},
{"n": 298, "q":"EMPLOYEE_ID NOT NULL NUMBER(6)(Primary Key) FIRST_NAME VARCHAR2(20) LAST_NAME NOT NULL VARCHAR2(25) EMAIL NOT NULL VARCHAR2(25) PHONE_NUMBER VARCHAR2(20) HIRE_DATE NOT NULL DATE JOB_ID NOT NULL VARCHAR2(10) SALARY NUMBER(8,2) COMMISSION_PCT NUMBER(2,2) MANAGER_ID NUMBER(6) DEPARTMENT_ID NUMBER(4) Пользователь хочет переписать запрос SELECT employee_id, NULL AS last_name FROM HR.EMPLOYEES ORDER BY 1; с использованием конструкции MODEL.", "a":"c. Все перечисленные варианты неправильны."},
{"n": 299, "q":"WITH TMP AS (SELECT 1 ID1, 3 ID2, 2 ID3 FROM DUAL UNION ALL SELECT 2, 1, 3 FROM DUAL UNION ALL SELECT 3, 2, 4 FROM DUAL UNION ALL SELECT 4, 4, NULL FROM DUAL) SELECT ID2 FROM TMP CONNECT BY PRIOR ID1 = ID3; Сколько строчек вернет запрос?", "a":"e. 10"},
{"n": 300, "q":"Пользователь хочет переписать запрос SELECT employee_id, NULL AS last_name FROM HR.EMPLOYEES ORDER BY 1; с использованием конструкции MODEL.", "a":"c. Все перечисленные варианты неправильны."},
{"n": 301, "q":"SELECT EID, COUNT(SAL) OVER(PARTITION BY DID ORDER BY SAL) SUM", "a":"e. 1"},
{"n": 302, "q":"SELECT EID, SUM(SAL) OVER(ORDER BY DID RANGE 2 PRECEDING) SUM", "a":"a. 900"},
{"n": 303, "q":"В запросе используется шаблон:'^(([a-z0-9]{1}[.a-z0-9]{1})|([a-z0-9]{1}))' Какие из представленных строк подходят под заданный шаблон?", "a":"a. ab-12; b. ab; c. a1b2; e. 1.a; f. a.1; g. 12-ab; h. 12; i. 1a2b"},
{"n": 304, "q":"SELECT EID, TRUNC(AVG(SAL) OVER(ORDER BY DID RANGE 2 PRECEDING)) AVG", "a":"b. 180"},
{"n": 305, "q":"Какие из представленных строк подходят под заданный шаблон? '^([-.][a-z0-9.-]*?[^-.]+|[a-z0-9]{1})' Выберите один или несколько ответов:", "a":"ab; a1b2; 1.a; 1a2b; ab-12; a.1; 12-ab"},
{"n": 306, "q":"Дана структура таблицы HR.EMPLOYEES: EMPLOYEE_ID NOT NULL NUMBER(6)(Primary Key) FIRST_NAME VARCHAR2(20) LAST_NAME NOT NULL VARCHAR2(25) EMAIL NOT NULL VARCHAR2(25) PHONE_NUMBER VARCHAR2(20) HIRE_DATE NOT NULL DATE JOB_ID NOT NULL VARCHAR2(10) SALARY NUMBER(8,2) COMMISSION_PCT NUMBER(2,2) MANAGER_ID NUMBER(6) DEPARTMENT_ID NUMBER(4) Пользователь хочет переписать запрос SELECT NULL AS employee_id, last_name FROM HR.EMPLOYEES WHERE employee_id = 100 ORDER BY 1;с использованием конструкции MODEL. Выберете правильный вариант (варианты): Выберите один или несколько ответов:", "a":"e. Все перечисленные варианты неправильны."},
{"n": 307, "q":"WITH TMP AS ( SELECT 1 EID, 1 DID, 100 SAL FROM DUAL UNION ALL SELECT 2, 1, 100 FROM DUAL UNION ALL SELECT 3, 1, 200 FROM DUAL UNION ALL SELECT 4, 2, 300 FROM DUAL UNION ALL SELECT 5, 2, 200 FROM DUAL ) , TMP2 AS ( SELECT EID, TRUNC(AVG(SAL) OVER(ORDER BY DID)) AVG FROM TMP) SELECT AVG FROM TMP2 WHERE EID = 5; Что выведется в результате запроса? Выберете правильный вариант (варианты): Выберите один или несколько ответов:", "a":"h. 180"},
{"n": 308, "q":"WITH TMP AS ( SELECT 1 EID, 1 DID, 100 SAL FROM DUAL UNION ALL SELECT 2, 1, 100 FROM DUAL UNION ALL SELECT 3, 1, 200 FROM DUAL UNION ALL SELECT 4, 2, 300 FROM DUAL UNION ALL SELECT 5, 2, 200 FROM DUAL ) , TMP2 AS ( SELECT EID, TRUNC(AVG(SAL) OVER()) AVG FROM TMP) SELECT AVG FROM TMP2 WHERE EID = 5; Что выведется в результате запроса? Выберете правильный вариант (варианты): Выберите один или несколько ответов:", "a":"h. 180"},
{"n": 309, "q":"WITH TMP AS ( SELECT 1 EID, 1 DID, 100 SAL FROM DUAL UNION ALL SELECT 2, 1, 100 FROM DUAL UNION ALL SELECT 3, 1, 200 FROM DUAL UNION ALL SELECT 4, 2, 300 FROM DUAL UNION ALL SELECT 5, 2, 200 FROM DUAL ) SELECT ID2 FROM TMP CONNECT BY PRIOR ID3 = ID1; Сколько строчек вернет запрос? Выберите правильный вариант (варианты): Выберите один или несколько ответов:", "a":"c. 10"},
{"n": 310, "q":"SELECT ID2 FROM TMP WHERE ID2 != 2 CONNECT BY PRIOR ID1 = ID3 AND ID2 != 2; Сколько строчек вернет запрос? Выберете правильный вариант (варианты):Выберите один или несколько ответов:" , "a":"a. 6" },
{"n": 311, "q":"TMP2 AS (SELECT EID, SUM(SAL) OVER(ORDER BY DID) SUM FROM TMP) SELECT SUM FROM TMP2 WHERE EID = 5; Что выведется в результате запроса? Выберете правильный вариант (варианты):Выберите один или несколько ответов:" , "a":"900" },
{"n": 312, "q":"Как переписать следующий запрос: SELECT MANAGER_ID, DEPARTMENT_ID, SUM(SALARY) FROM EMPLOYEES GROUP BY ROLLUP(MANAGER_ID), CUBE(MANAGER_ID, DEPARTMENT_ID);через обычные GROUP BY и соединения (UNION ALL или UNION) Выберите один или несколько ответов:", "a":"d. Нужно использовать соединения группировок GROUP BY manager_id, department_id и GROUP BY manager_id, manager_id и GROUP BY department_id, manager_id и GROUP BY department_id и GROUP BY (); e. Нужно использовать соединения группировок GROUP BY manager_id, department_id и GROUP BY manager_id, manager_id и GROUP BY department_id и GROUP BY ()"},
{"n": 313, "q":"SELECT ID2 FROM TMP WHERE ID2 != 2 CONNECT BY PRIOR ID3 = ID1; Сколько строчек вернет запрос? Выберете правильный вариант (варианты):Выберите один или несколько ответов:" , "a":"f. 7" },
{"n": 314, "q":"Как переписать следующий запрос: SELECT department_id, job_id, manager_id, SUM(salary) FROM employees GROUP BY manager_id, ROLLUP(job_id), CUBE(department_id);через обычные GROUP BY и соединения (UNION ALL или UNION) Выберите один или несколько ответов:", "a":"e. Нужно использовать соединения группировок GROUP BY manager_id, job_id, department_id и GROUP BY manager_id, job_id и GROUP BY manager_id, department_id и GROUP BY manager_id"},
{"n": 315, "q":"В запросе используется шаблон: '(A[a-zA-Z0-9]{1})([a-zA-Z0-9.-]*)([a-zA-Z0-9]{1})' Какие из представленных строк подходят под заданный шаблон? Выберите один или несколько ответов:", "a":"e. Нужно использовать соединения группировок GROUP BY manager_id, job_id, department_id и GROUP BY manager_id, job_id и GROUP BY manager_id, department_id и GROUP BY manager_id"},
{"n": 316, "q":"Как переписать следующий запрос: SELECT MANAGER_ID, DEPARTMENT_ID, SUM(SALARY) FROM employees GROUP BY ROLLUP(manager_id, department_id), CUBE(manager_id);через обычные GROUP BY и соединения (UNION ALL или UNION): Выберите один или несколько ответов:", "a":"b. Нужно использовать соединения группировок GROUP BY manager_id и GROUP BY manager_id, department_id и GROUP BY()"},
{"n": 317, "q":"TMP2 AS (SELECT EID, COUNT(SAL) OVER(PARTITION BY DID ORDER BY DID) SUM FROM TMP) SELECT SUM FROM TMP2 WHERE EID = 5; Что выведется в результате запроса? Выберете правильный вариант (варианты):Выберите один или несколько ответов:" , "a":"b. 2" },
{"n": 318, "q":"Дана структура таблицы HR.EMPLOYEES:EMPLOYEE_ID NOT NULL NUMBER(6)(Primary Key) FIRST_NAME VARCHAR2(20) LAST_NAME NOT NULL VARCHAR2(25) EMAIL NOT NULL VARCHAR2(25) PHONE_NUMBER VARCHAR2(20) HIRE_DATE NOT NULL DATE JOB_ID NOT NULL VARCHAR2(10) SALARY NUMBER(8,2) COMMISSION_PCT NUMBER(2,2) MANAGER_ID NUMBER(6) DEPARTMENT_ID NUMBER(4) Пользователь хочет переписать запрос SELECT employee_id, last_name, job_id, employee_id * 10 AS new_employee_id FROM HR.EMPLOYEES ORDER BY 1; с использованием конструкции MODEL. Выберете правильный вариант (варианты): Выберите один или несколько ответов:", "a":"c. SELECT employee_id, last_name, job_id, new_employee_id FROM HR.EMPLOYEES MODEL DIMENSION BY (employee_id, job_id) MEASURES (last_name, employee_id new_employee_id) RULES (new_employee_id [ANY, ANY] = new_employee_id [CV(), CV()] * 10) ORDER BY 1;, e. SELECT employee_id, last_name, job_id, new_employee_id FROM HR.EMPLOYEES MODEL DIMENSION BY (employee_id) MEASURES (last_name, job_id, 100500 new_employee_id) RULES(new_employee_id [ANY] = CV(employee_id) * 10) ORDER BY 1;"},
{"n": 319, "q":"Дана структура таблицы HR.EMPLOYEES: EMPLOYEE_ID NOT NULL NUMBER(6)(Primary Key) FIRST_NAME VARCHAR2(20) LAST_NAME NOT NULL VARCHAR2(25) EMAIL NOT NULL VARCHAR2(25) PHONE_NUMBER VARCHAR2(20) HIRE_DATE NOT NULL DATE JOB_ID NOT NULL VARCHAR2(10) SALARY NUMBER(8,2) COMMISSION_PCT NUMBER(2,2) MANAGER_ID NUMBER(6) DEPARTMENT_ID NUMBER(4) Пользователь хочет переписать запрос SELECT employee_id, last_name, job_id, employee_id * 10 AS new_employee_id FROM HR.EMPLOYEES ORDER BY 1; с использованием конструкции MODEL. Выберете правильный вариант (варианты): Выберите один или несколько ответов:", "a":"a. SELECT employee_id, last_name, job_id, new_employee_id FROM HR.EMPLOYEES MODEL DIMENSION BY (employee_id, job_id) MEASURES (last_name, employee_id new_employee_id) RULES (new_employee_id [ANY, ANY] = new_employee_id [CV(employee_id), CV()] * 10) ORDER BY 1;"},
{"n": 320, "q":"Какой из иерархических запросов содержит ошибку? Выберите один или несколько ответов:", "a":"c. SELECT * FROM tab1 CONNECT BY NO CYCLE ID = ID + 1;"},
{"n": 321, "q":"Пользователь делает запрос WITH TMP AS (SELECT 1 EID, 1 DID, 100 SAL FROM DUAL UNION ALL SELECT 2, 1, 100 FROM DUAL UNION ALL SELECT 3, 1, 200 FROM DUAL UNION ALL SELECT 4, 2, 300 FROM DUAL UNION ALL SELECT 5, 2, 200 FROM DUAL), TMP2 AS (SELECT EID, COUNT(SAL) OVER(ORDER BY SAL RANGE 2 PRECEDING) SUM FROM TMP) SELECT SUM FROM TMP2 WHERE EID = 5; Что выведется в результате запроса? Выберете правильный вариант (варианты): Выберите один или несколько ответов:", "a":"a. 2"},
{"n": 322, "q":"Пользователь делает запрос WITH TMP AS (SELECT 1 EID, 1 DID, 100 SAL FROM DUAL UNION ALL SELECT 2, 1, 100 FROM DUAL UNION ALL SELECT 3, 1, 200 FROM DUAL UNION ALL SELECT 4, 2, 300 FROM DUAL UNION ALL SELECT 5, 2, 200 FROM DUAL), TMP2 AS (SELECT EID, TRUNC(AVG(SAL) OVER(ORDER BY SAL RANGE UNBOUNDED PRECEDING)) AVG FROM TMP) SELECT AVG FROM TMP2 WHERE EID = 5; Что выведется в результате запроса? Выберете правильный вариант (варианты): Выберите один или несколько ответов:", "a":"d. 150"},
{"n": 323, "q":"Пользователь хочет переписать запрос SELECT employee_id, last_name, job_id, employee_id *10 AS new_employee_id FROM HR.EMPLOYEES ORDER BY 1; с использованием конструкции MODEL Выберете правильный вариант (варианты): Выберите один или несколько ответов:", "a":" c, e "}, 
{"n": 324, "q":"Пользователь хочет переписать запрос SELECT employee_id, last_name, salary FROM HR.EMPLOYEES ORDER BY 1; с использованием конструкции MODEL Выберете правильный вариант (варианты): Выберите один или несколько ответов:", "a":"d"},
{"n": 105, "q": "Какие из представленных запросов выведут последовательность чисел от 5 до 25?", "a": "SELECT level+4 FROM DUAL CONNECT BY level<=21, SELECT level+4 FROM DUAL CONNECT BY level+4<=25; SELECT level FROM DUAL START WITH level=5 CONNECT BY level<=25"}
];

let app_data;


chrome.runtime.onMessage.addListener(
	function (message, sender, sendResponse) {
		//console.log("Background received message");
		//console.log(message, sender);
		switch (message.action) {
			case "SaveData":
				app_data = message.data;
				break;
			case "LoadData":
				if (!app_data) {
					app_data = {
						err_codes: [null, false, false, false, false], 
						isEnabled: true, 
						search_request: "",
						search_result: [], 
						search_result_size: 0 
					}; 
				}
				//console.log(app_data);
				sendResponse( {data:app_data} );
				break;
			case "SearchOne":
				sendResponse( SearchFor(message.search_str) );
				break;
			case "SearchMany":
				sendResponse( { answers:SearchMany(message.questions) } );
				break;
			case "ReloadHack":
				let computed_answers = []; 
				chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
					chrome.tabs.sendMessage(tabs[0].id, {action:"GetQuestions"}, function(response){
						//console.log("Content script returned questions: ", response);
						if (response.result === "ok"){
							computed_answers = SearchMany(response.questions);
							chrome.tabs.sendMessage(tabs[0].id, {action:"AddTips", answers: computed_answers}, function(response){
								console.log("Content script added tips: ", response);
								if (response.result === "ok"){
									sendResponse( { result:"ok" } );
								}
							});
						}
						
					});
				});
				
				break;
		}
		return true;
	}
);

// ****************
// Replace with fresh
// ****************

function AreSimiliar(question1, question2) {
/* Сравнение. Убираем все символы кроме алфавитов, цифр. Плюс на всякий убираем ьъеёщш. А то всякие неграмотные путают тся и ться, щ и ш... */

	let QUESTION_MASK = /([ёеьъшщ]|[^а-яА-ЯёЁ0-9a-zA-Z])/g;
	let q1 = question1.replace(QUESTION_MASK, '').toLowerCase();
	let q2 = question2.replace(QUESTION_MASK, '').toLowerCase();
	if (q1.indexOf(q2) >= 0 || q2.indexOf(q1) >= 0) return true;

	/* Оставляем только гласные и цифры */
	let q1_noV = q1.replace(/[уеыаоэяию eyuioa0-9]/g, '');
	let q2_noV = q2.replace(/[уеыаоэяию eyuioa0-9]/g, '');
	if (q1_noV.indexOf(q2_noV) >= 0 || q2_noV.indexOf(q1_noV) >= 0) return true;
	
	/* Оставляем только согласные и цифры */
	let q1_noС = q1.replace(/[йцкншщзхъфвпрлджчсмтьб qwrtpsdfghjklzxcvbnm0-9]/g, '');
	let q2_noС = q2.replace(/[йцкншщзхъфвпрлджчсмтьб qwrtpsdfghjklzxcvbnm0-9]/g, '');
	if (q1_noС.indexOf(q2_noС) >= 0 || q2_noС.indexOf(q1_noС) >= 0) return true;

	return false;
}

function SearchFor(question){
	let result = [];
	for (a in answers) {
		if (AreSimiliar(question, answers[a]['q']) ) 
			result.push(answers[a]);
	}
	return result || [];
}

function SearchMany(questions){
	let computed_answers = [];
	let texts = questions.texts;
	for(let i = 0; i < texts.length; ++i){
		computed_answers.push(SearchFor(texts[i]));
	}
	return computed_answers;
}